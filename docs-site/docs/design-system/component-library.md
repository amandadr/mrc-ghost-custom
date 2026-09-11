---
sidebar_position: 8
---

# Component library

The theme ships a **live component library** at **`/component-library/`** — a public-facing harness for testing partials and design tokens without Storybook.

## Purpose

- Render every marketing partial with **real CSS** (not screenshots)
- Exercise **edge-case fixtures**: long headlines, missing CTAs, one vs four items, adjacent repeats
- Catch layout regressions before assembling or redesigning pages
- Grow the system by adding new `cl-frame` demos, not one-off page CSS

## Access

**Route (recommended):** add to your routes YAML:

```yaml
/component-library/:
  template: custom-component-library
```

Included in `docs/routes-glossary.yaml` for production upload.

**Alternative:** create a Ghost Page with slug `component-library` and assign template **Component library** (`custom-component-library.hbs`).

The page sets `<meta name="robots" content="noindex, follow">` and is **not linked from primary navigation** by default.

## Files

| File | Role |
|------|------|
| `custom-component-library.hbs` | Main library page — demo sections |
| `partials/component-library/cl-frame-start.hbs` | Demo chrome open (title, status, partial path) |
| `partials/component-library/cl-frame-end.hbs` | Demo chrome close |
| `partials/component-library/cl-nav.hbs` | Sticky TOC |
| `assets/css/site/component-library.css` | Library-only chrome (frames, swatches, nav) |
| `partials/legacy/*.hbs` | Retired atoms; library fixtures only |

All live component visuals come from existing `site/*.css` and partials. Legacy card styles remain in `home-critical.css`, `services.css`, and `audience.css` so the library still renders those fixtures.

## What's on the page today

1. **Foundations** — colour swatches, type scale, spacing bars, section tones
2. **Buttons** — primary / secondary on light and dark
3. **Composition** — stack, cluster, grid
4. **Hero** — `partials/hero.hbs` (now shared with `home.hbs`)
5. **Service card, principle item** — `legacy` status; not on live pages (`partials/legacy/`)
6. **Service section, process-step**; common project card and engagement-way are legacy
7. **Two-column section**
8. **Audience atoms** — live: breadcrumb, fit card, challenge, related nav. Legacy: expectation, proof
9. **Edge cases** — repeated grids, back-to-back CTAs

## Adding a new component demo

1. Build or finish the partial under `partials/`.
2. In `custom-component-library.hbs`, wrap fixtures between frame partials:

```handlebars
{{> "component-library/cl-frame-start"
  id="cl-my-component"
  title="My component"
  status="draft"
  partial_name="my-partial"
  notes="What this tests."
}}
  {{> "my-partial" title="Short fixture" …}}
{{> "component-library/cl-frame-end"}}
```

3. Add a TOC link in `partials/component-library/cl-nav.hbs`.
4. Run `npx gulp build` and open `/component-library/#cl-my-component`.

## Status labels

| Status | Meaning |
|--------|---------|
| `stable` | Used on production pages; API unlikely to change |
| `draft` | In progress or fixture-only |
| `legacy` | Not used on live pages; kept for visual QA |

## Workflow (from wireframe Phase 9)

Before assembling a new page template:

1. Add or update the partial
2. Add **short + long + missing** variants on the library page
3. Fix the component (or tokens), not page-specific overrides
4. Only then wire the partial into the real page template

If you find yourself writing `.page-foo .something { … }` repeatedly, the component is not abstract enough yet — extend the library first.
