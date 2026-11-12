# front-taste-ref

| [中文版](README.md) | **English** |
| :---: | :---: |

Start with a product URL, find the official sites for that company or product, and study a sample of their live pages. The skill turns useful patterns in typography, layout, components, and mobile behavior into a reference for frontend development. Use it to find a visual direction for a new page or document the design rules of your own site.

## Install the plugin

### Codex

```sh
codex plugin marketplace add huangbingjun/front-taste-ref
codex plugin add front-taste-ref@front-taste-ref-catalog
```

### Claude Code

```sh
claude plugin marketplace add huangbingjun/front-taste-ref
claude plugin install front-taste-ref@front-taste-ref-catalog
```

In Claude Code 2.1.292 and later, you can add the marketplace and install the plugin in one command.

```sh
claude plugin install front-taste-ref --marketplace huangbingjun/front-taste-ref
```

### Other agents

Import the [skill directory](skills/front-taste-ref) into a host that supports Agent Skills, or install it from the GitHub repository.

```sh
DISABLE_TELEMETRY=1 npx skills@1.8.1 add huangbingjun/front-taste-ref --skill front-taste-ref
```

A full study requires access to public pages and viewable screenshots. DOM and CSS inspection can provide exact design values. The skill uses the search, site mapping, and browser tools available in the host. [Tool requirements and fallbacks (Chinese)](skills/front-taste-ref/references/tools.md)

## Example prompts

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
