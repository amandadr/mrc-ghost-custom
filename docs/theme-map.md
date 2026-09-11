# Theme map

> **Status: Living** — how this repo is laid out, and what Ghost will and will not load.

This is a **Ghost theme**. Ghost only mounts `.hbs` files at the **theme root** as templates, and `partials/**/*.hbs` as partials. Do not move live templates into subfolders.

## What Ghost loads

| Path | Role |
|------|------|
| `*.hbs` at repo root | Templates (routes, collections, `page-*`, `custom-*`) |
| `partials/` | Includes (`{{> "name"}}` or `{{> "legacy/name"}}`) |
| `assets/built/` | CSS/JS Ghost serves (`default.hbs`) |
| `package.json` | Theme name, `config.custom`, image sizes |

## What Ghost ignores (repo-only)

| Path | Role |
|------|------|
| `assets/css/`, `assets/js/` | Source; gulp compiles into `assets/built/` |
| `docs/` | Living ops docs + [archive](archive/README.md) |
| `docs-site/` | Public Docusaurus site (docs.mannyroy.com) |
| `data/ghost-import/` | Content import JSON and drafts |
| `assets/wireframes/` | Relume visual QA |
| `scripts/` | Local Ghost symlink helpers |
| `docs/archive/theme/` | Retired templates (not routable) |
| `docs/archive/perf/` | Lighthouse / PageSpeed dumps |

`yarn zip` excludes docs, data, docs-site, wireframes, and scripts so the Ghost.org upload is theme runtime only.

## Root templates (do not nest)

**Core:** `default`, `home`, `index`, `post`, `page`, `tag`, `author`, `error`, `error-404`

**Ghost Pages (`page-{slug}.hbs`):** about, services, contact, thanks, resources

**Labs routes / collections:** `who-i-help`, `services-*`, `case-studies`, `whitepapers`, `glossary`, `glossary-collection-core-web-vitals`, `custom-component-library`

**Post templates (`custom-*.hbs`):** case-study, full/narrow/no feature image

Production routes: [routes-glossary.yaml](routes-glossary.yaml).

## Partials

| Folder | Role |
|--------|------|
| `partials/` | Live layout, sections, audience, feed, icons |
| `partials/component-library/` | `/component-library/` chrome only |
| `partials/legacy/` | Superseded atoms, still demoed on the library |

Prefer `feature-item` and `process-step` on new pages. Do not add new call sites for `partials/legacy/`.

## CSS

CUBE layers are documented in [cube-css-structure.md](cube-css-structure.md). Entry points: `screen.css` (full), `screen-home.css`, `screen-about.css`, `screen-services.css`, `screen-cl.css` (library only).
