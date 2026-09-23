import type { ComposerDraft } from '@/lib/composerDraftStore';
import { plainTextToTiptapDoc } from '@/lib/composerDraftStore';
import { parseChatQuoteSegments } from '@/lib/chatQuotes';
import { quoteSegmentsToComposerDocument } from '@/lib/composerQuoteDocument';
import type { AttachedFile } from '@/lib/fileTypes';
import type { QueuedMessage } from '@/lib/makerChatStore';

export interface QueueComposerEditDraft {
  draftKey: string;
  draft: ComposerDraft;
  originalAttachmentIds: string[];
}

export function queueComposerEditDraftKey(sessionId: string, clientId: string): string {
  return `queue-edit:${sessionId}:${clientId}`;
}

export function queueMessageToComposerEditDraft(
  sessionId: string,
  entry: QueuedMessage,
): QueueComposerEditDraft {
  const text = entry.chatMessage.content ?? entry.text;
  const attachments: AttachedFile[] = (entry.files ?? []).map(({ pathOrigin: _, ...file }) => ({
    ...file,
    cacheUrlShared: true,
    stagedPathShared: true,
  }));
  const document = entry.chatMessage.quotesEncoded
    ? quoteSegmentsToComposerDocument(parseChatQuoteSegments(text))
    : text.length > 0
      ? plainTextToTiptapDoc(text)
      : null;

  return {
    draftKey: queueComposerEditDraftKey(sessionId, entry.clientId),
    draft: {
      text: document,
      attachments,
      quotes: [],
      browserComments: [],
      focusAtEnd: true,
    },
    originalAttachmentIds: attachments.map((file) => file.id),
  };
}
