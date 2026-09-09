---
sidebar_position: 9
---

# Component API glossary

Shared conventions for marketing partials. Prefer these names so call sites stay consistent and landmarks stay correct.

## Landmark contract

1. Wrap a band in `<section … aria-labelledby="some-id">`.
2. Pass the same id into `section-header` (or the section’s own `h1`/`h2`) as `heading_id`.
3. Do not invent `aria-labelledby` ids that no heading owns.

```handlebars
<section class="mrc-section section-light gh-outer" aria-labelledby="mrc-example">
  <div class="gh-inner">
    {{> "section-header"
      heading_id="mrc-example"
      heading="Example"
      intro="Supporting copy."
    }}
  </div>
</section>
```

## Param names

| Prefer | Avoid | Notes |
|--------|--------|-------|
| `href` | `link_url` | Primary link target |
| `heading` / `headline` | Mixed synonyms per partial | Follow the partial’s documented params |
| `heading_id` | — | Required when the parent uses `aria-labelledby` |
| `intro` / `body` / `subtext` | — | Follow the partial; don’t invent a fourth synonym at the call site |
| `doc_href` / `doc_url` | `url` on Ghost cards | Ghost resolves bare `url` to the current page |

## Media contract

Photo-capable components use the shared media-frame params:

- `img` / `img_alt` — real image
- `media_placeholder` — bordered empty frame for the component library only
- No image → text-only layout must look intentional (collapse; don’t leave a hole)

See `partials/media-frame.hbs` and `partials/hero.hbs`.

## Heading levels

| Partial | Default | Override |
|---------|---------|----------|
| `section-header` | `h2` | — |
| `hero` | `h1` | `heading_id` only |
| `post-card` | `h3` | `heading` param when nesting requires it |
| `tech-card` | Prefer `h3` or styled `p` under a section `h2` | Avoid skipping levels (`h2` → `h4`) |
| `feature-item` | Title markup as documented in the partial | Keep consistent within a grid |

## Progressive enhancement

- **Tabs** — `tab-panel` + `assets/js/lib/tabs.js` (stacked headings without JS)
- **FAQ** — `faq-item` native `<details>`
- **Carousel** — CSS scroll-snap; `carousel.js` only shows prev/next when overflowing

## Live demos

Exercise APIs on `/component-library/` before assembling pages. See [Component library](./component-library).
