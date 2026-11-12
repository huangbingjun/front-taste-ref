# 输出契约 v1

在指定输出目录写三份 UTF-8 文件。默认在当前工作区使用 `taste-references/<品牌>/<YYYYMMDD-HHMMSS>/`（本地时区），品牌路径用安全的短名，已有目录则追加序号。引用所保存的证据用包内相对路径（例如 `evidence/home-desktop.jpeg`）。不保存原始全站 HTML、账户信息或签名 URL。

## TASTE.md

使用[报告模板](../assets/TASTE.template.md)。结论旁引用一个或多个 `E…` 证据编号，引用能在 `sources.json` 解析。保留一次研究的范围、方法、覆盖和不能回答的问题。给一个目标页面或最匹配的典型页面写简短的开发交接。

## sources.json

使用 `schema_version: 1`。各数组 ID 在本包内稳定且唯一。可空字段无信息时用 JSON `null`。

| 字段 | 内容 |
|---|---|
| `subject`, `input_urls`, `captured_at` | 研究主体、起始 URL 列表、采集日期时间（ISO 8601，带时区） |
| `coverage` | `status` 为 `sampled`（按样本完成）或 `partial`（证据或能力明显不足）。`limits` 记录 `sites`、`candidate_pages`、`analyzed_pages` 上限，`counts` 记录实际站点数、候选总数和各页面状态计数，`stop_reason` 记录停止原因，`gaps` 列出覆盖缺口 |
| `sites[]` | `id`、`origin`、`group`、`status`（`confirmed`、`unverified`、`excluded`）、`evidence_ids`、`reason`。第三方托管站点额外记录 `path_scope` |
| `pages[]` | `id`、`site_id`、`url`、`final_url`、`page_type`、`locale`、`status`（`observed`、`limited`、`blocked`、`candidate`、`excluded`）、`discovered_from`（URL 列表）、`reason` |
| `evidence[]` | `id`、`page_id`（站点归属等独立来源可为空）、`url`、`captured_at`、`kind`（`ownership`、`text`、`dom`、`css`、`screenshot`、`interaction`）、`viewport`（CSS 像素的 `width`、`height` 对象或空）、`theme`、`state`、`observation`、`artifact` |

候选清单可包含访问受限、无视觉证据或未分析的官方页。记录最终 URL 和限制时注意脱敏。截图证据仅在实际查看后登记为 `screenshot`，只有 URL 或占位图时将视觉观察记为缺失。查看但未保存的截图证据可令 `artifact` 为 `null`，并说明留存限制。站点归属证据以外，正式视觉结论只引用已确认范围内的页面。

## tokens.json

顶层含 `schema_version: 1`、`tokens` 数组。每项包括 `name`（语义名称，如 `type.display.size`）、`value`（含单位的 CSS 字符串或 `null`）、`role`（用途）、`scope`（适用品牌/页面/视口）、`theme`（已验证主题或 `null`）、`status`、`evidence_ids`。同名 token 在不同范围可有不同值。

| 状态 | 依据 |
|---|---|
| `measured` | 有实际 DOM 或 CSS 证据，能定位对应元素及属性 |
| `estimated` | 由已查看的视觉证据估计，精度与证据相称 |
| `inferred` | 根据多个观测或样式声明推断，需要验证 |
| `recommended` | 为新页面提出的实现选项 |
| `unknown` | 当前无法确定，`value` 为 `null` |

交付前确认所有跨文件证据引用、站点和页面 ID 都能解析，统计反映实际清单。实测值须有对应证据。写入失败时说明已产出哪些文件，并将缺少的部分内联交付。
