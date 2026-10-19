import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ctx, mountPage, subscription } from '../../ui-page/harness';
import { BotWorkbench } from '../../../src/renderer/features/bots/BotWorkbench';
import { TabBodyErrorBoundary } from '../../../src/renderer/features/right-sidebar/TabBodyErrorBoundary';

// #6446: use the real URL detection and Router constraints. Detached cases deliberately
// omit mountPage.route; host responses are synthetic and never touch a live task.
const detached = ctx.data.detached === true;
const url = new URL(window.location.href);
if (detached) url.searchParams.set('sidebarWindow', '1');
else url.searchParams.delete('sidebarWindow');
window.history.replaceState(null, '', url);

function RouteLocation() {
  const location = useLocation();
  return <output hidden data-testid="workbench-route">{location.pathname}</output>;
}

function WorkbenchPage() {
  const { t } = useTranslation();
  return (
    <div className="flex h-screen flex-col" data-ui-page-subject>
      <TabBodyErrorBoundary tabId="fixture-workbench" tabKind="bot-workbench" t={t}>
        <BotWorkbench botId="fixture-bot" />
      </TabBodyErrorBoundary>
      {!detached && <RouteLocation />}
    </div>
  );
}

void mountPage({
  route: detached ? undefined : '/bots/fixture-bot',
  host: {
    localDb: {
      bots: { autonomy: { glance: async () => ({ ...ctx.data.glance as object, lastSweepAt: Date.now() }) } },
    },
    maker: {
      onBotAutonomyChanged: subscription('glance-changed'),
      getPendingInteractions: async () => [{ request: { kind: 'permission', requestId: 'fixture-request' } }],
      resolveInteraction: async (requestId: string, response: unknown) => {
        ctx.data.resolution = { requestId, response };
        return { accepted: true };
      },
    },
    logToMain: () => undefined,
  },
  render: () => <WorkbenchPage />,
});
