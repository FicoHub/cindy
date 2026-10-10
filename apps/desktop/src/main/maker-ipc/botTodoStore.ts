import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID, createHash } from 'node:crypto';
import {
  applyTodoPatch,
  emptyTodoState,
  TodoError,
  todoVisible,
  validateTodoDeadline,
  type TodoPatch,
  type TodoState,
  type TeammateTodo,
} from '@cindy/maker-shared/teammate-todo';
import { withCrossProcessLock } from '../device-link/crossProcessLock.js';
import type { WorkbenchTaskJudgment } from '../../shared/botWorkbench.js';
import { parseWorkbenchTaskId } from '../../shared/botWorkbench.js';

export interface TodoIngestInput {
  source: string;
  sequence: number;
  patch?: TodoPatch;
  skip?: 'duplicate' | 'suppressed' | 'outside-scope' | 'no-action';
}
export interface TodoIngestResult {
  duplicate: boolean;
  suppressed?: boolean;
  todo?: TeammateTodo | null;
}
export interface BotTodoStore {
  read(): Promise<TodoState>;
  patch(patch: TodoPatch): Promise<TeammateTodo>;
  ingest(input: TodoIngestInput): Promise<TodoIngestResult>;
  prepareAction(
    id: string,
    revision: number,
    requestId: string,
  ): Promise<{ todo: TeammateTodo; dispatch: boolean }>;
  settleAction(
    id: string,
    requestId: string,
    result: { ok: boolean; uncertain?: boolean; error?: string },
  ): Promise<TeammateTodo | null>;
}
/** A separate versioned affair store preserves the old task/project file unchanged. */
export function createBotTodoStore(
  file: string,
  legacy: () => Promise<Record<string, WorkbenchTaskJudgment>>,
  assertCurrent = () => {},
): BotTodoStore {
  async function read(): Promise<TodoState> {
    assertCurrent();
    let state: TodoState;
    try {
      const raw = JSON.parse(await fs.readFile(file, 'utf8')) as TodoState;
      if (
        raw.version !== 1 ||
        !Array.isArray(raw.items) ||
        !raw.cursors ||
        !raw.receipts ||
        raw.items.some(
          (t) =>
            !t ||
            typeof t.id !== 'string' ||
            !Number.isInteger(t.revision) ||
            !Array.isArray(t.sources) ||
            !Array.isArray(t.history) ||
            !Array.isArray(t.associations) ||
            !['open', 'done'].includes(t.status),
        )
      )
        throw new TodoError('CORRUPT_STORE');
      if (
        typeof raw.cursors !== 'object' ||
        typeof raw.receipts !== 'object' ||
        Array.isArray(raw.cursors) ||
        Array.isArray(raw.receipts) ||
        Object.entries(raw.cursors).some(
          ([key, value]) => !key || !Number.isSafeInteger(value) || value < 0,
        ) ||
        Object.values(raw.receipts).some((value) => typeof value !== 'string')
      )
        throw new TodoError('CORRUPT_STORE');
      const ids = new Set<string>(),
        keys = new Set<string>();
      for (const t of raw.items) {
        if (ids.has(t.id) || keys.has(t.key)) throw new TodoError('CORRUPT_STORE');
        ids.add(t.id);
        keys.add(t.key);
        if (
          t.sources.some(
            (s) =>
              !s ||
              typeof s.id !== 'string' ||
              !s.id ||
              typeof s.label !== 'string' ||
              !['conversation', 'mail', 'feishu', 'github', 'community', 'task'].includes(s.kind) ||
              (s.ref !== undefined && (typeof s.ref !== 'string' || !/^https:\/\//.test(s.ref))),
          ) ||
          t.associations.some(
            (a) =>
              !a ||
              !['task', 'pr'].includes(a.kind) ||
              typeof a.id !== 'string' ||
              typeof a.label !== 'string',
          ) ||
          t.history.some(
            (h) =>
              !h ||
              typeof h.summary !== 'string' ||
              !h.summary ||
              !Number.isFinite(Date.parse(h.at)),
          ) ||
          (t.next !== null &&
            (!t.next ||
              typeof t.next.label !== 'string' ||
              typeof t.next.instruction !== 'string' ||
              !['advance', 'view', 'decide'].includes(t.next.kind))) ||
          (t.decision !== null &&
            (!t.decision ||
              !['deleted', 'muted', 'later'].includes(t.decision.kind) ||
              (t.decision.kind === 'later' && !Number.isFinite(Date.parse(t.decision.until!))))) ||
          (t.action !== null &&
            (!t.action ||
              typeof t.action.requestId !== 'string' ||
              !['received', 'accepted', 'failed', 'unknown'].includes(t.action.state)))
        )
          throw new TodoError('CORRUPT_STORE');
        if (
          !t.id ||
          !t.key ||
          !Number.isSafeInteger(t.revision) ||
          t.revision < 1 ||
          !t.title ||
          !t.outcome ||
          typeof t.progress !== 'string' ||
          typeof t.value !== 'string' ||
          !['assigned', 'discovered'].includes(t.origin) ||
          !Number.isFinite(Date.parse(t.createdAt)) ||
          !Number.isFinite(Date.parse(t.updatedAt))
        )
          throw new TodoError('CORRUPT_STORE');
        try {
          validateTodoDeadline(t.sourceDeadline);
          if (t.deadlineOverride) validateTodoDeadline(t.deadlineOverride.value);
          if (t.deadlineCandidate) validateTodoDeadline(t.deadlineCandidate.value);
        } catch {
          throw new TodoError('CORRUPT_STORE');
        }
      }
      state = raw;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
      state = emptyTodoState();
      // Old session judgments remain task metadata. Only actual old PR/idea Todo entries migrate.
      for (const [legacyId, j] of Object.entries(await legacy())) {
        const ref = parseWorkbenchTaskId(legacyId);
        if (!ref || !['github', 'idea'].includes(ref.kind)) continue;
        const at = j.updatedAt;
        state.items.push({
          id: 'todo:legacy-' + createHash('sha256').update(legacyId).digest('hex').slice(0, 24),
          revision: 1,
          key: 'legacy:' + legacyId,
          origin: j.verdict === 'idea' ? 'discovered' : 'assigned',
          title: j.title,
          progress: j.next ?? '',
          outcome: j.title,
          value: '',
          next:
            j.verdict === 'done'
              ? null
              : { label: 'Continue', instruction: j.next || j.title, kind: 'advance' },
          sources: [
            {
              kind: ref.kind === 'github' ? 'github' : 'conversation',
              id: legacyId,
              label: j.title,
              ...(j.ref && /^https:\/\//.test(j.ref) ? { ref: j.ref } : {}),
              project: j.project,
            },
          ],
          associations:
            ref.kind === 'github' && ref.type === 'pr'
              ? [{ kind: 'pr', id: legacyId, label: j.title }]
              : [],
          status: j.verdict === 'done' ? 'done' : 'open',
          createdAt: at,
          updatedAt: at,
          sourceDeadline: null,
          deadlineCandidate: null,
          suggestedDate: null,
          decision: null,
          history:
            j.verdict === 'done'
              ? [
                  {
                    summary: j.next || 'Legacy completion evidence was not recorded',
                    ...(j.ref ? { ref: j.ref } : {}),
                    at,
                  },
                ]
              : [],
          action: null,
          legacyId,
        });
      }
    }
    assertCurrent();
    return state;
  }
  async function mutate<T>(fn: (state: TodoState) => T): Promise<T> {
    assertCurrent();
    await fs.mkdir(path.dirname(file), { recursive: true });
    return withCrossProcessLock(
      file + '.lock',
      { label: 'teammate-todo', waitMs: 12000 },
      async (held) => {
        if (!held.held) throw new TodoError('BUSY');
        assertCurrent();
        const state = await read(),
          result = fn(state);
        assertCurrent();
        const temp = file + '.' + randomUUID() + '.tmp';
        try {
          await fs.writeFile(temp, JSON.stringify(state) + '\n', { encoding: 'utf8', mode: 0o600 });
          assertCurrent();
          await fs.rename(temp, file);
        } finally {
          await fs.rm(temp, { force: true }).catch(() => {});
        }
        assertCurrent();
        return result;
      },
    );
  }
  return {
    read,
    patch: (patch: TodoPatch) => mutate((s) => applyTodoPatch(s, patch, 'todo:' + randomUUID())),
    ingest: (params: {
      source: string;
      sequence: number;
      patch?: TodoPatch;
      skip?: 'duplicate' | 'suppressed' | 'outside-scope' | 'no-action';
    }) =>
      mutate((s) => {
        if (
          !/^[A-Za-z0-9:_./-]{1,512}$/.test(params.source) ||
          ['__proto__', 'prototype', 'constructor'].includes(params.source) ||
          !Number.isSafeInteger(params.sequence) ||
          params.sequence < 0
        )
          throw new TodoError('INVALID_EVENT');
        const receipt = params.source + ':' + params.sequence;
        if (
          params.sequence <=
            (Object.hasOwn(s.cursors, params.source) ? s.cursors[params.source] : -1) ||
          Object.hasOwn(s.receipts, receipt)
        )
          return { duplicate: true };
        if (!params.patch && !params.skip) throw new TodoError('INVALID_EVENT');
        const existing = s.items.find(
          (t) => t.key === params.patch?.key || t.id === params.patch?.id,
        );
        const suppressed = (!!existing && !todoVisible(existing)) || existing?.status === 'done';
        const saved =
          params.patch && !suppressed
            ? applyTodoPatch(s, params.patch, 'todo:' + randomUUID())
            : null;
        s.cursors[params.source] = params.sequence;
        // The monotonic cursor already proves older receipts; retain only the latest per stream.
        for (const key of Object.keys(s.receipts)) {
          const split = key.lastIndexOf(':');
          if (key.slice(0, split) === params.source) delete s.receipts[key];
        }
        s.receipts[receipt] = saved?.id ?? params.skip ?? 'suppressed';
        return { duplicate: false, suppressed, todo: saved };
      }),
    prepareAction: (id: string, revision: number, requestId: string) =>
      mutate((s) => {
        const t = s.items.find((t) => t.id === id);
        if (!t) throw new TodoError('NOT_FOUND');
        if (t.action && (t.action.requestId === requestId || t.action.state !== 'failed'))
          return { todo: t, dispatch: false };
        if (t.revision !== revision) throw new TodoError('CONFLICT');
        if (t.decision?.kind === 'later' && todoVisible(t)) t.decision = null;
        if (t.status !== 'open' || t.decision || !t.next || t.next.kind === 'view')
          throw new TodoError('NO_NEXT_ACTION');
        if (!/^[A-Za-z0-9_-]{1,80}$/.test(requestId)) throw new TodoError('INVALID_REQUEST_ID');
        t.action = { requestId, revision: t.revision, state: 'received' };
        return { todo: structuredClone(t), dispatch: true };
      }),
    settleAction: (
      id: string,
      requestId: string,
      result: { ok: boolean; uncertain?: boolean; error?: string },
    ) =>
      mutate((s) => {
        const t = s.items.find((t) => t.id === id);
        if (!t?.action || t.action.requestId !== requestId) return null;
        t.action = {
          ...t.action,
          state: result.ok ? 'accepted' : result.uncertain ? 'unknown' : 'failed',
          ...(result.error ? { error: result.error.slice(0, 500) } : {}),
        };
        return t;
      }),
  };
}
