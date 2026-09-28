// #5028 Windows rename 探针：复刻 GhostManager.renameManagedDir 的退避序列，
// 在隔离目录里生成 ≥100MB 的"刚解压"目录后 rename(staging→final)，记录每次尝试的 errno 与耗时。
// 不触碰 Cindy 安装目录/配置/凭据；只在 %TEMP%\cindy-5028-probe 下读写。
const fs = require('fs'); const path = require('path'); const os = require('os'); const crypto = require('crypto');
const DELAYS = [250, 500, 1000, 2000, 3000, 3000];            // 与 PR 26aecab85 完全一致
const TRANSIENT = new Set(['EPERM', 'EBUSY', 'EACCES']);
const sizeMb = Number(process.argv[2] || 120); const rounds = Number(process.argv[3] || 3);
const base = path.join(os.tmpdir(), 'cindy-5028-probe', new Date().toISOString().replace(/[:.]/g, '-'));
fs.mkdirSync(base, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function fill(dir, mb) {
  fs.mkdirSync(path.join(dir, 'skills', 'demo'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'ghost.json'), JSON.stringify({ id: 'probe-5028', name: 'probe', version: '1.0.0' }));
  const big = path.join(dir, 'assets', 'blob.bin'); fs.mkdirSync(path.dirname(big), { recursive: true });
  const fd = fs.openSync(big, 'w'); const chunk = 4 * 1024 * 1024;
  for (let w = 0; w < mb * 1024 * 1024; w += chunk) fs.writeSync(fd, crypto.randomBytes(chunk)); fs.closeSync(fd);
  for (let i = 0; i < 300; i++) fs.writeFileSync(path.join(dir, 'skills', 'demo', `f${i}.md`), crypto.randomBytes(2048).toString('base64'));
}
async function attemptRename(from, to) {
  const log = []; const t0 = Date.now();
  for (let attempt = 0; ; attempt++) {
    try { await fs.promises.rename(from, to); log.push({ attempt: attempt + 1, ok: true, atMs: Date.now() - t0 }); return { ok: true, attempts: attempt + 1, totalMs: Date.now() - t0, log }; }
    catch (e) {
      log.push({ attempt: attempt + 1, code: e.code, atMs: Date.now() - t0 });
      const transient = TRANSIENT.has(e.code);
      if (!transient || attempt >= DELAYS.length) return { ok: false, attempts: attempt + 1, totalMs: Date.now() - t0, lastCode: e.code, log };
      await sleep(DELAYS[attempt]);
    }
  }
}
(async () => {
  const results = [];
  for (const [label, mb] of [['control-1MB', 1], ...Array.from({ length: rounds }, (_, i) => [`big-${sizeMb}MB-r${i + 1}`, sizeMb])]) {
    const staging = path.join(base, `.cindy-installing-${label}`); const final = path.join(base, `final-${label}`);
    const tf = Date.now(); await fill(staging, mb); const fillMs = Date.now() - tf;
    const r = await attemptRename(staging, final);
    results.push({ label, mb, fillMs, ...r });
    console.log(JSON.stringify({ label, mb, fillMs, ok: r.ok, attempts: r.attempts, totalMs: r.totalMs, lastCode: r.lastCode || null, log: r.log }));
    fs.rmSync(final, { recursive: true, force: true }); fs.rmSync(staging, { recursive: true, force: true });
  }
  const summary = { host: os.hostname(), platform: `${os.platform()} ${os.release()}`, node: process.version, delays: DELAYS, budgetMs: DELAYS.reduce((a, b) => a + b, 0), results };
  const out = path.join(base, 'summary.json'); fs.writeFileSync(out, JSON.stringify(summary, null, 2));
  console.log('SUMMARY_FILE ' + out);
  console.log('CINDY-5028-PROBE-DONE attempts=' + results.map((r) => `${r.label}:${r.ok ? r.attempts : 'FAIL/' + r.lastCode}`).join(' '));
})().catch((e) => { console.error('PROBE_ERROR', e); process.exit(1); });
