---
sidebar_position: 2
---

# Colours

The theme uses an **accessible, brand-matched palette** with clear roles. All pairings are chosen to meet WCAG AA where text or UI is involved. Tokens live in `assets/css/general/brand.css`.

## Accessibility targets

- **Normal text:** ≥ 4.5:1 contrast (WCAG SC 1.4.3)
- **Large text (≥18pt or ≥14pt bold):** ≥ 3:1
- **UI components / focus indicators:** ≥ 3:1 against adjacent colours (SC 1.4.11)

## Neutrals (primary use)

| Role | Token | Hex | Usage |
|------|--------|-----|--------|
| **Cream (base background)** | `--mrc-bg` | `#F0E8E0` | Default page background |
| **Paper (alt background)** | `--mrc-surface` | `#FAF6F0` | Cards, alternate sections |
| **Ink (primary text)** | `--mrc-text` | `#2A261A` | Body text |
| **Ink 2 (secondary text)** | `--mrc-text-muted` | `#4A4322` | Metadata, secondary copy |

## Brand accents

| Role | Token | Hex | Usage |
|------|--------|-----|--------|
| **Mustard** | `--mrc-mustard` | `#E8C868` | Highlights, badges, accents only — not body text |
| **Olive** | `--mrc-olive` | `#706830` | Header, dark sections, brand anchor |
| **Maroon** | `--mrc-maroon` | `#804050` | Links, emphasis, primary CTA |

## Supporting neutrals (borders, muted UI)

| Role | Token | Hex / value | Usage |
|------|--------|-------------|--------|
| **Light gray** | `--light-gray-color` (also `--border-color`) | `#e8e0d8` | Default borders, inputs |
| **Mid gray** | `--mid-gray-color` (also `--border-color-strong`) | `#8a8578` | Hover borders, muted labels |
| **Subtle ink** | `--border-color-subtle` | `rgb(42 38 26 / 14%)` | Soft card edges on cream |
| **On dark** | `--border-color-on-dark` | `rgb(250 246 240 / 18%)` | Edges on Olive / Maroon |

## Interactive

| Token | Value | Usage |
|-------|--------|--------|
| `--mrc-link` | `var(--mrc-maroon)` | Links on light backgrounds |
| `--mrc-focus` | `var(--mrc-maroon)` | Focus ring colour; set to `--mrc-surface` on Olive/Maroon sections |

## Safe pairings (AA normal text)

- **Ink on Cream** → 12.46:1
- **Ink on Mustard** → 9.27:1
- **Maroon on Cream** → 6.26:1
- **Paper on Maroon** → 7.05:1
- **Paper on Olive** → 5.26:1

**Avoid for normal text:** Mustard on Cream (1.34:1); Maroon on Olive (1.34:1). Use these for decoration, large text, or non-text only.

## Usage rules

- **Backgrounds:** Default = Cream; cards/alt sections = Paper; strong sections = Olive or Maroon (sparingly).
- **Text:** Body = Ink; secondary = Ink 2; links on light = Maroon. Never use Mustard for body text.
- **Buttons:** Primary = Maroon bg + Paper text; secondary = Olive bg + Paper text; highlight = Mustard bg + Ink text.
- **Focus rings:** Use a colour that meets 3:1 against the background (Maroon on Cream/Paper/Mustard; Paper on Olive/Maroon). Width/offset tokens: `--focus-ring-width`, `--focus-ring-offset`, `--focus-ring-style` in `typography.css`.

## Section rhythm (homepage and key pages)

Alternate backgrounds for clear hierarchy:

- **Cream** → **Paper** → **Olive** → **Cream** → **Maroon** (CTA)

Avoid stacking multiple Cream sections in a row. Use the section utility classes consistently.

## CSS tokens (theme-ready)

```css
:root {
  --mrc-bg: #F0E8E0;
  --mrc-surface: #FAF6F0;
  --mrc-text: #2A261A;
  --mrc-text-muted: #4A4322;
  --mrc-mustard: #E8C868;
  --mrc-olive: #706830;
  --mrc-maroon: #804050;
  --mrc-link: var(--mrc-maroon);
  --mrc-focus: var(--mrc-maroon); /* use --mrc-surface on Olive/Maroon sections */
}
```

Use the variables, not raw hex, so future tweaks stay consistent.
