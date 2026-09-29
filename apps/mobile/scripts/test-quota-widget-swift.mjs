import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Compiles the actual Foundation codec on macOS. This is not an iOS app build or simulator run.
const mobile = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const temporary = mkdtempSync(join(tmpdir(), 'cindy-quota-swift-test-'));
try {
  const main = join(temporary, 'QuotaSnapshotContract.swift');
  writeFileSync(main, `import Foundation
@main struct Contract {
  static func main() throws {
    let input = #"{"version":2,"source":"demo","connection":"online","token":"must-disappear","rows":[{"platform":"codex","observedAtMs":1800000000000,"available":true,"email":"must-disappear","windows":[{"kind":"primary","observedAtMs":1800000000000,"minutes":300,"remainingPercent":0,"resetAtMs":1800003600000,"token":"must-disappear"}]}]}"#
    let value = try QuotaSnapshot.decode(Data(input.utf8))
    let row = value.rows[0], window = row.windows[0]
    let encoded = try JSONEncoder().encode(value)
    precondition(!String(data: encoded, encoding: .utf8)!.contains("must-disappear"))
    precondition(value.state(row, window, at: Date(timeIntervalSince1970: 1800000000)) == "fresh")
    precondition(value.state(row, window, at: Date(timeIntervalSince1970: 1800000900)) == "stale")
    precondition(value.state(row, window, at: Date(timeIntervalSince1970: 1800003600)) == "awaitingRefresh")
    precondition(window.remainingPercent == 0)
    let missing = try QuotaSnapshot.decode(Data(input.replacingOccurrences(of: "\\\"remainingPercent\\\":0", with: "\\\"remainingPercent\\\":null").utf8))
    precondition(missing.state(missing.rows[0], missing.rows[0].windows[0], at: Date(timeIntervalSince1970: 1800000000)) == "unavailable")
    for invalid in [input.replacingOccurrences(of: "\\\"version\\\":2", with: "\\\"version\\\":1"), input.replacingOccurrences(of: "\\\"remainingPercent\\\":0", with: "\\\"remainingPercent\\\":101"), String(repeating: " ", count: 16385)] {
      do { _ = try QuotaSnapshot.decode(Data(invalid.utf8)); fatalError("Accepted invalid snapshot") } catch {}
    }
    let base = #"{"version":2,"source":"demo","connection":"online","rows":[{"platform":"claude","available":true,"observedAtMs":1800000000000,"windows":[{"kind":"scoped","remainingPercent":50,"observedAtMs":1799990000000}]}]}"#
  do { _ = try QuotaSnapshot.decode(Data(base.utf8)); fatalError("Missing model scope accepted") } catch {}
  let valid = base.replacingOccurrences(of: "\\"kind\\":\\"scoped\\"", with: "\\"kind\\":\\"scoped\\",\\"scope\\":\\"Fable\\"")
  let snapshot = try QuotaSnapshot.decode(Data(valid.utf8))
  precondition(snapshot.state(snapshot.rows[0], snapshot.rows[0].windows[0], at: Date(timeIntervalSince1970: 1800000000)) == "stale")
  let now = Date(timeIntervalSince1970: 1800000000)
  precondition(QuotaFormatting.duration(resetAtMs: 1800000000000 + 6*86400000 + 23*3600000, at: now, uppercase: true) == "6D 23H")
  precondition(QuotaFormatting.duration(resetAtMs: 1800000000000 + 4*3600000 + 59*60000, at: now) == "4h 59m")
  precondition(QuotaFormatting.duration(resetAtMs: 1800000000000, at: now) == "—")
    print("PASS: actual Swift quota decoder, privacy, scoped-window boundary, freshness and reset formatting")
  }
}
`);
  const binary = join(temporary, 'quota-snapshot-contract');
  execFileSync('swiftc', ['-parse-as-library', join(mobile, 'modules/cindy-quota-widget/ios/QuotaSnapshot.swift'), main, '-o', binary], { stdio: 'inherit' });
  execFileSync(binary, [], { stdio: 'inherit' });
} finally { rmSync(temporary, { recursive: true, force: true }); }
