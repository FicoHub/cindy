/**
 * 任务级的供应商组偏好(docs/product-rules/provider-groups.md §6.2「任务进行中换号」)：用户在换号提示里选了
 * 「以后自动换，不再询问」的任务，之后用户自己发消息前直接换、不再弹窗；选了「不换，以后别问」的任务，之后不再提议换号。
 * 只对那一个任务有效，两者互斥，后选的覆盖先选的。
 *
 * 记在任务所在电脑上(发送前的检查在这里跑)，按账号存放，跨重启保留：
 * `userData/owners/<账号>/provider-group-session-prefs.json`，只有任务 id 与选择的时间，不含消息、凭证或用户身份。
 * 每种超出容量时淘汰最久之前选的。
 */
import { activeOwnerScopeKey, ownerScopedUserDataPath } from '../appSessionState.js';
import { desktopMakerLogger } from '../maker-host/logger-adapter.js';
import { createOverrideSettingsFile } from '../maker-host/override-settings-file.js';

interface SessionPrefsFile {
  /** 任务 id → 打开「以后自动换」的时间(unix ms)。 */
  autoRebalance: Record<string, number>;
  /** 任务 id → 选「不换，以后别问」的时间(unix ms)。旧版本不认识这个字段，读到的仍是原来的行为。 */
  declineRebalance: Record<string, number>;
}

const SESSION_ID_PATTERN = /^[A-Za-z0-9_-]{1,128}$/;
export const MAX_PROVIDER_GROUP_SESSION_PREFS = 4000;

function prune(sessions: Record<string, number>): Record<string, number> {
  const entries = Object.entries(sessions);
  if (entries.length <= MAX_PROVIDER_GROUP_SESSION_PREFS) return sessions;
  entries.sort((a, b) => b[1] - a[1]);
  return Object.fromEntries(entries.slice(0, MAX_PROVIDER_GROUP_SESSION_PREFS));
}

function normalizeSessions(value: unknown): Record<string, number> {
  const out: Record<string, number> = {};
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    for (const [sessionId, at] of Object.entries(value)) {
      if (SESSION_ID_PATTERN.test(sessionId) && typeof at === 'number' && Number.isFinite(at) && at > 0) out[sessionId] = at;
    }
  }
  return prune(out);
}

function normalize(raw: unknown): SessionPrefsFile {
  const value = raw as Partial<SessionPrefsFile> | null;
  return { autoRebalance: normalizeSessions(value?.autoRebalance), declineRebalance: normalizeSessions(value?.declineRebalance) };
}

function without(sessions: Record<string, number>, sessionId: string): Record<string, number> {
  if (sessions[sessionId] === undefined) return sessions;
  const rest = { ...sessions };
  delete rest[sessionId];
  return rest;
}

const store = createOverrideSettingsFile<SessionPrefsFile>({
  filePath: () => ownerScopedUserDataPath('provider-group-session-prefs.json'),
  scopeKey: activeOwnerScopeKey,
  defaults: { autoRebalance: {}, declineRebalance: {} },
  normalize,
  log: desktopMakerLogger.child('provider-group-session-prefs'),
  label: 'provider-group-session-prefs',
  maxBytes: 512 * 1024,
  preserveUnreadableFile: true,
  logLoadedValue: false,
});

/** 这个任务选过「以后自动换，不再询问」。 */
export function readProviderGroupAutoRebalance(sessionId: string): boolean {
  if (!SESSION_ID_PATTERN.test(sessionId)) return false;
  store.invalidateIfChanged();
  return store.read().autoRebalance[sessionId] !== undefined;
}

/** 记下这个任务以后自动换号(同时撤掉「以后别问」)。 */
export async function writeProviderGroupAutoRebalance(sessionId: string, now: number = Date.now()): Promise<void> {
  if (!SESSION_ID_PATTERN.test(sessionId)) return;
  await store.updateAtomic(({ value }) => ({
    autoRebalance: prune({ ...value.autoRebalance, [sessionId]: now }),
    declineRebalance: without(value.declineRebalance, sessionId),
  }));
}

/** 这个任务选过「不换，以后别问」。 */
export function readProviderGroupDeclineRebalance(sessionId: string): boolean {
  if (!SESSION_ID_PATTERN.test(sessionId)) return false;
  store.invalidateIfChanged();
  return store.read().declineRebalance[sessionId] !== undefined;
}

/** 记下这个任务以后不再提议换号(同时撤掉「以后自动换」)。 */
export async function writeProviderGroupDeclineRebalance(sessionId: string, now: number = Date.now()): Promise<void> {
  if (!SESSION_ID_PATTERN.test(sessionId)) return;
  await store.updateAtomic(({ value }) => ({
    autoRebalance: without(value.autoRebalance, sessionId),
    declineRebalance: prune({ ...value.declineRebalance, [sessionId]: now }),
  }));
}
