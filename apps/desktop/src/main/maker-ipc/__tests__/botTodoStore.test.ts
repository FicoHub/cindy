import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { createBotTodoStore } from '../botTodoStore';
const roots: string[] = [];
afterEach(async () => {
  for (const root of roots.splice(0)) await rm(root, { recursive: true, force: true });
});
async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'todo-contract-'));
  roots.push(root);
  return { root, file: path.join(root, 'todos.v1.json') };
}
const p = {
  key: 'quote:1',
  title: '比较报价',
  outcome: '报价比较并获得用户确认',
  next: {
    label: '比较报价',
    instruction: '读取已授权报价，准备比较，不发送邮件',
    kind: 'advance' as const,
  },
  sources: [
    { kind: 'mail' as const, id: 'mail1', label: '报价邮件', ref: 'https://example.test/quote' },
  ],
};
describe('host Todo persistence', () => {
  it('preserves fields after partial writes across independent store instances', async () => {
    const { file } = await fixture(),
      a = createBotTodoStore(file, async () => ({})),
      b = createBotTodoStore(file, async () => ({}));
    const t = await a.patch(p);
    await b.patch({ id: t.id, expectedRevision: t.revision, progress: '草稿已准备' });
    const result = (await a.read()).items[0];
    expect(result.sources[0].ref).toBe(p.sources[0].ref);
    expect(result.next).toEqual(p.next);
    const races = await Promise.allSettled([
      a.patch({ id: t.id, expectedRevision: 2, title: '新标题' }),
      b.patch({ id: t.id, expectedRevision: 2, title: '并发旧标题' }),
    ]);
    expect(races.filter((r) => r.status === 'fulfilled')).toHaveLength(1);
    expect((await a.read()).items[0].revision).toBe(3);
  });
  it('acknowledges only successful events, merges the same key, and suppresses cross-source repeats', async () => {
    const { file } = await fixture(),
      s = createBotTodoStore(file, async () => ({}));
    await expect(
      s.ingest({ source: 'mail', sequence: 1, patch: { key: 'bad' } }),
    ).rejects.toThrow();
    expect((await s.read()).cursors.mail).toBeUndefined();
    const saved = await s.ingest({ source: 'mail', sequence: 1, patch: p });
    expect(saved.todo).toBeTruthy();
    expect((await s.ingest({ source: 'mail', sequence: 1, patch: p })).duplicate).toBe(true);
    const t = (await s.read()).items[0];
    await s.patch({ id: t.id, expectedRevision: t.revision, operation: 'delete' });
    expect(
      (
        await s.ingest({
          source: 'feishu',
          sequence: 1,
          patch: { ...p, sources: [{ kind: 'feishu', id: 'f1', label: '同事转述' }] },
        })
      ).suppressed,
    ).toBe(true);
    expect((await s.read()).items).toHaveLength(1);
    const deleted = (await s.read()).items[0];
    await s.patch({ id: deleted.id, expectedRevision: deleted.revision, operation: 'restore' });
    const active = (await s.read()).items[0];
    await s.ingest({
      source: 'feishu',
      sequence: 2,
      patch: {
        id: active.id,
        expectedRevision: active.revision,
        sources: [{ kind: 'feishu', id: 'f2', label: '另一条反馈' }],
      },
    });
    expect((await s.read()).items[0].sources).toHaveLength(2);
  });
  it('records receipts without dispatch replay, and ignores a stale receipt after the next step changes', async () => {
    const { file } = await fixture(),
      s = createBotTodoStore(file, async () => ({})),
      t = await s.patch(p);
    expect((await s.prepareAction(t.id, t.revision, 'request-1')).dispatch).toBe(true);
    expect((await s.prepareAction(t.id, t.revision, 'request-2')).dispatch).toBe(false);
    await s.settleAction(t.id, 'request-1', { ok: false, uncertain: true });
    expect((await s.prepareAction(t.id, t.revision, 'request-3')).dispatch).toBe(false);
    await s.patch({
      id: t.id,
      expectedRevision: t.revision,
      next: { kind: 'decide', label: '确认报价', instruction: '让用户确认比较结果' },
    });
    expect(await s.settleAction(t.id, 'request-1', { ok: true })).toBeNull();
    expect((await s.read()).items[0].action).toBeNull();
  });
  it('fails closed on corruption and rejects owner changes without writing', async () => {
    const { file } = await fixture();
    await writeFile(file, '{invalid');
    const s = createBotTodoStore(file, async () => ({}));
    await expect(s.patch(p)).rejects.toThrow();
    expect(await readFile(file, 'utf8')).toBe('{invalid');
    const f = await fixture();
    let current = true;
    const scoped = createBotTodoStore(
      f.file,
      async () => ({}),
      () => {
        if (!current) throw new Error('OWNER_SCOPE_CHANGED');
      },
    );
    current = false;
    await expect(scoped.patch(p)).rejects.toThrow('OWNER_SCOPE_CHANGED');
    await expect(readFile(f.file)).rejects.toMatchObject({ code: 'ENOENT' });
  });
  it('imports old affairs with stable IDs, but never duplicates ordinary Session judgments', async () => {
    const { file } = await fixture();
    const j = {
      project: '/cindy',
      title: '旧承诺',
      verdict: 'unfinished' as const,
      next: '继续验收',
      ref: 'https://example.test/old',
      updatedAt: '2026-10-01T00:00:00Z',
    };
    const legacy = async () => ({
      'pr:makecindy/cindy#12': j,
      'idea:foo': j,
      'ordinary-session': j,
    });
    const a = createBotTodoStore(file, legacy),
      b = createBotTodoStore(file, legacy);
    expect((await a.read()).items).toHaveLength(2);
    expect((await a.read()).items.map((t) => t.id)).toEqual(
      (await b.read()).items.map((t) => t.id),
    );
    const t = (await a.read()).items[0];
    await a.patch({ id: t.id, expectedRevision: t.revision, progress: '最新进展' });
    expect((await b.read()).items).toHaveLength(2);
  });
  it('keeps two owners and two teammates isolated in separate homes', async () => {
    const one = await fixture(),
      two = await fixture();
    const a = createBotTodoStore(path.join(one.root, 'a.json'), async () => ({})),
      b = createBotTodoStore(path.join(one.root, 'b.json'), async () => ({})),
      other = createBotTodoStore(two.file, async () => ({}));
    await a.patch(p);
    expect((await b.read()).items).toEqual([]);
    expect((await other.read()).items).toEqual([]);
  });
});

it('accepts only a matching attempt receipt and never turns it into affair completion', async () => {
  const { file } = await fixture(),
    s = createBotTodoStore(file, async () => ({})),
    t = await s.patch(p);
  await s.prepareAction(t.id, 1, 'attempt-one');
  await s.settleAction(t.id, 'attempt-one', { ok: true });
  await expect(
    s.patch({
      id: t.id,
      expectedRevision: 1,
      progress: '旧回执',
      resolvedActionRequestId: 'older-attempt',
    }),
  ).rejects.toThrow('STALE_RECEIPT');
  await expect(
    s.patch({ id: t.id, expectedRevision: 1, resolvedActionRequestId: 'attempt-one' }),
  ).rejects.toThrow('RECEIPT_EVIDENCE_REQUIRED');
  const saved = await s.patch({
    id: t.id,
    expectedRevision: 1,
    progress: '尝试失败，服务未发送；可重试',
    resolvedActionRequestId: 'attempt-one',
  });
  expect(saved.action).toBeNull();
  expect(saved.status).toBe('open');
  expect((await s.prepareAction(t.id, saved.revision, 'attempt-two')).dispatch).toBe(true);
});

it('expired deferral allows advancing the same next step without altering its real deadline', async () => {
  const { file } = await fixture(),
    s = createBotTodoStore(file, async () => ({}));
  const t = await s.patch({
    ...p,
    sourceDeadline: { kind: 'date', date: '2026-10-10', timeZone: 'UTC' },
  });
  const later = await s.patch({
    id: t.id,
    expectedRevision: 1,
    operation: 'later',
    until: new Date(Date.now() + 86400000).toISOString(),
  });
  await expect(s.prepareAction(t.id, later.revision, 'before')).rejects.toThrow('NO_NEXT_ACTION');
  const expired = await s.read();
  expired.items[0].decision = { kind: 'later', until: '2020-01-01T00:00:00Z' };
  await writeFile(file, JSON.stringify(expired));
  expect((await s.prepareAction(t.id, later.revision, 'after')).dispatch).toBe(true);
  expect((await s.read()).items[0].sourceDeadline?.date).toBe('2026-10-10');
});

it('reconciles later legacy writes into the same record after new-format persistence, preserving dates and rejection', async () => {
  const { file } = await fixture();
  let legacy: Record<string, import('../../../shared/botWorkbench.js').WorkbenchTaskJudgment> = {};
  const s = createBotTodoStore(file, async () => legacy);
  await s.patch(p);
  const j = {
    project: '/cindy',
    title: '旧工具创建',
    verdict: 'unfinished' as const,
    next: '准备草稿',
    ref: 'https://example.test/legacy',
    updatedAt: '2026-10-01T00:00:00Z',
  };
  legacy = { 'idea:later': j };
  let t = (await s.read()).items.find((t) => t.legacyId === 'idea:later')!;
  t = await s.patch({
    id: t.id,
    expectedRevision: t.revision,
    deadlineOverride: { value: { kind: 'date', date: '2026-10-11', timeZone: 'UTC' } },
    operation: 'mute',
  });
  legacy = {
    'idea:later': {
      ...j,
      title: '旧工具最新进展',
      next: '报价草稿已准备',
      ref: null,
      updatedAt: '2026-10-02T00:00:00Z',
    },
  };
  const changed = (await s.read()).items.find((x) => x.id === t.id)!;
  expect(changed.title).toBe('旧工具最新进展');
  expect(changed.progress).toBe('报价草稿已准备');
  expect(changed.deadlineOverride).toEqual(t.deadlineOverride);
  expect(changed.decision?.kind).toBe('muted');
  expect(changed.sources[0].ref).toBe(j.ref);
  expect((await s.read()).items).toHaveLength(2);
  await s.patch({ id: changed.id, expectedRevision: changed.revision, operation: 'restore' });
  expect((await s.read()).items.find((x) => x.id === changed.id)?.revision).toBe(
    changed.revision + 1,
  );
});

it('keeps a user-reopened legacy completion open when only its old description changes', async () => {
  const { file } = await fixture();
  let j = {
    project: '/cindy',
    title: '原约定',
    verdict: 'done' as const,
    next: '原依据',
    ref: null,
    updatedAt: '2026-10-01T00:00:00Z',
  };
  const s = createBotTodoStore(file, async () => ({ 'idea:reopened': j }));
  const initial = (await s.read()).items[0];
  const reopened = await s.patch({
    id: initial.id,
    expectedRevision: initial.revision,
    operation: 'reopen',
    next: { label: '验收', instruction: '确认约定', kind: 'decide' },
  });
  j = { ...j, title: '旧工具补充标题', updatedAt: '2026-10-02T00:00:00Z' };
  const changed = (await s.read()).items[0];
  expect(changed.status).toBe('open');
  expect(changed.next).toEqual(reopened.next);
  expect(changed.history).toEqual(reopened.history);
});

it('rejects valid JSON with corrupt or overlong text without rewriting the file', async () => {
  const { file } = await fixture();
  const s = createBotTodoStore(file, async () => ({}));
  const t = await s.patch(p);
  const clean = await s.read();
  for (const fields of [
    { title: {} },
    { outcome: [] },
    { title: 'x'.repeat(301) },
    { progress: 'x'.repeat(4001) },
  ]) {
    const corrupt = structuredClone(clean);
    Object.assign(corrupt.items[0], fields);
    const content = JSON.stringify(corrupt);
    await writeFile(file, content);
    await expect(s.read()).rejects.toThrow('CORRUPT_STORE');
    await expect(
      s.patch({ id: t.id, expectedRevision: t.revision, progress: '不能写入' }),
    ).rejects.toThrow('CORRUPT_STORE');
    expect(await readFile(file, 'utf8')).toBe(content);
  }
});
