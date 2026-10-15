# Issue #5936 合成 UI 证据

代码提交：b0f1d45f88b9cd3c591b9c1f4a1da2a52b6fb39a；基线：97cf41273df87d8c6efe2390639fe3283be63559。

截图来自 macOS Chromium 内挂载的真实 SessionItem / SessionCard / CardMasonry / PermissionPrompt 源码与主题。外围页面、64px rail 和悬浮容器为演示壳，不是完整 Cindy 客户端截图；所有任务、请求、工具内容为合成数据，响应仅写入测试记录，未执行工具。

四形态：rail（64px 折叠栏 + 悬浮卡片）、one（一列）、two（两列）、three（置顶三列）；Light / Dark 各一张。另附 rows（列表）及其修复前截图。

before-events.json / after-events.json 记录同一次按键的当前任务、请求、activeElement、target、defaultPrevented、让位结果和响应。修复前 30 组鼠标切换无响应，补点聊天空白后恢复；修复后 30 组均仅响应 B。另有 18 组原生 Tab、菜单 Esc、重命名、延迟导航、原地出现、键盘导航与多选验证。

完整源码客户端隔离启动返回 STARTUP_TIMEOUT，未完成真实客户端验收；Windows、完整 App 根监听器与分离窗口未实测。
