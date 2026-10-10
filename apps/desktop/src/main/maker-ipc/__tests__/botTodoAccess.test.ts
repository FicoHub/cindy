import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
const env = vi.hoisted(() => ({
  owner: 'owner-one',
  root: '',
  active: true,
  pending: false,
  projects: ['/cindy'],
  notify: vi.fn(),
}));
vi.mock('../../appSessionState.js', () => ({
  activeOwnerScopeKey: () => env.owner,
  ownerScopedUserDataPath: () => env.root,
  isAppSessionBoundaryPending: () => env.pending,
}));
vi.mock('../../localDb/client/current.js', () => ({
  getDbClient: () => ({
    drizzle: {
      select: () => ({
        from: () => ({
          where: () => ({
            limit: async () => [
              {
                id: 'bot-one',
                status: env.active ? 'active' : 'deleted',
                sessionId: 'canonical-one',
              },
            ],
          }),
        }),
      }),
    },
  }),
}));
vi.mock('../botWorkbenchService.js', () => ({
  readBotWorkbenchState: async () => ({ directories: env.projects, tasks: {} }),
  broadcastBotWorkbenchChanged: env.notify,
}));
vi.mock('../botRemoteResourceInvalidation.js', () => ({
  broadcastBotRemoteResourceChanged: env.notify,
}));
vi.mock('../botWorkbenchTools.js', () => ({
  resolveWorkbenchCaller: async (id: string) =>
    id === 'canonical-one'
      ? { ok: true, botId: 'bot-one' }
      : { ok: false, errorCode: 'NOT_A_BOT_SESSION' },
}));
import { configureBotTodoDispatch, todoAccess, todoForCaller } from '../botTodoAccess';
let root = '';
beforeEach(async () => {
  root = await mkdtemp(path.join(os.tmpdir(), 'todo-owner-'));
  env.root = root;
  env.owner = 'owner-one';
  env.active = true;
  env.pending = false;
  env.notify.mockClear();
});
afterEach(async () => rm(root, { recursive: true, force: true }));
const patch = {
  key: 'same-feedback',
  title: '修复同一问题',
  outcome: '升级路径验收通过',
  next: {
    kind: 'advance' as const,
    label: '继续验收',
    instruction: '运行隔离数据验收，不发送消息',
  },
};
describe('Todo public access', () => {
  it('enforces current active canonical teammate and owner fences', async () => {
    await expect(todoForCaller('ordinary-session')).rejects.toMatchObject({
      code: 'NOT_A_BOT_SESSION',
    });
    const access = await todoForCaller('canonical-one');
    await access.patch(patch);
    env.owner = 'owner-two';
    await expect(access.list()).rejects.toMatchObject({ code: 'OWNER_SCOPE_CHANGED' });
    env.owner = 'owner-one';
    env.active = false;
    await expect(todoAccess('bot-one')).rejects.toMatchObject({ code: 'NOT_FOUND' });
  });
  it('checks every scoped source and does not advance rejected events', async () => {
    const access = await todoAccess('bot-one');
    await expect(
      access.ingest({
        source: 'mail',
        sequence: 1,
        patch: {
          ...patch,
          sources: [
            { kind: 'github', id: '1', label: 'Cindy', project: '/cindy' },
            { kind: 'mail', id: '2', label: 'Unrelated', project: '/private' },
          ],
        },
      }),
    ).rejects.toMatchObject({ code: 'SOURCE_OUTSIDE_SCOPE' });
    expect(
      await access.preflight([{ source: 'mail', sequence: 1, key: patch.key, project: '/cindy' }]),
    ).toMatchObject([{ decision: 'review' }]);
  });
  it('single-click dispatches only once and preserves received vs accepted', async () => {
    let resolve: (value: { ok: boolean }) => void = () => {};
    const send = vi.fn(
      () =>
        new Promise<{ ok: boolean }>((r) => {
          resolve = r;
        }),
    );
    configureBotTodoDispatch(send);
    const access = await todoAccess('bot-one'),
      todo = await access.patch(patch);
    const first = access.act(todo.id, todo.revision, 'request-first');
    await vi.waitFor(() => expect(send).toHaveBeenCalledOnce());
    expect((await access.list()).items[0].action?.state).toBe('received');
    await access.act(todo.id, todo.revision, 'request-second');
    expect(send).toHaveBeenCalledOnce();
    resolve({ ok: true });
    await first;
    const saved = (await access.list()).items[0];
    expect(saved.action?.state).toBe('accepted');
    expect(saved.status).toBe('open');
    expect(send.mock.calls[0][0]).toMatchObject({
      sessionId: 'canonical-one',
      requestId: 'request-first',
    });
  });
  it('does not blindly replay an uncertain dispatch', async () => {
    const send = vi.fn(async () => {
      throw new Error('uncertain delivery');
    });
    configureBotTodoDispatch(send);
    const access = await todoAccess('bot-one'),
      todo = await access.patch(patch);
    await expect(access.act(todo.id, todo.revision, 'request-first')).rejects.toThrow('uncertain');
    expect((await access.list()).items[0].action?.state).toBe('unknown');
    await access.act(todo.id, todo.revision, 'request-retry');
    expect(send).toHaveBeenCalledOnce();
  });
});

it('successful no-action acknowledgement advances only its source cursor without requiring a Todo', async () => {
  const access = await todoAccess('bot-one');
  expect(await access.ingest({ source: 'mail', sequence: 1, skip: 'no-action' })).toMatchObject({
    duplicate: false,
    todo: null,
  });
  expect(await access.preflight([{ source: 'mail', sequence: 1, key: 'unused' }])).toMatchObject([
    { decision: 'duplicate' },
  ]);
  expect((await access.list()).items).toEqual([]);
});
