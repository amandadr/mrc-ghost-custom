# Theme and CMS docs

This folder holds **repo-local** documentation for the Ghost theme. Public documentation lives at [docs.mannyroy.com](https://docs.mannyroy.com) (`docs-site/`).

## Source of truth (priority order)

1. **Runtime** — templates (`*.hbs`), partials, CSS, JS, and `package.json` `config.custom`
2. **CMS ops** — [routes-glossary.yaml](routes-glossary.yaml) and [ghost-org-setup.md](ghost-org-setup.md)
3. **Public docs** — `docs-site/docs/` (update when partials, routes, or theme settings change)
4. **Content drafts** — [services-pages.md](services-pages.md) and [brand-voice.md](brand-voice.md) until copy fully lives in `.hbs`
5. **Archive** — [archive/](archive/) (frozen; not maintained)
6. **Wireframes** — `assets/wireframes/` are Relume visual QA only, not copy or colour SoT

## Status banners

Living docs in this folder start with one of:

- **Living** — keep in sync with the theme
- **Setup** — current for one-time / infrequent ops; update when the procedure changes
- **See archive** — pointer only (prefer archive for historical plans)

## Living and setup docs

| File | Status | Role |
|------|--------|------|
| [theme-map.md](theme-map.md) | Living | Repo layout, what Ghost loads, what stays in git only |
| [routes-glossary.yaml](routes-glossary.yaml) | Living | Production Labs routes (upload this file) |
| [ghost-org-setup.md](ghost-org-setup.md) | Setup | Production Ghost.org checklist |
| [local-ghost-setup.md](local-ghost-setup.md) | Setup | Local Ghost + theme symlink |
| [troubleshooting-blog.md](troubleshooting-blog.md) | Setup | `/blog/` 404 / routes checklist |
| [services-pages.md](services-pages.md) | Living | Audience page content bible |
| [brand-voice.md](brand-voice.md) | Living | Tone for site + docs-site |
| [cube-css-structure.md](cube-css-structure.md) | Living | CUBE layer map next to `assets/css/screen.css` |
| [page-copy-for-editor.md](page-copy-for-editor.md) | Living | Where to edit section-based page copy |
| [plan-page-content-editing.md](plan-page-content-editing.md) | Living | Why copy lives in templates (20-setting limit) |

## Related

- Public design system and templates: [docs.mannyroy.com](https://docs.mannyroy.com)
- Historical plans and SOPs: [archive/README.md](archive/README.md)
- Relume wireframes: [../assets/wireframes/README.md](../assets/wireframes/README.md)
