/**
 * #5788:插件派来的活走 sendToSessionInternal 的 lazy-resume 时,必须按会话落库的权限档
 * 恢复,不能落到 main 侧通路的缺省 bypass。否则插件任务被提权,errand 复用判定也会因
 * 活跃会话的档位(bypass)≠ 任务设置的档位而每轮失败、另开新会话。
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const registerSource = readFileSync(resolve(__dirname, '..', 'register.ts'), 'utf8').replace(
  /\r\n?/g,
  '\n',
);

function lazyResumeCreateOpts(): string {
  const start = registerSource.indexOf('async function sendToSessionInternal(params: {');
  const resume = registerSource.indexOf("lockStage = 'lazy-resume-bootstrap';", start);
  const end = registerSource.indexOf('await synthesizeOrcaVendorOptionsFromDb(targetSessionId, createOpts);', resume);
  expect(start).toBeGreaterThanOrEqual(0);
  expect(resume).toBeGreaterThan(start);
  expect(end).toBeGreaterThan(resume);
  return registerSource.slice(resume, end);
}

describe('sendToSessionInternal lazy-resume permission mode', () => {
  it('restores the stored permission mode for plugin-sourced input', () => {
    expect(lazyResumeCreateOpts()).toContain(
      "permissionMode: sourcePlugin ? permissionModeOrAsk(dbRow.permissionMode) : 'bypassPermissions',",
    );
  });

  it('never hard-codes bypass for every lazy resume', () => {
    expect(lazyResumeCreateOpts()).not.toMatch(/^\s*permissionMode: 'bypassPermissions',$/m);
  });

  it('binds sourcePlugin from the call params before the lazy-resume branch', () => {
    const start = registerSource.indexOf('async function sendToSessionInternal(params: {');
    const binding = registerSource.indexOf('const sourcePlugin = params.sourcePlugin;', start);
    expect(binding).toBeGreaterThan(start);
    expect(binding).toBeLessThan(registerSource.indexOf("lockStage = 'lazy-resume-bootstrap';", start));
  });

  it('reads the persisted permission mode in the row snapshot used by lazy resume', () => {
    const sessionsSource = readFileSync(resolve(__dirname, '..', '..', 'localDb', 'ipc', 'sessions.ts'), 'utf8');
    const select = sessionsSource.slice(sessionsSource.indexOf('async function selectSessionRowSnapshot('));
    expect(select.slice(0, select.indexOf('.from(sessions)'))).toContain('permissionMode: sessions.permissionMode,');
  });
});
