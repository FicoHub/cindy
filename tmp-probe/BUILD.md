# ghost-install-harness.cjs 构建来源
- 源码：本目录 harness-src/ghost-install-harness.ts + electron-stub.js
- 被测代码：makecindy/cindy PR #5028 head 26aecab85b207f51c7f03448027343a37c0bd4ae（worktree 内 apps/desktop/src/main/cindy-brain/GhostManager.ts 等真实实现）
- 打包：在该 worktree 根目录执行
  node_modules/.bin/esbuild apps/desktop/tmp-harness/ghost-install-harness.ts --bundle --platform=node --target=node22 --format=cjs --alias:electron=./apps/desktop/tmp-harness/electron-stub.js --outfile=ghost-install-harness.cjs
- esbuild 0.28.1；产物为单文件 CJS，仅依赖 Node ≥22 内置模块。
