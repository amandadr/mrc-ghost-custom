---
sidebar_position: 3
---

# Typography

The theme uses **IBM Plex Sans** for body and **IBM Plex Serif** for headings. Sizes and spacing follow the design SOP and are implemented via CSS custom properties in `typography.css` and `brand.css`.

## Fonts

| Role | Token | Stack |
|------|--------|--------|
| **Body / UI** | `--font-sans` | IBM Plex Sans, system sans fallbacks |
| **Headings** | `--font-serif` | IBM Plex Serif, Georgia / Times fallbacks |
| **Code** | `--font-mono` | Menlo, Consolas, Monaco, Liberation Mono |

- Body weight: **400**; emphasis and headings: **600** (prefer 600 over 700)
- Headings use serif + weight 600 + line-height **1.2**

## Rules

- Minimum **16px** body text (default is 16px; never smaller than 16px on small screens)
- Line-height **1.72** for body
- Max line length **72ch** for long-form content
- Links are underlined (not colour alone) for accessibility
- Form inputs are at least **16px** to avoid iOS zoom on focus; from 768px up they use the body size

## Design tokens (`typography.css`)

| Token | Value | Purpose |
|-------|--------|---------|
| `--mrc-body-size` | 16px | Base font size |
| `--mrc-body-line` | 1.72 | Body line-height |
| `--mrc-body-weight` | 400 | Body weight |
| `--mrc-content-width` | 72ch | Max readable (prose) width |
| `--mrc-h1-size` | clamp(1.85rem, 4vw + 1rem, 2.75rem) | Fluid H1 |
| `--mrc-h2-size` | clamp(1.75rem, 2.8vw + 0.9rem, 2.5rem) | Fluid H2 |
| `--mrc-h3-size` | clamp(1.2rem, 1.5vw + 0.5rem, 1.35rem) | Fluid H3 |
| `--mrc-lede-size` | 1.125rem | Intro / lede paragraph |
| `--mrc-small-size` | 0.875rem (14px) | Meta, captions — accessibility floor for small text |
| `--mrc-heading-margin-below` | `var(--space-4)` | Space under headings |
| `--mrc-paragraph-margin` | 1.35em | Space after paragraphs |

`h4`–`h6` use **1.1rem** (no separate tokens).

## Content width

Long-form content uses `.gh-content` or `.mrc-content-width` with `max-width: min(var(--mrc-content-width), 100%)` so line length stays readable and content doesn’t overflow on small viewports.

Page / layout max width is separate — see [Spacing](./spacing) (`--mrc-container-wide`, `--mrc-page-gutter`).
