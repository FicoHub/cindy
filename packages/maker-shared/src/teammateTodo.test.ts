import { describe, expect, it } from 'vitest';
import {
  applyTodoPatch,
  emptyTodoState,
  effectiveTodoDeadline,
  preflightTodoEvents,
  queryTodoItems,
  todoOverdue,
  todoVisible,
  validateTodoDeadline,
  type TodoPatch,
} from './teammateTodo';
const now = new Date('2026-10-10T12:00:00Z');
const patch: TodoPatch = {
  key: 'feedback:avatar',
  title: '修复头像丢失',
  outcome: '升级后的旧头像仍保留',
  origin: 'discovered',
  sources: [{ kind: 'mail', id: 'm1', label: '反馈邮件' }],
  next: {
    kind: 'advance',
    label: '准备修复',
    instruction: '按已授权范围排查并准备修复',
  },
};
describe('teammate affairs contract', () => {
  it('works without projects and merges source evidence into the same affair', () => {
    const s = emptyTodoState(),
      t = applyTodoPatch(s, patch, 'one', now);
    applyTodoPatch(
      s,
      {
        id: t.id,
        expectedRevision: 1,
        sources: [{ kind: 'feishu', id: 'f1', label: '同事反馈' }],
        associations: [{ kind: 'pr', id: '5729', label: '第一次修复' }],
      },
      'unused',
      now,
    );
    const latest = applyTodoPatch(
      s,
      {
        id: t.id,
        expectedRevision: 2,
        progress: '已合并，仍待升级验收',
        associations: [{ kind: 'pr', id: '5730', label: '补充修复' }],
      },
      'unused',
      now,
    );
    expect(s.items).toHaveLength(1);
    expect(latest.sources).toHaveLength(2);
    expect(latest.associations).toHaveLength(2);
    expect(latest.status).toBe('open');
    expect(() =>
      applyTodoPatch(s, { id: t.id, expectedRevision: 1, title: 'stale' }, 'unused', now),
    ).toThrow('CONFLICT');
  });
  it('requires real completion basis and retains history on reopening', () => {
    const s = emptyTodoState(),
      t = applyTodoPatch(s, patch, 'one', now);
    expect(() =>
      applyTodoPatch(s, { id: t.id, expectedRevision: 1, operation: 'complete' }, '', now),
    ).toThrow('COMPLETION_EVIDENCE_REQUIRED');
    expect(() =>
      applyTodoPatch(
        s,
        {
          id: t.id,
          expectedRevision: 1,
          operation: 'complete',
          completion: { summary: '  ' },
        },
        '',
        now,
      ),
    ).toThrow();
    const done = applyTodoPatch(
      s,
      {
        id: t.id,
        expectedRevision: 1,
        operation: 'complete',
        completion: {
          summary: '隔离升级验收通过',
          ref: 'https://example.test/proof',
        },
      },
      '',
      now,
    );
    const reopened = applyTodoPatch(
      s,
      { id: t.id, expectedRevision: done.revision, operation: 'reopen' },
      '',
      now,
    );
    expect(reopened.history).toEqual(done.history);
    expect(reopened.status).toBe('open');
  });
  it('preserves user date overrides and differentiates candidate / suggestion / deferral', () => {
    const s = emptyTodoState();
    let t = applyTodoPatch(
      s,
      {
        ...patch,
        sourceDeadline: {
          kind: 'date',
          date: '2026-10-10',
          timeZone: 'Asia/Shanghai',
          sourceVersion: 2,
          quote: '10月10日前',
        },
        deadlineCandidate: {
          value: {
            kind: 'date',
            date: '2026-10-16',
            timeZone: 'Asia/Shanghai',
          },
          reason: '周五前，日期待确认',
        },
        suggestedDate: '2026-10-12',
      },
      'one',
      now,
    );
    expect(todoOverdue(t, now)).toBe(false);
    t = applyTodoPatch(
      s,
      {
        id: t.id,
        expectedRevision: t.revision,
        deadlineOverride: { value: null },
        operation: 'later',
        until: '2026-10-11T12:00:00Z',
      },
      '',
      now,
    );
    expect(todoVisible(t, now)).toBe(false);
    expect(t.sourceDeadline?.date).toBe('2026-10-10');
    t = applyTodoPatch(
      s,
      {
        id: t.id,
        expectedRevision: t.revision,
        sourceDeadline: {
          kind: 'date',
          date: '2026-10-09',
          timeZone: 'Asia/Shanghai',
          sourceVersion: 3,
        },
      },
      '',
      now,
    );
    expect(effectiveTodoDeadline(t)).toBeNull();
    expect(() =>
      applyTodoPatch(
        s,
        {
          id: t.id,
          expectedRevision: t.revision,
          sourceDeadline: {
            kind: 'date',
            date: '2026-10-08',
            timeZone: 'Asia/Shanghai',
            sourceVersion: 1,
          },
        },
        '',
        now,
      ),
    ).toThrow('STALE_SOURCE');
    expect(t.deadlineCandidate?.reason).toBeTruthy();
  });
  it('filters duplicate, resolved, ignored and out-of-scope events before model work', () => {
    const s = emptyTodoState();
    let t = applyTodoPatch(s, patch, 'one', now);
    t = applyTodoPatch(s, { id: t.id, expectedRevision: 1, operation: 'mute' }, '', now);
    expect(
      preflightTodoEvents(
        s,
        [
          { source: 'mail', sequence: 2, key: patch.key! },
          { source: 'feishu', sequence: 7, key: patch.key! },
          { source: 'issues', sequence: 1, key: 'other', project: '/private' },
        ],
        ['/cindy'],
      ).map((x) => x.decision),
    ).toEqual(['suppressed', 'suppressed', 'outside-scope']);
    s.cursors.mail = 2;
    expect(
      preflightTodoEvents(s, [{ source: 'mail', sequence: 2, key: 'another' }], [])[0].decision,
    ).toBe('duplicate');
    expect(t.decision?.kind).toBe('muted');
  });
  it('rejects ambiguous or impossible exact dates and invalid zones', () => {
    for (const date of ['2026-02-30', '9999-99-99', 'bad'])
      expect(() => validateTodoDeadline({ kind: 'date', date, timeZone: 'UTC' })).toThrow();
    expect(() =>
      validateTodoDeadline({
        kind: 'date',
        date: '2026-10-10',
        timeZone: 'Imaginary/City',
      }),
    ).toThrow('INVALID_TIME_ZONE');
    expect(() =>
      validateTodoDeadline({
        kind: 'instant',
        date: '2026-10-10',
        timeZone: 'UTC',
        at: '2026-10-10',
      }),
    ).toThrow('INVALID_DATE');
    expect(() =>
      validateTodoDeadline({
        kind: 'instant',
        date: '2026-10-10',
        timeZone: 'Asia/Shanghai',
        at: '2026-10-10T23:00:00Z',
      }),
    ).toThrow('INVALID_DATE');
  });
  it('all 100 affairs are reachable and searchable beyond the first page', () => {
    const s = emptyTodoState();
    for (let n = 0; n < 100; n++)
      applyTodoPatch(s, { ...patch, key: 'k' + n, title: '事项 ' + n }, 'id' + n, now);
    const ids = new Set();
    for (let offset = 0; offset < 100; offset += 25)
      for (const t of queryTodoItems(s.items, { offset }).items) ids.add(t.id);
    expect(ids.size).toBe(100);
    expect(queryTodoItems(s.items, { query: '事项 99' }).total).toBe(1);
    expect(queryTodoItems(s.items, { offset: 100 }).offset).toBe(75);
  });
});

it('a source label refresh retains its existing evidence and scope when optional metadata is omitted', () => {
  const s = emptyTodoState();
  const t = applyTodoPatch(
    s,
    {
      ...patch,
      sources: [
        {
          kind: 'mail',
          id: 'm1',
          label: '报价',
          ref: 'https://example.test/proof',
          project: '/cindy',
          version: 3,
        },
      ],
    },
    'one',
    now,
  );
  const latest = applyTodoPatch(
    s,
    {
      id: t.id,
      expectedRevision: 1,
      sources: [{ kind: 'mail', id: 'm1', label: '新报价', version: 4 }],
    },
    '',
    now,
  );
  expect(latest.sources[0]).toMatchObject({
    ref: 'https://example.test/proof',
    project: '/cindy',
    label: '新报价',
  });
});
