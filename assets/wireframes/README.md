# Relume wireframes (visual QA only)

This folder is **design reference**, not a runtime source of truth.

| Artifact | Use |
|----------|-----|
| `* • Desktop.png` / `* • Mobile.png` | Visual QA for layout, proportion, and density |
| `*.html` | Relume Tailwind DOM exports — layout rhythm only; do not copy classes, colours, or Relume’s component library one-for-one |
| `raw copy/*.md` | Draft text extracts; placeholder and draft copy may remain. Live copy lives in theme `.hbs` files (and drafts in `docs/services-pages.md`) |
| `PEI & Tourism Content Strategy.md` | Content strategy notes + Relume inventory; strategy may still inform copy, but the Relume mother-list is a past-build artifact |

**Not SoT for:** colour, typography, production markup, or component APIs. Those live in theme CSS/partials and `docs-site/docs/design-system/`.

Wireframes are excluded from the theme zip (`yarn zip`) so they do not ship with Ghost uploads.
