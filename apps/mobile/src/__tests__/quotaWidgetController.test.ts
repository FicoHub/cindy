import { describe, expect, it, vi } from 'vitest';
import { QuotaWidgetController } from '../widgets/quotaWidgetController';
import { emptyQuotaSnapshot, quotaWindowState, QUOTA_MAX_AGE_MS } from '../widgets/quotaSnapshot';
import type { WidgetQuotaReader } from '../widgets/readWidgetQuota';

function deferred<T>() { let resolve!: (value: T) => void; const promise = new Promise<T>(r => { resolve = r; }); return { promise, resolve }; }
function fixture() {
  const cache = new Map<string, string>();
  const storage = {
    getItem: vi.fn(async (key: string) => cache.get(key) ?? null),
    setItem: vi.fn(async (key: string, value: string) => { cache.set(key, value); }),
    removeItem: vi.fn(async (key: string) => { cache.delete(key); }),
  };
  const native = { writeSnapshot: vi.fn(), clearSnapshot: vi.fn() };
  const revoked = new Set<string>();
  const controller = new QuotaWidgetController(storage, native, id => revoked.has(id));
  const reader: WidgetQuotaReader = {
    listProviders: async () => ({ providers: [{ id: 'openai', connected: true, auth: { method: 'oauth' } }] }),
    getCodexRateLimits: async () => ({ rateLimits: { primary: { usedPercent: 25 } } }),
    getAccountUsage: async () => null, getSubscriptionUsage: async () => null,
  };
  return { cache, storage, native, controller, reader, revoked };
}

describe('quota widget account and cache ownership', () => {
  it('rejects a source revoked while its cold-start cache read was pending', async () => {
    const { controller, storage, native, revoked, cache } = fixture();
    const pending = deferred<string | null>();
    const stored = JSON.stringify({ deviceId: 'desktop', snapshot: { ...emptyQuotaSnapshot(), source: 'demo' } });
    cache.set('cindy.quotaWidget.v1.alice', stored);
    storage.getItem.mockImplementationOnce(() => pending.promise);
    const restore = controller.setOwner('alice');
    await Promise.resolve();
    revoked.add('desktop');
    pending.resolve(stored);
    await restore;
    expect(controller.getSnapshot()).toMatchObject({ ready: true, deviceId: null });
    expect(cache.has('cindy.quotaWidget.v1.alice')).toBe(false);
    expect(native.writeSnapshot.mock.calls.every(([json]) => !json.includes('demo'))).toBe(true);
    await controller.selectDevice('desktop');
    expect(controller.getSnapshot().deviceId).toBeNull();
  });

  it('drops a revoked source response even before a UI subscriber has cleared selection', async () => {
    const { controller, reader, native, revoked } = fixture();
    await controller.setOwner('alice'); await controller.selectDevice('desktop');
    const pending = deferred<unknown>(); reader.getCodexRateLimits = () => pending.promise;
    const read = controller.refresh(reader); await Promise.resolve();
    revoked.add('desktop'); native.writeSnapshot.mockClear();
    pending.resolve({ rateLimits: { primary: { usedPercent: 5 } } }); await read;
    expect(native.writeSnapshot).not.toHaveBeenCalled();
    expect(controller.getSnapshot().deviceId).toBeNull();
  });

  it('clears native data synchronously on logout and discards a late response', async () => {
    const { controller, native, cache, reader } = fixture();
    await controller.setOwner('global:alice'); await controller.selectDevice('desktop');
    const response = deferred<unknown>(); reader.getCodexRateLimits = () => response.promise;
    const request = controller.refresh(reader);
    await Promise.resolve();
    const clearing = controller.setOwner('');
    expect(native.clearSnapshot).toHaveBeenCalledTimes(3);
    native.writeSnapshot.mockClear();
    response.resolve({ rateLimits: { primary: { usedPercent: 10 } } });
    await Promise.all([request, clearing]);
    expect(native.writeSnapshot).not.toHaveBeenCalled();
    expect(cache.size).toBe(0);
    expect(controller.getSnapshot().deviceId).toBeNull();
  });

  it('does not resurrect an old cache whose read finishes after an account switch', async () => {
    const { controller, storage, native } = fixture();
    const pending = deferred<string | null>();
    storage.getItem.mockImplementationOnce(() => pending.promise);
    const alice = controller.setOwner('global:alice');
    await Promise.resolve();
    const bob = controller.setOwner('global:bob');
    native.writeSnapshot.mockClear();
    pending.resolve(JSON.stringify({ deviceId: 'alice-desktop', snapshot: { ...emptyQuotaSnapshot(), source: 'demo' } }));
    await Promise.all([alice, bob]);
    expect(controller.getSnapshot().deviceId).toBeNull();
    expect(native.writeSnapshot.mock.calls.every(([json]) => !json.includes('demo'))).toBe(true);
  });

  it('cancels earlier device reads and persists the new selection', async () => {
    const { controller, reader, native, cache } = fixture();
    await controller.setOwner('alice'); await controller.selectDevice('one');
    const pending = deferred<unknown>(); reader.getCodexRateLimits = () => pending.promise;
    const read = controller.refresh(reader); await Promise.resolve();
    await controller.selectDevice('two'); native.writeSnapshot.mockClear();
    pending.resolve({ rateLimits: { primary: { usedPercent: 5 } } }); await read;
    expect(native.writeSnapshot).not.toHaveBeenCalled();
    expect(JSON.parse([...cache.values()][0]).deviceId).toBe('two');
  });

  it('keeps the last observation timestamp when the relay drops', async () => {
    const { controller, reader, native } = fixture();
    await controller.setOwner('alice'); await controller.selectDevice('one'); await controller.refresh(reader);
    const observed = controller.getSnapshot().snapshot.rows[0].observedAtMs;
    reader.listProviders = async () => { throw new Error('offline'); };
    await controller.refresh(reader);
    expect(controller.getSnapshot().snapshot.connection).toBe('offline');
    expect(controller.getSnapshot().snapshot.rows[0].observedAtMs).toBe(observed);
    expect(controller.getSnapshot().error).toBe(true);
    expect(JSON.parse(native.writeSnapshot.mock.lastCall![0]).connection).toBe('offline');
  });

  it('ages an inactive phone snapshot without treating redraws or late replies as observations', async () => {
    const { controller, reader } = fixture();
    await controller.setOwner('alice'); await controller.selectDevice('one'); await controller.refresh(reader);
    const observed = controller.getSnapshot().snapshot.rows[0].observedAtMs!;
    const pending = deferred<unknown>(); reader.getCodexRateLimits = () => pending.promise;
    const read = controller.refresh(reader); await Promise.resolve();
    controller.offline();
    pending.resolve({ rateLimits: { primary: { usedPercent: 1 } } }); await read;
    controller.offline();
    const snapshot = controller.getSnapshot().snapshot, row = snapshot.rows[0], window = row.windows[0];
    expect(row.observedAtMs).toBe(observed);
    expect(window.remainingPercent).toBe(75);
    expect(quotaWindowState(row, window, snapshot.connection, observed + QUOTA_MAX_AGE_MS)).toBe('stale');
    expect(quotaWindowState(row, window, snapshot.connection, observed + 24 * 60 * 60_000)).toBe('stale');
  });

  it('restores only the current account cache and marks it offline', async () => {
    const { controller, cache } = fixture();
    cache.set('cindy.quotaWidget.v1.alice', JSON.stringify({ deviceId: 'one', snapshot: { ...emptyQuotaSnapshot(), connection: 'online' } }));
    await controller.setOwner('alice');
    expect(controller.getSnapshot()).toMatchObject({ ready: true, deviceId: 'one', snapshot: { connection: 'offline' } });
    await controller.setOwner('bob');
    expect(cache.has('cindy.quotaWidget.v1.alice')).toBe(false);
    expect(controller.getSnapshot().deviceId).toBeNull();
  });

  it('reports failed native clearing and disk persistence instead of claiming success', async () => {
    const { controller, storage, native } = fixture();
    await controller.setOwner('alice');
    native.clearSnapshot.mockImplementation(() => { throw new Error('disk'); });
    storage.setItem.mockRejectedValue(new Error('disk'));
    await controller.selectDevice('one');
    expect(controller.getSnapshot().error).toBe(true);
  });

  it('coalesces concurrent reads and requires an authenticated device selection', async () => {
    const { controller, reader } = fixture();
    const list = vi.fn(reader.listProviders); reader.listProviders = list;
    await controller.refresh(reader); expect(list).not.toHaveBeenCalled();
    await controller.setOwner('alice'); await controller.selectDevice('one');
    await Promise.all([controller.refresh(reader), controller.refresh(reader)]);
    // One read plus its account revalidation, shared by both callers.
    expect(list).toHaveBeenCalledTimes(2);
  });

  it('waits for an already started private write before removing its owner cache', async () => {
    const { controller, reader, storage, cache } = fixture();
    await controller.setOwner('alice'); await controller.selectDevice('one');
    const entered = deferred<void>(), release = deferred<void>();
    storage.setItem.mockImplementationOnce(async (key, value) => { entered.resolve(); await release.promise; cache.set(key, value); });
    const refresh = controller.refresh(reader); await entered.promise;
    const logout = controller.setOwner('');
    release.resolve();
    await Promise.all([refresh, logout]);
    expect(cache.has('cindy.quotaWidget.v1.alice')).toBe(false);
  });
});
