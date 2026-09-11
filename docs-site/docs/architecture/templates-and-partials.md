---
sidebar_position: 3
---

# Templates and partials

Ghost chooses a **root template** based on route and context. Each template can include **partials** (reusable blocks). This page lists what exists and where it’s used.

When you **rename a partial or change a Labs route**, update this page and the repo `docs/ghost-org-setup.md` in the same change.

## Root templates (when Ghost uses them)

| Template | When used |
|----------|-----------|
| `default.hbs` | Base layout only; not used alone. All other templates extend it with `{{!< default}}`. |
| `home.hbs` | When the site’s “homepage” is set to a custom page (e.g. “Home” page). |
| `index.hbs` | Blog/archive (e.g. `/blog/` via Labs routes). |
| `post.hbs` | Single post. |
| `page.hbs` | Generic page (no custom template selected). |
| `author.hbs` | Author archive. |
| `tag.hbs` | Tag archive. |
| `page-about.hbs` | Page with template “About”. |
| `page-services.hbs` | Page with template “Services”. |
| `page-contact.hbs` | Page with template “Contact”. |
| `page-resources.hbs` | Page with template “Resources” (or slug `resources`). |
| `page-thanks.hbs` | Thanks page (e.g. after form submit). |
| `who-i-help.hbs` | Labs route `/who-i-help/` (theme HBS; no Admin template dropdown). |
| `services-small-business.hbs` | Labs route `/services/small-businesses/`. |
| `services-tourism-hospitality.hbs` | Labs route `/services/tourism-hospitality/`. |
| `services-organizations-institutions.hbs` | Labs route `/services/organizations-institutions/`. |
| `services-arts-culture-community.hbs` | Labs route `/services/arts-culture-community/`. |
| `services-agencies-development-teams.hbs` | Labs route `/services/agencies-development-teams/`. |
| `case-studies.hbs` / `whitepapers.hbs` | Collection templates via Labs routes. |
| `glossary.hbs` / `glossary-collection*.hbs` | Glossary index and collection pages. |
| `custom-component-library.hbs` | Labs route `/component-library/` (dev harness, `noindex`). |
| `custom-case-study.hbs` | Post with template “Case study”. |
| `custom-full-feature-image.hbs` | Post with full-width feature image. |
| `custom-narrow-feature-image.hbs` | Post with narrow feature image. |
| `custom-no-feature-image.hbs` | Post with no feature image. |

Ghost matches custom **page** templates by template name in Admin. Audience and who-i-help routes are **Labs routes → theme HBS** (see repo `docs/routes-glossary.yaml`).

## Partials (used in templates)

### Layout / chrome

| Partial | Purpose | Used in |
|---------|---------|--------|
| `navigation` | Primary nav + services mega-menu | `default.hbs` |
| `footer` | Site footer | `default.hbs` |
| `cover` | Blog cover / member CTA | `default.hbs` |
| `featured-posts` | Featured posts on blog index | `default.hbs` |
| `ga4` | Analytics loader | `default.hbs` |
| `font-faces` | Inline IBM Plex `@font-face` (`{{asset}}` URLs) | `default.hbs` |
| `css-async-full` | Non-blocking `screen.css` after a critical sheet | Home and About |
| `css-async-idle` | Full `screen.css` after load (no preload-scanner fetch) | Services |
| `screen-services-inline` | Gulp-inlined Services critical CSS | `page-services.hbs` |
| `site-head` | `ghost_head` with Portal/search deferred | `default.hbs` |
| `pswp` | PhotoSwipe lightbox | `scripts-full` (posts + opted-in pages) |
| `scripts-full` | Full JS + PhotoSwipe markup | `default.hbs` (posts); `contentFor "scripts"` opt-in |

### Section composers

| Partial | Purpose | Used in |
|---------|---------|--------|
| `hero` | Marketing hero (optional media) | `home.hbs`, `page-services.hbs`, … |
| `section-header` | Eyebrow + h2 + intro + optional actions | Most marketing sections |
| `cta-section` | Full-width CTA band | Marketing pages |
| `two-column-section` | Two-column content + optional media | `page-about.hbs`, … |
| `anchor-section` | Dark statement band | Selected pages |
| `service-section` | Capability block with include list | `page-services.hbs` |

### Atoms

| Partial | Purpose | Used in |
|---------|---------|--------|
| `feature-item` | Icon + title + body cell | Home, audiences, services |
| `faq-item` | Native `<details>` FAQ row | Home, services |
| `tab-panel` | Progressive-enhancement tab panel | Home, who-i-help, services |
| `process-step` | Process grid step | Audiences, services |
| `media-frame` | Shared photo ⇄ text-only media contract | Hero, two-column, … |
| `icon` + `icons/*` | Line SVG icons (gscan-safe dispatch) | Feature items, challenges, … |
| `tech-card` | Tech stack chip in carousel | `tech-carousel` |
| `tech-carousel` | Shared toolkit carousel | Home, services, about, agencies |
| `audience-hero` | Audience split hero + fit-card | `services-*.hbs` |
| `feed-work` / `feed-resources` | Shared case-study / resources bands | Marketing pages |
| `audience-links` | Audience URL list (nav + footer) | `navigation`, `footer` |

### Audience

| Partial | Purpose | Used in |
|---------|---------|--------|
| `audience-breadcrumb` | Breadcrumb trail | `services-*.hbs` |
| `audience-fit-card` | “Sound familiar?” list | Audience heroes |
| `audience-challenge` | Challenge grid cell | Audience pages |
| `audience-expectation` | Outcome / expectation band | Some audiences |
| `audience-proof-card` | Proof card | Some audiences |
| `audience-related-nav` | Related audience links | Audience pages |

### Feed / article

| Partial | Purpose | Used in |
|---------|---------|--------|
| `post-card` | Resource / blog card | Resources, audiences |
| `case-study-row` | Case study list row | Case studies, audiences |
| `post-toc` | Nested table of contents (h2 sections, h3/h4 subsections) | Long-form posts |
| `loop` | Legacy feed card | `index.hbs`, archives |
| `content` | Post/page body | `post.hbs`, `page.hbs`, customs |
| `post-case-study` / `post-whitepaper` | Custom post bodies | Custom templates |

### Component library chrome

| Partial | Purpose |
|---------|---------|
| `component-library/cl-frame-start` / `cl-frame-end` | Demo frame |
| `component-library/cl-nav` | Sticky TOC |

Legacy atoms still in the tree for the library or older pages: `service-card`, `principle-item`, `common-project-card`, `engagement-way`. Prefer `feature-item` / `process-step` on new live pages.

For param names and landmark contracts, see [Component API glossary](/docs/design-system/component-api). For per-template behaviour and theme settings, see [Templates overview](/docs/templates/overview).
