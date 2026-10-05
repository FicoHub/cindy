import { describe, expect, it } from 'vitest';
import { extractCommandOutputPathCandidates } from '../commandOutputPaths';

/**
 * #5503: a real Bot history held exec commands of ~1M characters with thousands of
 * path candidates. Inference ran per candidate over the whole prefix / segment, so
 * one outline page blocked the main process for ~31s. These samples reproduce the
 * cost shape (long text + many path tokens, with and without separators) instead
 * of a long run of repeated characters, which never exercised the per-candidate scans.
 */
function longCommand(kind: 'oneline' | 'multiline' | 'powershell', count: number): string {
  const paths = Array.from({ length: count }, (_, index) =>
    `'/Users/demo/project/data/dir${index % 97}/segment-${index}/file-${index}.json'`);
  const pad = 'x'.repeat(120);
  if (kind === 'oneline') {
    return `node scripts/collect.js --pad ${pad} --inputs ${paths.map((p) => `${p} --pad ${pad}`).join(' ')} && echo ok > /work/final-report.txt`;
  }
  if (kind === 'multiline') {
    return `cat <<'EOF' | node scripts/collect.js\n${paths.map((p) => `${p} ${pad}`).join('\n')}\nEOF\necho ok > /work/final-report.txt`;
  }
  return `Get-ChildItem ${pad} ${paths.map((p) => `${p} ${pad}`).join(' ')} | Out-File -FilePath C:\\work\\final-report.txt`;
}

describe('command output path scan cost (#5503)', () => {
  it.each(['oneline', 'multiline', 'powershell'] as const)('stays linear on long %s commands with thousands of candidates', (kind) => {
    const command = longCommand(kind, 7000);
    expect(command.length).toBeGreaterThan(1_000_000);
    const started = performance.now();
    const paths = extractCommandOutputPathCandidates(command);
    const elapsed = performance.now() - started;
    expect(paths).toEqual([kind === 'powershell' ? 'C:\\work\\final-report.txt' : '/work/final-report.txt']);
    // The pre-fix implementation took 13–18s here; the bound is generous for slow CI.
    expect(elapsed).toBeLessThan(2000);
  });

  it('keeps explicit-output decisions that end in long whitespace runs', () => {
    const gap = ' '.repeat(300);
    expect(extractCommandOutputPathCandidates(`Out-File${gap}C:\\out\\a.txt`)).toEqual(['C:\\out\\a.txt']);
    expect(extractCommandOutputPathCandidates(`Out-File -FilePath${gap}'C:\\out\\b.txt'`)).toEqual(['C:\\out\\b.txt']);
    expect(extractCommandOutputPathCandidates(`Copy-Item C:\\in\\c.txt -Destination${gap}C:\\out\\c2.txt`)).toEqual(['C:\\out\\c2.txt']);
    expect(extractCommandOutputPathCandidates(`cp -t${gap}/out/ /in/d.txt`)).toEqual(['/out/d.txt']);
    expect(extractCommandOutputPathCandidates(`cp --target-directory=/out/ /in/e.txt`)).toEqual(['/out/e.txt']);
    // Non-whitespace between the writer and the path still disqualifies the position.
    expect(extractCommandOutputPathCandidates(`Out-File -Encoding utf8${gap}C:\\out\\f.txt`)).toEqual([]);
  });

  it('does not let a nested read switch claim the writer position', () => {
    expect(extractCommandOutputPathCandidates(
      "Set-Content -Value (Get-Content -Path C:\\in\\x.txt) -Path C:\\out\\y.txt",
    )).toEqual(['C:\\out\\y.txt']);
    expect(extractCommandOutputPathCandidates(
      "Set-Content -Value (Get-Content -Path C:\\in\\x.txt) C:\\out\\z.txt",
    )).toEqual([]);
  });
});
