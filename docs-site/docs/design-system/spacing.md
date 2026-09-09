---
sidebar_position: 4
---

# Spacing

Spacing uses a **single scale** (no arbitrary values). All margins, padding, and gaps should use these tokens so the layout stays consistent and hierarchy is clear. Defined in `assets/css/general/typography.css`.

## Scale (SOP: 4, 8, 12, 16, 24, 32, 48, 64, 96px)

| Token | Value | Pixels |
|-------|--------|--------|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-5` | 1.5rem | 24px |
| `--space-6` | 2rem | 32px |
| `--space-7` | 3rem | 48px |
| `--space-8` | 4rem | 64px |
| `--space-9` | 6rem | 96px |

Semantic aliases: `--mrc-space-xs` (space-1) through `--mrc-space-2xl` (space-8).

## Containers & gutters

| Token | Value | Purpose |
|-------|--------|---------|
| `--mrc-container-wide` | 1100px | Page / layout max width (`.mrc-container`) |
| `--mrc-container-width` | 72ch | Alias of prose width |
| `--mrc-content-width` | 72ch | Long-form reading width |
| `--mrc-page-gutter` | `clamp(1.75rem, 5vw, 2.5rem)` | Horizontal page padding |

## Section padding

Section padding is **block-only** (vertical); horizontal spacing comes from the container gutter.

| Token | Desktop | Mobile (&lt;768px) | Typical use |
|-------|---------|-------------------|-------------|
| `--mrc-section-padding-block` | 64px (`--space-8`) | 48px | Standard sections |
| `--mrc-section-padding-tight-block` | 48px (`--space-7`) | 32px | Tighter sections |
| `--mrc-section-padding-hero-block` | 96px (`--space-9`) | 48px | Hero / anchor sections |

## Borders, radius, motion, focus

| Group | Tokens |
|-------|--------|
| **Widths** | `--border-width` 1px · `--border-width-thick` 2px · `--border-width-accent` 4px |
| **Style / colour** | `--border-style` · `--border-color` · `--border-color-strong` · `--border-color-subtle` · `--border-color-on-dark` · `--border-color-accent` |
| **Radius** | `--radius-s` 3px · `--radius-m` 5px · `--radius-l` 8px · `--radius-full` 999px |
| **Aspect ratios** | `--aspect-square` · `--aspect-photo` · `--aspect-landscape` · `--aspect-portrait` · `--aspect-wide` |
| **Duration** | `--duration-fast` 150ms · `--duration-base` 200ms · `--duration-slow` 300ms · `--ease-standard` |
| **Focus ring** | `--focus-ring-width` 2px · `--focus-ring-offset` 2px · `--focus-ring-style` solid (colour: `--mrc-focus`) |

## Vertical rhythm

- **Within a section:** Smaller gaps between related elements; larger gaps between groups.
- **Between sections:** Section padding should be at least 1.5–2× internal block spacing.
- **Headings:** Space above heading > space below; heading ties to the content beneath. Theme uses `--mrc-heading-margin-below` and `--mrc-paragraph-margin` for this.

## Anti-patterns

- Don’t use arbitrary values (e.g. 22px, 37px); use the scale.
- Don’t vary section padding randomly by page; keep it consistent.
- Don’t fix layout by shrinking text first; fix layout constraints first.

If spacing feels wrong, adjust the system (tokens or composition) rather than one-off margins.
