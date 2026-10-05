/**
 * 冷 Pi 切模前的运行时恢复失败原因（#5508）。
 *
 * `handleSetModel` 在冷 Pi 有原生会话 ID 时先恢复旧运行时核实当前窗口；恢复失败原本
 * 被裸 `catch {}` 吞掉，只抛固定文案「Pi current runtime could not be verified」。
 * 用户与日志都看不到是会话行缺失、工作目录不存在还是 bootstrap 失败，重试又会走同一条
 * 失败路径，排查无从下手。这里把失败原因分类并做脱敏，供日志与错误信息携带；
 * 错误码与用户可见文案不变，行为仍然 fail-closed、不改路由。
 */

export type ColdPiRehydrationFailureCategory =
  | 'session-row-missing'
  | 'not-local-pi'
  | 'native-session-missing'
  | 'working-dir-missing'
  | 'bootstrap-failed'
  | 'runtime-not-live'
  | 'unknown';

export interface ColdPiRehydrationFailure {
  category: ColdPiRehydrationFailureCategory;
  /** 单行、有界的脱敏原因，可直接进日志与错误信息。 */
  reason: string;
}

const REASON_MAX_LENGTH = 240;

export class ColdPiRehydrationError extends Error {
  constructor(
    readonly category: ColdPiRehydrationFailureCategory,
    message: string,
    options?: { cause?: unknown },
  ) {
    super(message, options);
    this.name = 'ColdPiRehydrationError';
  }
}

/** 压成单行并截断：原因来自异常 message，可能含多行栈或超长路径。 */
export function sanitizeColdPiRehydrationReason(raw: unknown): string {
  const text = raw instanceof Error ? raw.message : typeof raw === 'string' ? raw : String(raw ?? '');
  const singleLine = text.replace(/\s+/g, ' ').trim();
  if (!singleLine) return 'no error detail';
  return singleLine.length > REASON_MAX_LENGTH
    ? `${singleLine.slice(0, REASON_MAX_LENGTH - 1)}…`
    : singleLine;
}

export function describeColdPiRehydrationFailure(error: unknown): ColdPiRehydrationFailure {
  if (error instanceof ColdPiRehydrationError) {
    return { category: error.category, reason: sanitizeColdPiRehydrationReason(error) };
  }
  return { category: 'unknown', reason: sanitizeColdPiRehydrationReason(error) };
}

/**
 * 抛给渲染层的错误信息。保留原固定前缀（接线测试与既有文案依赖它），括号内附失败
 * 类别与原因；渲染层按错误码映射用户文案，原始错误详情里可见真实原因。
 */
export function coldPiRehydrationFailureMessage(failure: ColdPiRehydrationFailure): string {
  return `Pi current runtime could not be verified (${failure.category}: ${failure.reason}); runtime selection was not changed`;
}
