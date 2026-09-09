# CUBE CSS Structure (SOP Implementation)

> **Status: Living** — layer map next to `assets/css/screen.css`. Public expansion: docs-site design system.

This theme follows the CUBE CSS methodology and the responsiveness SOP. Quick reference:

## Layers (Order of Application)

1. **Global** — base elements (body, headings, p, a, form controls) in `typography.css`, `brand.css`, `basics.css`
2. **Composition** — layout primitives in `general/composition.css`
3. **Utilities** — single-purpose helpers in `misc/utils.css`
4. **Blocks** — components (nav, hero, card, form, footer) in `site/*.css`
5. **Exceptions** — one-off overrides (avoid; document; keep local)

## Design Tokens (`typography.css` + `brand.css`)

### Colour (`brand.css`)

- Neutrals: `--mrc-bg`, `--mrc-surface`, `--mrc-text`, `--mrc-text-muted`
- Accents: `--mrc-mustard`, `--mrc-olive`, `--mrc-maroon`
- Interactive: `--mrc-link`, `--mrc-focus`
- Type families: `--font-sans`, `--font-serif`, `--font-mono`

### Type & layout (`typography.css`)

- **Body:** `--mrc-body-size` 16px, `--mrc-body-line` 1.72, `--mrc-body-weight` 400
- **Scale:** `--mrc-h1-size`, `--mrc-h2-size`, `--mrc-h3-size`, `--mrc-lede-size`, `--mrc-small-size`
- **Prose width:** `--mrc-content-width` 72ch
- **Breakpoints:** `--bp-sm` 480, `--bp-md` 768, `--bp-lg` 1024, `--bp-xl` 1280
- **Spacing:** `--space-1` through `--space-9` (4, 8, 12, 16, 24, 32, 48, 64, 96px)
- **Section padding:** `--mrc-section-padding-block` (64px), `--mrc-section-padding-tight-block` (48px), `--mrc-section-padding-hero-block` (96px); scaled down under 768px
- **Containers:** `--mrc-container-wide` 1100px, `--mrc-page-gutter` (fluid clamp)
- **Borders:** `--border-width` / `--border-width-thick` / `--border-width-accent`; `--border-style`; `--border-color*`
- **Radius:** `--radius-s` 3px, `--radius-m` 5px, `--radius-l` 8px, `--radius-full` 999px
- **Aspect ratios:** `--aspect-square`, `--aspect-photo`, `--aspect-landscape`, `--aspect-portrait`, `--aspect-wide`
- **Motion:** `--duration-fast` 150ms, `--duration-base` 200ms, `--duration-slow` 300ms, `--ease-standard`
- **Focus ring:** `--focus-ring-width`, `--focus-ring-offset`, `--focus-ring-style` (+ `--mrc-focus` colour)
- **Z-index:** `--z-base`, `--z-dropdown`, `--z-sticky`, `--z-modal`

## Composition Primitives (`general/composition.css`)

| Class | Usage |
|-------|--------|
| `.mrc-container` | Centers content, max-width, gutters |
| `.mrc-stack` | Vertical rhythm; `.mrc-stack--s/m/l/xl/section` for gap size |
| `.mrc-cluster` | Horizontal wrapping row; `.mrc-cluster--between/end/center` |
| `.mrc-grid` | Responsive columns; `.mrc-grid--2/3/4` or `.mrc-grid--auto` |
| `.mrc-split` | Two-column; `.mrc-split--60-40`, `--50-50`, `--40-60`; collapses at 768px |
| `.mrc-switcher` | Multi-column → single based on space; `.mrc-switcher--2/3/4` |

## Utilities (`misc/utils.css`)

- `.u-visually-hidden` — screen-reader only
- `.u-text-center` / `.u-text-left` / `.u-text-right`

## Accessibility

- `prefers-reduced-motion`: sitewide shorten/disable in `animations.css` (all transitions/animations, not only `.animate__*`)
- Focus rings: `:focus-visible` using focus-ring tokens + `--mrc-focus` (`brand.css` and components)
- Tap targets: min 44px for interactive elements (SOP guardrail)

## Breakpoint Strategy

- Mobile-first; breakpoints only when layout breaks
- Use `clamp()` for fluid type/spacing instead of breakpoints
- Standard breakpoints: 480, 768, 1024, 1280 (via `--bp-*`)
