/**
 * #5028 Windows 实机 harness:直接实例化真实 GhostManager(不是复刻 rename),在隔离根目录下
 * 用 ≥100MB 合成 .cindy 包跑安装 / 更新 / 可控锁 / 锁耗尽四个场景。
 * 覆盖:GhostManager 安装事务全链(解包→staging→journal→rename→receipt→approval)、更新事务
 * (backup→placement→rollback)、renameManagedDir 退避、失败清理与用户提示。
 * 未覆盖:Electron IPC、渲染层 UI、正式安装包打包层、随包 seed 路径。
 * 锁:Windows 上用 PowerShell 子进程以 FileShare.Read 打开 staging 内 ghost.json —— 允许读、
 * 禁止 rename 其父目录(ERROR_ACCESS_DENIED→EPERM);非 Windows 上锁不生效,harness 会如实标注。
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn, type ChildProcess } from 'node:child_process';
import JSZip from 'jszip';
import { GhostManager, DEFAULT_RENAME_RETRY_DELAYS_MS, RENAME_RETRY_EXHAUSTED_HINT } from '../src/main/cindy-brain/GhostManager.js';
import { runGhostSnapshotWorkerRequest } from '../src/main/cindy-brain/ghostSnapshotWorkerProcess.js';
import { ghostInstallApprovalToken } from '../src/shared/ghost.js';

const sizeMb = Number(process.argv[2] || 120);
const only = (process.argv[3] || 'install,update,lock-release,lock-exhaust').split(',');
const base = fs.realpathSync.native(fs.mkdtempSync(path.join(os.tmpdir(), 'cindy-5028-harness-')));
const rootDir = path.join(base, 'ghosts');
const ID = 'probe5028';
const events: Array<Record<string, unknown>> = [];
const log = {
  info: (m: string, d?: unknown) => rec('info', m, d), warn: (m: string, d?: unknown) => rec('warn', m, d),
  error: (m: string, d?: unknown) => rec('error', m, d), debug: () => {},
};
function rec(level: string, msg: string, data?: unknown) { const e = { t: Date.now(), level, msg, data }; events.push(e); console.log(JSON.stringify(e)); }
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function makeCindy(version: string, mb: number): Promise<{ file: string; sha256: string }> {
  const zip = new JSZip();
  // 普通沙箱插件包上限 8MiB;#5026 的 100MB+ 包只能是 Node 插件(上限 128MiB),按此合成。
  zip.file('ghost.json', JSON.stringify({ schemaVersion: 2, id: ID, name: 'Probe 5028', version, kind: 'chip', entry: 'main.js', slots: ['node'], node: { entry: 'node/worker.cjs', protocol: 'json-rpc-stdio' } }));
  zip.file('main.js', 'module.exports = {};');
  zip.file('node/worker.cjs', 'process.stdin.resume();');
  for (let i = 0; i < 200; i++) zip.file(`assets/f${i}.txt`, crypto.randomBytes(1024).toString('base64'));
  zip.file('assets/blob.bin', crypto.randomBytes(mb * 1024 * 1024), { compression: 'STORE' });
  const buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'STORE' });
  const file = path.join(base, `probe-${version}.cindy`); fs.writeFileSync(file, buf);
  return { file, sha256: crypto.createHash('sha256').update(buf).digest('hex') };
}
function newManager(renameRetry?: { enabled: boolean; delaysMs?: readonly number[] }) {
  return new GhostManager({
    getRootDir: () => rootDir, getLocale: () => 'zh-CN', log: log as never, renameRetry,
    onChanged: () => {}, mutateSnapshot: async (request) => { const { parentDir, ...r } = request; await runGhostSnapshotWorkerRequest(r, parentDir); },
  });
}
/** 锁:等 staging 出现并含 ghost.json 后,用 PowerShell 以 FileShare.Read 打开并持有;返回释放函数。 */
function armLock(): { release: () => void; locked: Promise<string | null> } {
  let child: ChildProcess | null = null; let released = false;
  if (process.platform !== 'win32') {
    rec('warn', 'lock not effective on non-windows (no FileShare semantics)');
    return { locked: Promise.resolve(null), release: () => {} };
  }
  // 预先启动 PowerShell,由它自己以 5ms 轮询等待 staging 里的 ghost.json 出现后立刻以
  // FileShare.Read 打开并持有(允许读、禁止 rename 父目录),避免冷启动慢于解包。
  const pattern = path.join(rootDir, `.cindy-installing-${ID}-*`, 'ghost.json').replace(/'/g, "''");
  const ps = `$deadline=(Get-Date).AddSeconds(90); while((Get-Date) -lt $deadline){ $t=Get-ChildItem -Path '${pattern}' -ErrorAction SilentlyContinue | Select-Object -First 1; if($t){ try { $f=[System.IO.File]::Open($t.FullName,'Open','Read','Read'); Write-Output ('LOCKED ' + $t.FullName); while($true){Start-Sleep -Milliseconds 100} } catch { Start-Sleep -Milliseconds 5 } } else { Start-Sleep -Milliseconds 5 } }; Write-Output 'LOCK_TIMEOUT'`;
  child = spawn('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', ps], { stdio: ['ignore', 'pipe', 'inherit'] });
  const locked = new Promise<string | null>((res) => {
    let buf = ''; child!.stdout!.on('data', (b) => { buf += String(b); const m = buf.match(/LOCKED (.+)/); if (m) { rec('info', 'harness lock acquired', { target: m[1].trim() }); res(m[1].trim()); } else if (buf.includes('LOCK_TIMEOUT')) { rec('warn', 'staging never appeared; lock not armed'); res(null); } });
    child!.on('exit', () => res(null));
  });
  return { locked, release: () => { if (child && !released) { released = true; child.kill('SIGKILL'); rec('info', 'harness lock released'); } } };
}
function journalFiles() { const d = path.join(base, 'ghosts-install-state'); return fs.existsSync(d) ? fs.readdirSync(d).filter((n) => n.startsWith('.pending-')) : []; }
function stagingDirs() { return fs.existsSync(rootDir) ? fs.readdirSync(rootDir).filter((n) => n.startsWith('.cindy-installing-')) : []; }
function state(m: GhostManager) { const g = m.list().find((x) => x.manifest.id === ID); return { installed: !!g, version: g?.manifest.version ?? null, approval: g?.approval.state ?? null, enabled: g?.enabled ?? null, journal: journalFiles(), staging: stagingDirs(), finalDirExists: fs.existsSync(path.join(rootDir, ID)) }; }

const results: Record<string, unknown> = {};
(async () => {
  rec('info', 'harness start', { base, platform: `${os.platform()} ${os.release()}`, node: process.version, sizeMb, delays: DEFAULT_RENAME_RETRY_DELAYS_MS, budgetMs: DEFAULT_RENAME_RETRY_DELAYS_MS.reduce((a, b) => a + b, 0) });
  const m = newManager({ enabled: true }); // 强制启用 win32 缺省策略,使 macOS 也走同一路径
  const p100 = await makeCindy('1.0.0', sizeMb); rec('info', 'package built', { version: '1.0.0', file: p100.file, sha256: p100.sha256, bytes: fs.statSync(p100.file).size });

  if (only.includes('install')) {
    const t = Date.now(); const r = await m.install(p100.file, { expectedPackageSha256: p100.sha256 });
    results.install = { ms: Date.now() - t, rejection: 'rejection' in r ? r.rejection : null, state: state(m) };
    rec('info', 'scenario install done', results.install);
  }
  if (only.includes('update')) {
    const p101 = await makeCindy('1.0.1', sizeMb); const t = Date.now();
    const r = await m.update(p101.file, { expectedInstalledApproval: ghostInstallApprovalToken(m.list().find((g) => g.manifest.id === ID)?.approval), expectedPackageSha256: p101.sha256 });
    results.update = { ms: Date.now() - t, rejection: 'rejection' in r ? r.rejection : null, state: state(m), backupLeft: (fs.existsSync(rootDir) ? fs.readdirSync(rootDir) : []).filter((n) => n.includes('backup')) };
    rec('info', 'scenario update done', results.update);
  }
  if (only.includes('lock-release')) {
    // 更新 1.0.1→1.0.2:锁 staging,rename 第 5 次失败(≈3.75s>原 3.1s 预算)后释放,应在第 6 次(≈6.75s)成功。
    const p102 = await makeCindy('1.0.2', sizeMb); const lock = armLock(); let attemptsSeen = 0;
    const origWarn = log.warn; (log as { warn: typeof origWarn }).warn = (msg, d) => { origWarn(msg, d); if (msg.includes('retrying')) { attemptsSeen = (d as { attempt: number }).attempt; if (attemptsSeen === 5) lock.release(); } };
    const t = Date.now();
    const r = await m.update(p102.file, { expectedInstalledApproval: ghostInstallApprovalToken(m.list().find((g) => g.manifest.id === ID)?.approval), expectedPackageSha256: p102.sha256 });
    (log as { warn: typeof origWarn }).warn = origWarn; lock.release();
    const succ = events.find((e) => e.msg === 'ghost transaction rename succeeded after transient retry');
    results['lock-release'] = { ms: Date.now() - t, lockTarget: await lock.locked, rejection: 'rejection' in r ? r.rejection : null, retriesObserved: attemptsSeen, succeededAfterAttempts: succ ? (succ.data as { attempts: number }).attempts : null, state: state(m) };
    rec('info', 'scenario lock-release done', results['lock-release']);
  }
  if (only.includes('lock-exhaust')) {
    // 更新 →1.0.3:锁持续到耗尽(≈9.75s 后第 7 次失败),期望 io 拒绝 + 提示,旧版本(1.0.2 或 1.0.1)保留,journal/staging 清空。
    const before = state(m); const p103 = await makeCindy('1.0.3', sizeMb); const lock = armLock();
    const origWarn = log.warn; (log as { warn: typeof origWarn }).warn = (msg, d) => { origWarn(msg, d); if (msg.includes('retry exhausted')) lock.release(); };
    const t = Date.now();
    const r = await m.update(p103.file, { expectedInstalledApproval: ghostInstallApprovalToken(m.list().find((g) => g.manifest.id === ID)?.approval), expectedPackageSha256: p103.sha256 });
    (log as { warn: typeof origWarn }).warn = origWarn; lock.release();
    const rej = 'rejection' in r ? (r.rejection as { code: string; reason: string; rollbackFailed?: boolean }) : null;
    const stateNow = state(m);
    // 锁释放晚于事务内的 staging rm,残留 staging 属预期;用新实例跑一次构造期启动恢复再记录。
    const m2 = newManager({ enabled: true });
    results['lock-exhaust'] = { ms: Date.now() - t, lockTarget: await lock.locked, rejection: rej, hintPresent: !!rej && rej.reason.includes(RENAME_RETRY_EXHAUSTED_HINT), before: { version: before.version }, state: stateNow, afterStartupRecovery: state(m2) };
    rec('info', 'scenario lock-exhaust done', results['lock-exhaust']);
  }
  const out = path.join(base, 'harness-summary.json');
  fs.writeFileSync(out, JSON.stringify({ head: '26aecab85b207f51c7f03448027343a37c0bd4ae', base, platform: `${os.platform()} ${os.release()}`, node: process.version, sizeMb, results, events }, null, 2));
  console.log('SUMMARY_FILE ' + out);
  console.log('CINDY-5028-HARNESS-DONE ' + JSON.stringify(Object.fromEntries(Object.entries(results).map(([k, v]) => [k, (v as { rejection: unknown }).rejection ? 'REJECTED' : 'OK']))));
})().catch((e) => { console.error('HARNESS_ERROR', e); process.exit(1); });
