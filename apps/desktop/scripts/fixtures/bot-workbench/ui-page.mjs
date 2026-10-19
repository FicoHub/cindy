import assert from 'node:assert/strict';

const row = {
  sessionId: 'fixture-permission', deviceId: null, deviceName: null, online: true,
  title: 'Review sample changes', kind: 'waiting', minutes: 12, question: 'Read the sample file?',
  waitingFor: 'permission', requestId: 'fixture-request', followerBotId: 'fixture-bot',
};
const empty = {
  botId: 'fixture-bot', scope: 'own', waiting: [], working: [], lastSweepAt: 1,
  doneToday: 0, offlineDevices: [],
};
const populated = {
  ...empty,
  waiting: [row, { ...row, sessionId: 'fixture-answer', waitingFor: 'answer', requestId: null, question: 'Which branch?' }],
  working: [{ ...row, sessionId: 'fixture-working', kind: 'working', title: 'Check sample output', waitingFor: null, requestId: null }],
};

export default {
  name: 'bot-workbench',
  entry: './workbench-fixture.tsx',
  viewport: { width: 420, height: 600 },
  real: 'BotWorkbench, botGlance, TabBodyErrorBoundary, React Router, sidebar URL detection, Button, theme and translations',
  notCovered: 'Native detached-window lifecycle and entry buttons, live IPC/permissions, remote devices, Windows hardware',
  stubs: {
    'src/renderer/features/device-link/useDeviceLinkDeviceList': 'export const useDeviceLinkDeviceList=()=>null;',
    'src/renderer/features/device-link/remoteProjectsStore': 'export const remoteProjectsStore={}; export const getSessionDeviceId=()=>null;',
    'src/renderer/lib/orcaSessionIdentity': 'export const resolveSessionRoute=async id=>`/cc-agent/${id}`;',
  },
  cases: {
    default: { about: 'No Router: waiting/running content and permission action', data: { detached: true, glance: populated } },
    quiet: { about: 'No Router: normal empty state', data: { detached: true, glance: empty } },
    docked: { about: 'Real Router: Answer and Look still navigate', data: { detached: false, glance: populated } },
  },
  async ready(page) {
    // Also wait for the real error boundary in --compare, so the old failure is captured.
    await page.locator('section[aria-label], h2').first().waitFor();
  },
  async check(page, ui) {
    const panel = page.getByRole('region', { name: await ui.t('bots.workbench.title') });
    assert.equal(await panel.count(), 1, 'workbench content replaces the panel-error card');
    if (ui.case === 'quiet') {
      assert.equal(await panel.getByText(await ui.t('bots.workbench.glance.quiet')).count(), 1);
      return;
    }
    assert.equal(await panel.getByText('Check sample output').count(), 1);
    const allow = panel.getByRole('button', { name: await ui.t('bots.workbench.glance.allow'), exact: true });
    await allow.click();
    assert.deepEqual(await page.evaluate(() => window.__uiPage.ctx.data.resolution), {
      requestId: 'fixture-request', response: { kind: 'permission', behavior: 'allow' },
    });
    const answer = panel.getByRole('button', { name: await ui.t('bots.workbench.glance.answer'), exact: true });
    const look = panel.getByRole('button', { name: await ui.t('bots.workbench.glance.look'), exact: true });
    if (ui.data.detached) {
      assert.equal(await answer.count(), 0);
      assert.equal(await look.count(), 0);
    } else {
      await answer.click();
      await page.waitForFunction(() => document.querySelector('[data-testid="workbench-route"]')?.textContent === '/cc-agent/fixture-answer');
      await look.click();
      await page.waitForFunction(() => document.querySelector('[data-testid="workbench-route"]')?.textContent === '/cc-agent/fixture-permission');
    }
  },
};
