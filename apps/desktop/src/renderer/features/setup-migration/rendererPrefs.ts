/**
 * Interface preferences that live in this window's localStorage. Only the shared whitelist
 * (theme, language, notifications, chat preferences…) is read for another computer or
 * written from one; window layout, device pickers and model memories never move.
 */
import { isPortableRendererPrefKey } from '../../../shared/setupMigration';

const MAX_VALUE_LENGTH = 32 * 1024;

export function readPortableRendererPrefs(storage: Storage = window.localStorage): Record<string, string> {
  const prefs: Record<string, string> = {};
  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);
    if (!key || !isPortableRendererPrefKey(key)) continue;
    const value = storage.getItem(key);
    if (value !== null && value.length <= MAX_VALUE_LENGTH) prefs[key] = value;
  }
  return prefs;
}

/** Writes the selected values; returns how many actually changed. */
export function applyPortableRendererPrefs(
  values: Record<string, string>,
  storage: Storage = window.localStorage,
): number {
  let changed = 0;
  for (const [key, value] of Object.entries(values)) {
    if (!isPortableRendererPrefKey(key) || typeof value !== 'string' || value.length > MAX_VALUE_LENGTH) continue;
    if (storage.getItem(key) === value) continue;
    storage.setItem(key, value);
    changed += 1;
  }
  return changed;
}
