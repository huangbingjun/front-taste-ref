# front-taste-ref

从一个产品网址出发，发现同一公司或产品的官方站点，取样分析真实页面，并把值得借鉴的排版、构图、组件和移动端行为整理成开发参考。适合给新产品页或现有界面找风格方向，也可用于记录自己的官网设计规则。

## 安装

将整个 Skill 目录放入 Agent 支持的 Skill 路径，保留 `SKILL.md` 和相邻的参考文件。也可以在**要使用它的项目目录**中运行以下命令，选择要安装到的 Agent。安装器需要 Node.js 22.20 或更新版本。

```sh
DISABLE_TELEMETRY=1 npx skills@1.8.1 add /Users/jun/Documents/Study/Skills/front-taste-ref --skill front-taste-ref
```

安装器支持 Codex、Claude Code、Cursor、Gemini CLI、GitHub Copilot、OpenCode、Windsurf、Cline 等。可加 `-a codex` 指定 Agent，其余标识符和手动安装路径见[安装器的支持列表](https://github.com/vercel-labs/skills/blob/e781cb4d07433dfe1d19e924ed45cc61738c55ec/docs/agents.md)。安装后刷新或重启宿主会话，确认能找到 `front-taste-ref`。

Skill 使用标准 Agent Skills 格式。完整研究需要公开网页访问与可查看的截图，DOM/CSS 能力可补充精确变量。搜索、站点映射和浏览器工具按宿主能力选择。[工具能力与降级方式](references/tools.md)

## 使用示例

> 使用 front-taste-ref 研究 https://stripe.com/ 及相关官方站点。我想给新的 SaaS 产品介绍页找风格参考，请分析营销页、文档站和独立产品的区别，输出中文参考包。

> 使用 front-taste-ref 研究 https://stripe.com/en-sg/payments。仅分析 Stripe 官网和文档站，最多深入检查 8 页，给现有 React 项目提供产品介绍页的布局、组件及移动端建议。

默认将结果写入当前工作区的 `taste-references/<品牌>/<时间戳>/`。在后续任务中把参考包路径交给 Agent，指定目标页面和约束，即可复用研究结果。

| 交付文件 | 用途 |
|---|---|
| `TASTE.md` | 阅读风格规则、页面差异和开发交接 |
| `tokens.json` | 将有证据的变量映射到新项目的语义 token |
| `sources.json` | 核实证据、样本条件和未覆盖范围 |

- [Stripe 实测案例](examples/stripe/TASTE.md)
- [GitHub 来源与借鉴点](references/sources.md)
- [行为验收场景与实测记录](evals/scenarios.md)
