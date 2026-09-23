import { describe, expect, it } from 'vitest';

import type { QueuedMessage } from '@/lib/makerChatStore';
import {
  queueComposerEditDraftKey,
  queueMessageToComposerEditDraft,
} from '@/lib/queueComposerEdit';

function queuedMessage(): QueuedMessage {
  return {
    clientId: 'queue-1',
    text: 'queued text',
    persistedContent: JSON.stringify({ text: 'queued text' }),
    model: 'model',
    effort: 'medium',
    permissionMode: 'default',
    workingDir: 'C:\\workspace',
    files: [
      {
        id: 'existing-image',
        name: 'existing.png',
        path: 'C:\\images\\existing.png',
        ext: 'png',
        size: 10,
        category: 'image',
        mimeType: 'image/png',
        url: 'xdt-image://session/existing.png',
        pathOrigin: 'desktop-host',
      },
    ],
    chatMessage: {
      clientId: 'queue-1',
      role: 'user',
      content: 'queued text',
      isStreaming: false,
    },
    createOpts: {
      agentKind: 'claude-code',
      workingDir: 'C:\\workspace',
      model: 'model',
    },
  };
}

describe('queueMessageToComposerEditDraft', () => {
  it('uses an isolated draft key and treats queued image caches as shared', () => {
    const prepared = queueMessageToComposerEditDraft('session-1', queuedMessage());

    expect(prepared.draftKey).toBe(queueComposerEditDraftKey('session-1', 'queue-1'));
    expect(prepared.originalAttachmentIds).toEqual(['existing-image']);
    expect(prepared.draft.attachments).toEqual([
      expect.objectContaining({
        id: 'existing-image',
        cacheUrlShared: true,
        stagedPathShared: true,
      }),
    ]);
    expect(prepared.draft.attachments[0]).not.toHaveProperty('pathOrigin');
    expect(prepared.draft.text).toEqual(expect.objectContaining({ type: 'doc' }));
    expect(prepared.draft.focusAtEnd).toBe(true);
  });

  it('keeps attachment-only queue rows editable', () => {
    const entry = queuedMessage();
    entry.text = '';
    entry.chatMessage.content = '';

    const prepared = queueMessageToComposerEditDraft('session-1', entry);

    expect(prepared.draft.text).toBeNull();
    expect(prepared.draft.attachments).toHaveLength(1);
  });
});
