import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
const env = vi.hoisted(() => ({ visible: true, current: true, access: vi.fn(), get: vi.fn() }));
vi.mock('../../../agent-island/service.js', () => ({ getAgentIslandService: () => null }));
vi.mock('../../../maker-ipc/botRemoteResourceInvalidation.js', () => ({
  scheduleBotRemoteResourceChangedForSession: vi.fn(),
}));
vi.mock('../../../maker-ipc/workingStatus.js', () => ({ getWorkingStatusCopy: vi.fn() }));
vi.mock('../../client/current.js', () => ({ getDbClient: () => null }));
vi.mock('../../../device-link/broadcast-tap.js', () => ({
  captureDataOwnerBroadcastScope: () => ({}),
  isDataOwnerBroadcastScopeCurrent: () => env.current,
}));
vi.mock('../../../maker-ipc/botTodoAccess.js', () => ({ todoAccess: env.access }));
vi.mock('../bots.js', () => ({
  getBotRemoteResourceSource: env.get,
  listBotRemoteResourceSources: async () => [],
}));
import { createBotTodoStore } from '../../../maker-ipc/botTodoStore';
import { remoteResourceRegistry } from '../../../device-link/remoteResourceRegistry';
import { registerBotRemoteResourceProvider } from '../botRemoteResourceProvider';
let root = '';
const source = {
  id: 'bot-one',
  name: 'Sora',
  description: '',
  avatar: '',
  avatarColor: 'teal',
  status: 'active' as const,
  canonicalSessionId: 'session-one',
  lastMessagePreview: null,
  lastMessageAt: null,
  lastMessageRole: null,
  needsAttention: false,
  hiddenAt: null,
  pinnedAt: null,
  activityAt: 1,
  currentVersion: 1,
  updatedAt: 1,
};
const context = { controllerDeviceId: 'phone' },
  client = { protocolVersion: 1, primitives: ['teammate-todos'], locale: 'zh-CN' },
  ref = { collectionId: 'teammates', kind: 'bot', id: 'todos:bot-one' };
beforeEach(async () => {
  env.visible = true;
  env.current = true;
  env.get.mockReset();
  env.access.mockReset();
  env.get.mockImplementation(async (id: string) =>
    id === 'bot-one' && env.visible ? source : null,
  );
  root = await mkdtemp(path.join(os.tmpdir(), 'remote-todo-'));
  const store = createBotTodoStore(path.join(root, 'todos.v1.json'), async () => ({}));
  env.access.mockImplementation(async () => ({
    list: async () => ({ items: (await store.read()).items, version: 1 }),
    patch: store.patch,
    act: vi.fn(),
  }));
  registerBotRemoteResourceProvider();
});
afterEach(async () => rm(root, { recursive: true, force: true }));
it('uses existing resource get/invoke, preserving the same store across controllers and full-set pagination', async () => {
  const access = await env.access();
  for (let n = 0; n < 36; n++)
    await access.patch({ key: 'k' + n, title: '事务 ' + n, outcome: '验收通过' });
  const get = () =>
    remoteResourceRegistry.get(context, {
      client,
      ref,
      query: JSON.stringify({ offset: 25, query: '事务' }),
    });
  const resource = await get();
  const page = resource.blocks?.[0].data as {
    items: Array<{ id: string; revision: number }>;
    total: number;
  };
  expect(page.total).toBe(36);
  expect(page.items).toHaveLength(11);
  await remoteResourceRegistry.invoke(context, {
    client,
    collectionId: 'teammates',
    resourceRef: ref,
    actionId: 'todo-update',
    input: { id: page.items[0].id, expectedRevision: page.items[0].revision, progress: '手机修改' },
  });
  expect(
    (await access.list()).items.find((t: { id: string }) => t.id === page.items[0].id).progress,
  ).toBe('手机修改');
  await expect(
    remoteResourceRegistry.invoke(context, {
      client,
      collectionId: 'teammates',
      resourceRef: ref,
      actionId: 'todo-update',
      input: { id: page.items[0].id, expectedRevision: 1, progress: '旧修订' },
    }),
  ).rejects.toThrow('CONFLICT');
});
it('does not read invisible teammates or leak a result across account changes', async () => {
  env.visible = false;
  await expect(remoteResourceRegistry.get(context, { client, ref })).rejects.toMatchObject({
    code: 'NOT_FOUND',
  });
  expect(env.access).not.toHaveBeenCalled();
  env.visible = true;
  env.access.mockImplementationOnce(async () => ({
    list: async () => {
      env.current = false;
      return { items: [] };
    },
  }));
  await expect(remoteResourceRegistry.get(context, { client, ref })).rejects.toMatchObject({
    code: 'NOT_FOUND',
  });
  env.current = true;
  await expect(
    remoteResourceRegistry.invoke(context, {
      client,
      collectionId: 'teammates',
      resourceRef: { ...ref, id: 'other-bot' },
      actionId: 'todo-update',
      input: { title: 'x' },
    }),
  ).rejects.toMatchObject({ code: 'NOT_FOUND' });
});
