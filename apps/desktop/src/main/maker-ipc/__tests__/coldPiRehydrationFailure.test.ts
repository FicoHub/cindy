import { describe, expect, it } from 'vitest';
import {
  ColdPiRehydrationError,
  coldPiRehydrationFailureMessage,
  describeColdPiRehydrationFailure,
  sanitizeColdPiRehydrationReason,
} from '../coldPiRehydrationFailure';

describe('cold Pi rehydration failure diagnostics (#5508)', () => {
  it('keeps the category and message of typed rehydration errors', () => {
    const error = new ColdPiRehydrationError('working-dir-missing', 'working directory is missing for session s-1');
    expect(describeColdPiRehydrationFailure(error)).toEqual({
      category: 'working-dir-missing',
      reason: 'working directory is missing for session s-1',
    });
    expect(error.name).toBe('ColdPiRehydrationError');
  });

  it('wraps bootstrap causes without losing the original error', () => {
    const cause = new Error('pi exited with code 1\nstderr: provider unreachable');
    const error = new ColdPiRehydrationError('bootstrap-failed', cause.message, { cause });
    expect(error.cause).toBe(cause);
    expect(describeColdPiRehydrationFailure(error)).toEqual({
      category: 'bootstrap-failed',
      reason: 'pi exited with code 1 stderr: provider unreachable',
    });
  });

  it('classifies anything else as unknown while still carrying a bounded reason', () => {
    expect(describeColdPiRehydrationFailure(new TypeError('db is closed'))).toEqual({ category: 'unknown', reason: 'db is closed' });
    expect(describeColdPiRehydrationFailure('plain string')).toEqual({ category: 'unknown', reason: 'plain string' });
    expect(describeColdPiRehydrationFailure(undefined)).toEqual({ category: 'unknown', reason: 'no error detail' });
    expect(describeColdPiRehydrationFailure(new Error(''))).toEqual({ category: 'unknown', reason: 'no error detail' });
  });

  it('bounds and flattens reasons so logs and IPC messages stay single-line', () => {
    const long = `line one\n${'x'.repeat(600)}`;
    const reason = sanitizeColdPiRehydrationReason(new Error(long));
    expect(reason).not.toContain('\n');
    expect(reason.length).toBe(240);
    expect(reason.endsWith('…')).toBe(true);
  });

  it('keeps the established message prefix so existing wiring and copy still match', () => {
    const message = coldPiRehydrationFailureMessage({ category: 'session-row-missing', reason: 'session s-1 has no database row' });
    expect(message).toBe(
      'Pi current runtime could not be verified (session-row-missing: session s-1 has no database row); runtime selection was not changed',
    );
    expect(message.startsWith('Pi current runtime could not be verified')).toBe(true);
  });
});
