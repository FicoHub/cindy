import path from 'node:path';
import { eq } from 'drizzle-orm';
import {
  TodoError,
  todoActionText,
  preflightTodoEvents,
  type TodoPatch,
  type TeammateTodo,
} from '@cindy/maker-shared/teammate-todo';
import {
  activeOwnerScopeKey,
  isAppSessionBoundaryPending,
  ownerScopedUserDataPath,
} from '../appSessionState.js';
import { getDbClient } from '../localDb/client/current.js';
import { botProfiles } from '../localDb/schema.js';
import { botProfileDir } from './botProfileFolder.js';
import { broadcastBotWorkbenchChanged, readBotWorkbenchState } from './botWorkbenchService.js';
import { broadcastBotRemoteResourceChanged } from './botRemoteResourceInvalidation.js';
import { resolveWorkbenchCaller } from './botWorkbenchTools.js';
import { createBotTodoStore, type TodoIngestInput, type TodoIngestResult } from './botTodoStore.js';

export interface BotTodoAccess {
  list(): Promise<{ items: TeammateTodo[]; version: 1 }>;
  patch(input: TodoPatch): Promise<TeammateTodo>;
  ingest(input: TodoIngestInput): Promise<TodoIngestResult>;
  preflight(
    events: Parameters<typeof preflightTodoEvents>[1],
  ): Promise<ReturnType<typeof preflightTodoEvents>>;
  act(
    id: string,
    revision: number,
    requestId: string,
    locale?: string,
  ): Promise<TeammateTodo | null>;
}
export type TodoDispatchResult = { ok: boolean; queued?: boolean; error?: string };
export type TodoDispatchInput = {
  sessionId: string;
  message: string;
  displayText: string;
  requestId: string;
  assertCurrent: () => void;
  onSettled: (result: { ok: boolean; error?: string }) => Promise<void>;
};
type Dispatch = (p: TodoDispatchInput) => Promise<TodoDispatchResult>;
let dispatch: Dispatch | null = null;
export function configureBotTodoDispatch(value: Dispatch) {
  dispatch = value;
}
export async function todoAccess(botId: string): Promise<BotTodoAccess> {
  const owner = activeOwnerScopeKey(),
    root = ownerScopedUserDataPath();
  const assertCurrent = () => {
    if (isAppSessionBoundaryPending() || activeOwnerScopeKey() !== owner)
      throw new TodoError('OWNER_SCOPE_CHANGED');
  };
  assertCurrent();
  const [bot] = await getDbClient()
    .drizzle.select({
      id: botProfiles.id,
      status: botProfiles.status,
      sessionId: botProfiles.canonicalSessionId,
    })
    .from(botProfiles)
    .where(eq(botProfiles.id, botId))
    .limit(1);
  assertCurrent();
  if (!bot || bot.status !== 'active') throw new TodoError('NOT_FOUND');
  const readLegacy = () => readBotWorkbenchState(root, botId);
  const store = createBotTodoStore(
    path.join(botProfileDir(root, botId), 'todos.v1.json'),
    async () => (await readLegacy()).tasks,
    assertCurrent,
  );
  const changed = () => {
    assertCurrent();
    broadcastBotWorkbenchChanged(botId);
    broadcastBotRemoteResourceChanged(botId);
  };
  return {
    list: async () => {
      const state = await store.read();
      return { items: state.items, version: 1 as const };
    },
    patch: async (p: TodoPatch) => {
      const state = await readLegacy();
      for (const s of p.sources ?? [])
        if (s.project && !state.directories.includes(s.project))
          throw new TodoError('SOURCE_OUTSIDE_SCOPE');
      const saved = await store.patch(p);
      changed();
      return saved;
    },
    ingest: async (p: TodoIngestInput) => {
      const scope = await readLegacy();
      for (const s of p.patch?.sources ?? [])
        if (s.project && !scope.directories.includes(s.project))
          throw new TodoError('SOURCE_OUTSIDE_SCOPE');
      const saved = await store.ingest(p);
      changed();
      return saved;
    },
    preflight: async (events: Parameters<typeof preflightTodoEvents>[1]) =>
      preflightTodoEvents(await store.read(), events, (await readLegacy()).directories),
    act: async (id: string, revision: number, requestId: string, locale?: string) => {
      if (!bot.sessionId || !dispatch) throw new TodoError('HOST_NOT_READY');
      const prepared = await store.prepareAction(id, revision, requestId);
      changed();
      if (!prepared.dispatch) return prepared.todo;
      try {
        assertCurrent();
        const t = prepared.todo;
        const result = await dispatch({
          sessionId: bot.sessionId,
          requestId,
          displayText: todoActionText(
            t.title,
            t.next?.label ?? t.title,
            typeof locale === 'string' ? locale : 'en',
          ),
          message: JSON.stringify({
            kind: 'todo-action',
            todo_id: t.id,
            revision: t.revision,
            next: t.next,
            outcome: t.outcome,
            scope:
              'Advance only this agreed next step under existing permissions. Read the same Todo, preserve sources, and update it after a real receipt. Recording or reading external messages does not authorize sending, spending or broader access.',
          }),
          assertCurrent,
          onSettled: async (result) => {
            assertCurrent();
            await store.settleAction(id, requestId, result);
            changed();
          },
        });
        // Enqueue success is only receipt. Coordinator dispatch/discard settles it later.
        if (result.ok && result.queued)
          return (await store.read()).items.find((item) => item.id === id) ?? null;
        const settled = await store.settleAction(id, requestId, result);
        changed();
        return settled;
      } catch (error) {
        // An uncertain dispatch is never automatically replayed (especially external sends).
        await store.settleAction(id, requestId, {
          ok: false,
          uncertain: true,
          error: error instanceof Error ? error.message : 'UNKNOWN',
        });
        changed();
        throw error;
      }
    },
  };
}
export async function todoForCaller(callerSessionId: string): Promise<BotTodoAccess> {
  const owner = activeOwnerScopeKey();
  const caller = await resolveWorkbenchCaller(callerSessionId);
  if (!caller.ok) throw new TodoError(caller.errorCode);
  if (owner !== activeOwnerScopeKey()) throw new TodoError('OWNER_SCOPE_CHANGED');
  return todoAccess(caller.botId);
}
