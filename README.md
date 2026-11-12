# front-taste-ref

| [中文](#中文版) | [English](#english) |
| :---: | :---: |

## 中文

从一个产品网址出发，发现同一公司或产品的官方站点，取样分析真实页面，并把值得借鉴的排版、构图、组件和移动端行为整理成开发参考。适合给新产品页或现有界面找风格方向，也可用于记录自己的官网设计规则。

### 安装插件

#### Codex

```sh
codex plugin marketplace add huangbingjun/front-taste-ref
codex plugin add front-taste-ref@front-taste-ref-catalog
```

#### Claude Code

```sh
claude plugin marketplace add huangbingjun/front-taste-ref
claude plugin install front-taste-ref@front-taste-ref-catalog
```

Claude Code 2.1.292 及以后也可以用一条命令添加目录并安装。

```sh
claude plugin install front-taste-ref --marketplace huangbingjun/front-taste-ref
```

#### 其他 Agent

通过支持 Agent Skills 的宿主导入 [Skill 目录](skills/front-taste-ref)，或使用 GitHub 仓库安装。

```sh
DISABLE_TELEMETRY=1 npx skills@1.8.1 add huangbingjun/front-taste-ref --skill front-taste-ref
```

完整研究需要公开网页访问与可查看的截图，DOM/CSS 能力可补充精确变量。搜索、站点映射和浏览器工具按宿主能力选择。[工具能力与降级方式](skills/front-taste-ref/references/tools.md)

### 使用示例

> 使用 front-taste-ref 研究 https://stripe.com/ 及相关官方站点。我想给新的 SaaS 产品介绍页找风格参考，请分析营销页、文档站和独立产品的区别，输出中文参考包。

> 使用 front-taste-ref 研究 https://stripe.com/en-sg/payments 。仅分析 Stripe 官网和文档站，最多深入检查 8 页，给现有 React 项目提供产品介绍页的布局、组件及移动端建议。

默认将结果写入当前工作区的 `taste-references/<品牌>/<时间戳>/`。在后续任务中把参考包路径交给 Agent，指定目标页面和约束，即可复用研究结果。

| 交付文件 | 用途 |
|---|---|
| `TASTE.md` | 阅读风格规则、页面差异和开发交接 |
| `tokens.json` | 将有证据的变量映射到新项目的语义 token |
| `sources.json` | 核实证据、样本条件和未覆盖范围 |

- [Stripe 实测案例](examples/stripe/TASTE.md)
- [行为验收场景与实测记录](evals/scenarios.md)

## English

Start with a product URL, find the official sites for that company or product, and study a sample of their live pages. The skill turns useful patterns in typography, layout, components, and mobile behavior into a reference for frontend development. Use it to find a visual direction for a new page or document the design rules of your own site.

### Install the plugin

#### Codex

```sh
codex plugin marketplace add huangbingjun/front-taste-ref
codex plugin add front-taste-ref@front-taste-ref-catalog
```

#### Claude Code

```sh
claude plugin marketplace add huangbingjun/front-taste-ref
claude plugin install front-taste-ref@front-taste-ref-catalog
```

In Claude Code 2.1.292 and later, you can add the marketplace and install the plugin in one command.

```sh
claude plugin install front-taste-ref --marketplace huangbingjun/front-taste-ref
```

#### Other agents

Import the [skill directory](skills/front-taste-ref) into a host that supports Agent Skills, or install it from the GitHub repository.

```sh
DISABLE_TELEMETRY=1 npx skills@1.8.1 add huangbingjun/front-taste-ref --skill front-taste-ref
```

A full study requires access to public pages and viewable screenshots. DOM and CSS inspection can provide exact design values. The skill uses the search, site mapping, and browser tools available in the host. [Tool requirements and fallbacks (Chinese)](skills/front-taste-ref/references/tools.md)

### Example prompts

> Use front-taste-ref to study https://stripe.com/ and related official sites. I'm looking for design references for a new SaaS product page. Compare the marketing pages, documentation site, and standalone products, then create an English reference pack.

> Use front-taste-ref to study https://stripe.com/en-sg/payments. Limit the study to the Stripe website and its documentation, and inspect up to eight pages in depth. Recommend layouts, components, and mobile behavior for a product page in an existing React project.

By default, the skill writes its results to `taste-references/<brand>/<timestamp>/` in the current workspace. To reuse the research in a later task, give the agent the path to the reference pack along with the target page and its constraints.

| File | Purpose |
|---|---|
| `TASTE.md` | Design rules, differences between pages, and implementation guidance |
| `tokens.json` | Evidence-backed values to map to semantic tokens in the new project |
| `sources.json` | Evidence, sampling conditions, and gaps in coverage |

- [Stripe case study (Chinese)](examples/stripe/TASTE.md)
- [Evaluation scenarios and results (Chinese)](evals/scenarios.md)
