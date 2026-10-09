import { beforeEach, describe, expect, it, vi } from 'vitest';

const h = vi.hoisted(() => ({
  verdict: vi.fn(),
  provider: vi.fn<(sessionId: string) => string | null>(),
  ensureLlama: vi.fn(async () => undefined),
}));

vi.mock('../../maker-host/model-route-guard-live.js', () => ({ verdictForModelRoute: h.verdict }));
vi.mock('../../maker-host/session-provider-store.js', () => ({ getSessionProvider: h.provider }));
vi.mock('../../local-model-runtime/preflight.js', () => ({ ensureManagedOllamaReadyForSession: h.ensureLlama }));
vi.mock('../../logger.js', () => ({ createLogger: () => ({ debug: vi.fn() }) }));

import type { Session } from '@cindy/maker-core';
import { MANAGED_LLAMACPP_PROVIDER_ID } from '../../../shared/llamaCpp.js';
import { installSessionTurnObserver } from '../sessionTurnObserver.js';

type Observer = { beforeProviderStart: (turnGeneration: number) => Promise<void> };

function setup(fields: { remoteHostId?: string | null; agentDeviceId?: string | null }) {
  let observer: Observer | null = null;
  const session = {
    id: 's1',
    instanceId: 'i1',
    agentKind: 'pi',
    model: 'some-model',
    workDir: '/work',
    remoteHostId: fields.remoteHostId ?? null,
    agentDeviceId: fields.agentDeviceId ?? null,
    setTurnLifecycleObserver: (next: Observer | null) => { observer = next; },
    claimHostTurnContinuation: vi.fn(),
  } as unknown as Session;
  const deps = {
    beforeLocalProviderStart: vi.fn(async () => undefined),
    silentStopTurnLeaseGate: { supersede: vi.fn(), schedule: vi.fn(), supersedeOwnedBy: vi.fn() },
    sessionTurnLeaseTracker: { markTurnStarted: vi.fn(async () => undefined), markTurnEnded: vi.fn(async () => undefined) },
    providerTurnLeaseId: (instanceId: string, generation: number) => `${instanceId}:${generation}`,
    log: { debug: vi.fn() },
  };
  installSessionTurnObserver(deps, session);
  return { deps, start: () => observer!.beforeProviderStart(1) };
}

describe('installSessionTurnObserver provider precheck', () => {
  beforeEach(() => {
    h.verdict.mockReset();
    h.provider.mockReset();
    h.ensureLlama.mockClear();
    h.verdict.mockResolvedValue({ kind: 'reject', reason: 'explicit-source-unavailable' });
    h.provider.mockReturnValue('magpie-2e446a11');
  });

  it('still rejects a local session whose explicit source is gone from this computer', async () => {
    const { deps, start } = setup({});
    await expect(start()).rejects.toMatchObject({ message: expect.stringContaining('magpie-2e446a11') });
    expect(h.verdict).toHaveBeenCalledWith('pi', 'some-model', 'magpie-2e446a11');
    expect(deps.sessionTurnLeaseTracker.markTurnStarted).not.toHaveBeenCalled();
  });

  it('lets a shared or other-device Agent send without judging its source against this computer', async () => {
    for (const agentDeviceId of ['share:abc', 'device-2']) {
      h.verdict.mockClear();
      const { deps, start } = setup({ agentDeviceId });
      await expect(start()).resolves.toBeUndefined();
      expect(h.verdict).not.toHaveBeenCalled();
      expect(deps.beforeLocalProviderStart).toHaveBeenCalledTimes(1);
      expect(deps.silentStopTurnLeaseGate.supersede).toHaveBeenCalledWith('s1');
      expect(deps.sessionTurnLeaseTracker.markTurnStarted).toHaveBeenCalledWith('s1', 'i1:1');
    }
  });

  it('does not start this computer\'s managed llama.cpp for an Agent on another computer', async () => {
    h.provider.mockReturnValue(MANAGED_LLAMACPP_PROVIDER_ID);
    const remote = setup({ agentDeviceId: 'device-2' });
    await remote.start();
    expect(h.ensureLlama).not.toHaveBeenCalled();
    h.verdict.mockResolvedValue({ kind: 'pass' });
    const local = setup({});
    await local.start();
    expect(h.ensureLlama).toHaveBeenCalledTimes(1);
  });

  it('keeps the SSH early return unchanged', async () => {
    const { deps, start } = setup({ remoteHostId: 'ssh-host' });
    await start();
    expect(h.verdict).not.toHaveBeenCalled();
    expect(deps.beforeLocalProviderStart).not.toHaveBeenCalled();
    expect(deps.sessionTurnLeaseTracker.markTurnStarted).not.toHaveBeenCalled();
  });
});
