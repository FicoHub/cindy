// harness 专用 electron 桩:GhostManager 依赖链里的 electron 仅被惰性调用;快照 worker 由
// mutateSnapshot 注入,utilityProcess.fork 不应被触达(触达即抛错,暴露覆盖缺口)。
const os = require('node:os'); const path = require('node:path'); const fs = require('node:fs');
const stubRoot = path.join(os.tmpdir(), 'cindy-5028-harness-electron-stub'); fs.mkdirSync(stubRoot, { recursive: true });
module.exports = {
  app: { getPath: (name) => { const p = path.join(stubRoot, name); fs.mkdirSync(p, { recursive: true }); return p; }, getName: () => 'cindy-harness', isPackaged: false, getVersion: () => '0.0.0-harness' },
  utilityProcess: { fork: () => { throw new Error('HARNESS_COVERAGE_GAP: electron.utilityProcess.fork reached'); } },
  BrowserWindow: class {}, ipcMain: { handle() {}, on() {} }, shell: {}, dialog: {}, nativeTheme: {},
};
