# #6135 窗口快捷键消费者核对

核对基线 50398e1ac，最新上游 4f26df40fa0d0a0eff74e20275188458d9ed7b64；相关组件与主权契约未改变。

| 同一 CCAgentSessionView 交互分支 | 窗口按键 | 基线状态 |
|---|---|---|
| PermissionPrompt | Enter / Ctrl或Meta+Enter / Esc | 已接 ownsHardwareTaskActions |
| PlanActionCard | Enter / Esc | 缺少活动面板门控，已有 shouldCardShortcutYield |
| AskUserQuestionPrompt | 数字 / Esc | 缺少活动面板门控，已有 shouldCardShortcutYield；自身编辑器按键保持局部 |
| IssueConfirmCard | Ctrl或Meta+Enter / Esc | 缺少活动面板门控；提交仍要求原有隐私确认与字段校验 |
| RenameSessionsConfirmCard | Ctrl或Meta+Enter / Esc | 缺少活动面板门控 |
| GhostGrantConfirmCard | Ctrl或Meta+Enter / Esc | 缺少活动面板门控；授权目录选择与载荷保持原样 |

PluginSetupPrompt、InputHandoffCard、RemoteDesktopConfirmationNotice 没有同类窗口决策监听。PlanViewerCard 取消按钮为局部点击。InteractionPromptHost 只负责 portal，没有按键监听。MessageStream 的滚动/历史监听已有 ownsHardwareScrollActions；ChatInput 的编辑器键处理和语音快捷键属于输入交互，不是待确认请求响应。侧栏菜单、拖动、文件页和浮层监听属于各自 UI 操作，本次不改。

新增验证包含六类的全部有序混合配对、两种注册顺序、从 A 切到 B 后的 Esc；以及每类主快捷键、非活动卡的原生按钮操作。浏览器使用真实侧栏行和卡片源码，以合成请求记录响应，不连接宿主，不执行请求。

额外发现：BotGroupChatView 的 speakers.map（约902行）可呈现多个 BotGroupPendingInteraction（约1220行），后者亦复用 PermissionPrompt / AskUserQuestionPrompt。但群聊没有此处任务分屏的 ownsHardwareTaskActions，不能擅自决定多个伙伴中哪个拥有全局按键。本轮保持该调用方默认行为，已将源码证据交协调者登记；需要另行裁决群聊按键归属，未宣称本次修复覆盖该路径。

本轮反证：新增 90 项运行时单测在旧 head 上 52 失败、38 通过；五类缺门控卡片均可复现。修复后 7 文件 142 项通过。真实 Chrome 的 168 个场景（六类有序混合配对 Esc、各类主快捷键、两种注册顺序、Light/Dark）从 110 个错误响应降至 0。未改卡片按钮、请求载荷、既有 shouldCardShortcutYield 或各卡片提交校验。
