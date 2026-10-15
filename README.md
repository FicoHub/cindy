# Issue #5936 合成 UI 证据

前两轮代码提交：50398e1ac8329a8c143c362770b4001ecf228cd5；分支起点：97cf41273df87d8c6efe2390639fe3283be63559。本轮核对上游 9d121f87e800f0235cd7b24f112efcdbf209568e，相关焦点、授权卡和分屏契约与分支一致。

截图来自 macOS Chromium 内挂载的真实 SessionItem / SessionCard / CardMasonry / PermissionPrompt 源码与主题。外围页面、64px rail 和悬浮容器为演示壳，不是完整 Cindy 客户端截图；所有任务、请求、工具内容为合成数据，响应仅写入测试记录，未执行工具。

四形态：rail（64px 折叠栏 + 悬浮卡片）、one（一列）、two（两列）、three（置顶三列）；Light / Dark 各一张。另附 rows（列表）及其首轮修复前截图。截图于 50398e1ac 阶段刷新；最新 ae69fb920 未改样式，沿用这些截图。

before-events.json / after-events.json 是首轮焦点问题的修复前、最终修复后事件：30 组鼠标切换原先无响应，补点聊天空白后恢复；最终 30 组均仅响应 B。另有 18 组原生 Tab、菜单 Esc、重命名、延迟导航、原地出现、键盘导航与多选验证通过。

before-split-events.json / after-split-events.json 挂载两张真实授权卡、交换注册顺序，并反复 B→A→B：列表／卡片 × Light/Dark × Enter/Ctrl+Enter/Esc，共 72 次操作。原 b0f1d45 有 36 次响应错误请求，接入既有 ownsHardwareTaskActions 后为 0。真实 SplitGroup 的主权交接另由其 43 项运行单测保护；浏览器实验没有挂载完整 SplitGroup 或 App。

before-files-events.json / after-files-events.json 使用真实 MemoryRouter 与 React portal，保持任务行挂载及视觉高亮，从 /cc-agent/files/A 返回 /cc-agent/A。P1 修复后、P2 修复前 12 组无响应；区分视觉高亮与真实导航完成后，12 组只响应 request-A。另 6 组浏览器用例验证异步导航等待、键盘激活及焦点迁移取消交接。

本轮分批验证 11 个测试文件、202 项不重复单测通过（含新增 P1 12 项先败、P2 8 项先败），最终 desktop typecheck 通过。所有重型检查通过同一 scripts/test-gate-lock.mjs 串行，Vitest --maxWorkers=1。

完整源码客户端此前隔离启动返回 STARTUP_TIMEOUT；未完成真实客户端、Windows、完整 App 根监听器与独立侧栏窗口验收。这些组件实验不替代上述验收。


## 补齐全部决策卡窗口监听

本轮代码提交 ae69fb920edfb9aa5c8075ed92dbc78f227c1a7c；核对最新上游 4f26df40fa0d0a0eff74e20275188458d9ed7b64，相关六卡/活动面板契约未改变。

before-cards-events.json / after-cards-events.json 覆盖六类卡片全部有序配对的 Esc、各卡主快捷键、两种注册顺序与 Light/Dark，共 168 个真实鼠标导航场景。旧 head 50398e1ac 上 110 个错误请求响应；补齐五卡已有 ownsHardwareTaskActions 后 0 错误响应。仅在隔离 Chrome 挂载真实侧栏和卡片源码，不挂载完整 App / SplitGroup，不执行请求。

90 项新运行时单测在旧 head 先败 52 项；修复后 7 文件 142 项通过，含原生按钮鼠标操作、请求绑定、焦点让位及既有调用兼容。desktop typecheck、文档 10 项、DCO 3 个提交通过。重型检查使用共享锁串行，Vitest --maxWorkers=1。

consumer-audit.md 记录所有同类窗口消费者及排除依据。群聊复用授权/提问卡缺少活动伙伴的快捷键归属契约，本轮不更改，已交协调者登记，未声称覆盖。完整 App、真实客户端、Windows、独立窗口的未验收边界继续保留。
