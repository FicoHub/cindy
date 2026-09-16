import { readFileSync } from 'node:fs';
import { ScriptTarget, transpileModule } from 'typescript';
import { describe, expect, it, vi } from 'vitest';
import { resolveCompatibleSessionRuntimeEffort } from '../maker-ipc/sessionRuntimeControl.js';

// Execute the real cold-dispatch option assembly and DB reconciliation without
// booting Electron or touching the user's database/native model account.
const source = readFileSync(new URL('../maker-ipc/register.ts', import.meta.url), 'utf8');
function between(start: string, end: string, from = 0) {
  const a = source.indexOf(start, from);
  const b = source.indexOf(end, a + start.length);
  if (a < 0 || b < 0) throw new Error('cold dispatch source boundary changed');
  return source.slice(a, b);
}
const reconcile = between('  async function reconcileCreateOptsAgainstDb(', '  async function rehydrateColdPiRuntimeForWindowVerification(');
const cold = between('        const createOpts = buildCreateOptsWithStderr({',
  '        const { session } = await bootstrapSession(createOpts);',
  source.indexOf("lockStage = 'lazy-resume-bootstrap'"));
// Run every production statement up to and including the actual native create
// call. The stub stops execution there, before post-create hydration can hide a bug.
const bootstrap = between('    if (o.id && o.workingDir',
  '    await markProjectContextIfNeeded(', source.indexOf('  async function bootstrapSession('));
const compiled = transpileModule(`${reconcile}\nasync function bootstrapSession(o) { ${bootstrap} }\nreturn async () => { ${cold}\nawait bootstrapSession(createOpts); };`, {
  compilerOptions: { target: ScriptTarget.ES2022 },
}).outputText;

function harness(effort: string | null, runtimeOverride: Record<string, unknown> | null = null, efforts = ['medium', 'high']) {
  const row = { agentKind: 'codex', model: 'gpt-6-astra', providerId: 'openai',
    sdkSessionId: 'native-child', effort, fastMode: true };
  const read = vi.fn(async () => [row]);
  const remoteReady = vi.fn(async (_input: unknown) => undefined);
  const boundary = new Error('native creation boundary');
  const createSession = vi.fn(async (_opts: unknown) => { throw boundary; });
  const deps = {
    targetSessionId: 'child', dbRow: row,
    meta: { agentKind: 'codex', model: row.model, workDir: 'child-workdir', sdkSessionId: row.sdkSessionId },
    buildCreateOptsWithStderr: (opts: unknown) => opts,
    getDbClient: () => ({ drizzle: { select: () => ({ from: () => ({ where: () => ({ limit: read }) }) }) } }),
    sessions: {}, eq: vi.fn(), dbToMakerAgentKind: (kind: string) => kind,
    synthesizeOrcaVendorOptionsFromDb: vi.fn(async () => undefined),
    readSessionExtraDirsFromDb: async () => [], extraDirsForRuntime: (x: unknown) => x,
    readSessionWritableDirsFromDb: async () => [], ensureRemoteReadyForSessionStart: remoteReady,
    getSessionRuntimeControlSnapshot: () => ({ effectiveOverride: runtimeOverride }),
    workingDirectoryRecovery: { resolve: (_id: string, dir: string) => dir,
      observe: async () => undefined, isFallback: () => false },
    options: { waitForAccountProviderModelsReady: async () => undefined },
    applyPersistedReviewMode: async () => undefined,
    applyPersistedCindyMakeMarker: async () => undefined, readSessionSource: vi.fn(),
    applyOrcaInstructions: () => false, applyProjectContextInjection: async () => false,
    prepareDirectoryGrantsForBootstrap: async () => undefined,
    statWorkingDirectory: vi.fn(), realpathWorkingDirectory: vi.fn(), persistSessionFields: vi.fn(),
    hydrateProviderIdBeforeSessionStart: async () => undefined,
    ensureManagedOllamaReadyForSession: async () => undefined, app: { getPath: () => 'test-data' },
    assertModelRouteUsable: async () => null, shouldApplyExclusiveProviderRerouteLive: () => false,
    pinExclusiveSessionProvider: async () => null,
    getActiveCatalog: () => ({ providers: [{ id: runtimeOverride?.providerId ?? 'openai' }] }),
    findCatalogModel: () => ({ efforts, defaultEffort: efforts[0] }),
    resolveCompatibleSessionRuntimeEffort, maker: { createSession },
    log: { warn: vi.fn() },
  };
  const run = new Function(...Object.keys(deps), compiled)(...Object.values(deps)) as () => Promise<Record<string, unknown>>;
  const capture = async () => {
    try { await run(); } catch (err) { if (err !== boundary) throw err; }
    expect(createSession).toHaveBeenCalledTimes(1);
    return createSession.mock.calls[0][0] as Record<string, unknown>;
  };
  return { run: capture, read, remoteReady, createSession };
}

describe('background child first native creation options', () => {
  it.each(['medium', 'high'])('preserves saved %s and Fast before native bootstrap', async effort => {
    const h = harness(effort);
    expect(await h.run()).toMatchObject({ id: 'child', agentKind: 'codex', model: 'gpt-6-astra',
      effort, fastMode: true, providerId: 'openai', resumeSessionId: 'native-child',
      workingDir: 'child-workdir', permissionMode: 'bypassPermissions' });
    expect(h.remoteReady).toHaveBeenCalledWith({ createOpts: expect.objectContaining({ effort, fastMode: true }) });
  });

  it('keeps an effective runtime override above the persisted baseline', async () => {
    const override = { agentKind: 'codex', model: 'gpt-6-astra', providerId: 'custom', effort: 'high', fastMode: false };
    expect(await harness('medium', override).run()).toMatchObject(override);
  });

  it('does not invent an effort when the persisted value is absent', async () => {
    expect((await harness(null).run()).effort).toBeUndefined();
  });

  it('drops a historical effort for a fixed-effort model at native creation', async () => {
    expect((await harness('high', null, []).run()).effort).toBeUndefined();
  });

  it('maps a historical effort to the current model supported levels', async () => {
    expect((await harness('high', null, ['low', 'medium']).run()).effort).toBe('low');
  });

  it('normalizes the effective override too when its model has fixed effort', async () => {
    expect((await harness('medium', { agentKind: 'codex', model: 'fixed',
      providerId: 'custom', effort: 'high', fastMode: false }, []).run()).effort).toBeUndefined();
  });

  it('refuses native startup if persisted configuration cannot be read', async () => {
    const h = harness('medium');
    h.read.mockRejectedValueOnce(new Error('DB unavailable'));
    await expect(h.run()).rejects.toThrow('DB unavailable');
    expect(h.remoteReady).not.toHaveBeenCalled();
    expect(h.createSession).not.toHaveBeenCalled();
  });
});
