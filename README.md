# Fold8 宽屏布局证据说明

本目录只有演示数据。未收录原始截图、真实聊天、账号资料或凭证。

## 证据等级

- `component-*.png`：生产 `SessionListDrawer`、`ResidentHomeListProvider`、`RecentMessageHistoriesProvider`、`MessageHistoryOverlay` 与 `sessionPaneLayout` 的浏览器组件夹具截图。
- 使用 DOM 适配器模拟 React Native View 的布局、同父级绘制层次与 Fabric measureLayout 的祖先约束；主页列表、消息正文和输入栏使用演示组件。
- **不是完整 App、Android 模拟器或 Fold8 真机截图。** 不验证原生文字渲染、系统键盘、手势动画或 One UI 合成。
- `component-checks.json`：同一夹具中的几何、列表点击、输入可编辑、收起清理检查。
- 单测的失败/通过记录另存为 `regression-*.log`，不等同于设备复现。

## 尺寸与字体

- 模拟内屏：840 × 640 逻辑单位；窄屏：390 × 840；横屏临时抽屉：840 × 390。
- 浏览器 DPR=1，因此夹具中 1 逻辑单位=1 CSS px=1 截图像素；截图顶部另加 48 px 证据标识栏。
- 这些尺寸只是测试假设，不是 SM-F9710 实测 dp，也不是按原截图物理像素反推的 dp。
- font 1 / 1.3 只缩放演示文字，不能代替 Android 系统字体缩放验证。用户实际字体缩放仍未知。

## 侧栏形态适用性

| 用户要求的形态 | 本次 Mobile 是否存在 | 证据 |
|---|---|---|
| 64px rail + 悬浮面板 | 不存在该桌面形态 | 不伪造；以窄屏隐藏侧栏与横屏临时抽屉展示移动端实际行为 |
| 一列卡片 | Mobile 常驻单列任务列表 | inner-light / inner-dark / expanded |
| 两列卡片 | Mobile 不支持 | 不适用；未修改 Desktop |
| 三列卡片（置顶三列） | Mobile 不支持 | 不适用；未修改 Desktop |

## 可复现性

夹具源码、构建与截图脚本位于 `../fixture/`，不进入产品构建。运行 `build-fixture.mjs` 后启动只绑定 127.0.0.1 的静态服务器，再执行 `capture-layout.mjs`。脚本里的 Chromium 路径为当前机器路径，其他机器须指向已安装的浏览器。演示 DOM 适配器不是原生平台实现，局限如上。
