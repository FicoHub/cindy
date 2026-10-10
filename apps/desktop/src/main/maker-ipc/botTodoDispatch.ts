import type { TodoDispatchInput, TodoDispatchResult } from './botTodoAccess.js';

/** Consume the existing coordinator's dispatch/discard receipts; enqueue is not dispatch. */
export function createBotTodoDispatch(
  send: (input: TodoDispatchInput) => Promise<TodoDispatchResult>,
) {
  const pending = new Map<string, TodoDispatchInput>();
  const key = (sessionId: string, requestId: string) => sessionId + '\0' + requestId;
  return {
    async dispatch(input: TodoDispatchInput): Promise<TodoDispatchResult> {
      const id = key(input.sessionId, input.requestId);
      pending.set(id, input);
      try {
        const result = await send(input);
        if (!result.ok || !result.queued) pending.delete(id);
        return result;
      } catch (error) {
        pending.delete(id);
        throw error;
      }
    },
    async settle(sessionId: string, requestId: string, dispatched: boolean): Promise<void> {
      const id = key(sessionId, requestId);
      const input = pending.get(id);
      if (!input || input.sessionId !== sessionId) return;
      pending.delete(id);
      input.assertCurrent();
      await input.onSettled({ ok: dispatched, ...(!dispatched ? { error: 'CANCELLED' } : {}) });
    },
  };
}
