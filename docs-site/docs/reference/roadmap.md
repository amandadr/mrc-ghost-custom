---
sidebar_position: 1
---

# Roadmap and future improvements

This page summarizes **shipped work**, **active priorities**, and **v2 ideas**. Update it when work lands so it stays honest.

## Shipped (do not re-plan as “open”)

| Area | Notes |
| --- | --- |
| **Docs system** | Docusaurus at docs.mannyroy.com (`docs-site/`) |
| **Restrained JS** | No jQuery/Owl in the theme bundle; CSS scroll-snap + vanilla `assets/js/lib/*` |
| **Relume-era marketing pages** | Home, services, who-i-help, audiences, resources, component library |
| **DocsGPT / Botty** | Documented under AI assistant; ops runbooks exist |

## Active / next

| Priority | Area | Rationale |
| --- | --- | --- |
| 1 | **Docs taxonomy + theme modularism** | Living vs archive docs; section-header API; audience shells; a11y landmarks |
| 2 | **Font/asset optimization** | Prefer self-hosted woff2 where practical; keep LCP in mind |
| 3 | **Metadata and images** | Lazy load below-the-fold; consistent alt/srcset |
| 4 | **Release workflow and observability** | Keep deploy and monitoring docs accurate |
| 5 | **AI assistant enhancements** | Broader content surface once docs stay current |

## Future / v2 ideas

- **Critical CSS** — Inline or separate above-the-fold CSS for home and post to improve LCP; document before/after.
- **Feed card migration** — Finish moving archives onto `post-card` / `case-study-row`.
- **Self-hosted tech icons** — Replace Simple Icons CDN in `tech-card` when ready.
- **Asset budget** — Define and enforce max CSS/JS size (e.g. in CI) so regressions are caught.

Update this list as items are completed or deprioritized so the roadmap stays accurate.

## Related

- [Introduction](/docs/intro)
- [Deployment](/docs/operations/deployment)
- [Performance strategy](/docs/performance/strategy)
- [AI assistant design](/docs/ai-assistant/design)
