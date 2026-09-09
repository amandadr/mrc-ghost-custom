---
sidebar_position: 7
---

# Accessibility

The theme builds in accessibility by default: contrast, focus, motion, and tap targets are part of the design system.

## Colour contrast

- All text/UI pairings meet **WCAG AA** where required (see [Colours](./colours)).
- Don’t use colour alone to convey meaning; use text, icons, or pattern as well.
- Focus rings use a colour that meets **3:1** against the background (e.g. Maroon on light, Paper on dark sections).

## Focus states

Focus ring geometry is tokenised in `typography.css`; colour is `--mrc-focus` in `brand.css`.

| Token | Value |
|-------|--------|
| `--focus-ring-width` | 2px |
| `--focus-ring-offset` | 2px |
| `--focus-ring-style` | solid |
| `--mrc-focus` | Maroon on light backgrounds; Paper on Olive/Maroon sections |

Interactive elements use `:focus-visible` with these tokens (see `brand.css`, header, forms, CTAs). Never remove focus styles without replacing them with an equally visible treatment.

## Reduced motion

`assets/css/misc/animations.css` applies a **sitewide** `prefers-reduced-motion: reduce` policy:

- Animation and transition durations collapse to ~0ms
- Animation iteration count is forced to 1
- `scroll-behavior` becomes `auto`

When the user prefers reduced motion, UI still changes state (colour, visibility) but without tweened motion. Use duration tokens (`--duration-fast` / `--base` / `--slow`) for new transitions so the global reduce rule covers them.

## Tap targets

Interactive elements (buttons, links, form controls) should have a minimum **44px** tap target (SOP guardrail). Ensure adequate spacing between clickable elements on mobile so taps are accurate.

## Typography and zoom

- Minimum **16px** body text; content remains readable at **200% zoom**.
- Line length is constrained (**72ch**) so text doesn’t stretch across wide viewports.
- Form inputs are at least 16px to avoid iOS zoom on focus.

## Semantic HTML and ARIA

- Use semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) so structure is clear to assistive tech.
- Add ARIA only when needed (e.g. live regions, expanded/collapsed for menus). Don’t overuse ARIA where native HTML is sufficient.

## Accessibility checklist (quick verification)

- **Keyboard navigation:** Use `Tab`/`Shift+Tab` and confirm the focus ring is visible on the navbar links and the homepage hero CTA.
- **Focus order:** The tab sequence should follow reading order (navbar first, then main content, then footer) without “focus traps”.
- **Reduced motion:** Verify animations respect `prefers-reduced-motion` (no unexpected motion on load).
- **Contrast:** Ensure text and interactive controls maintain readable contrast in both light and dark sections (see [Colours](./colours)).
- **Tap targets:** On mobile widths, check that primary buttons and links are at least ~44px and that adjacent actions don’t overlap.
