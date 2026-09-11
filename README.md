# Manny Roy

Custom Ghost theme foundation for **Manny Roy Consulting**. Built for clarity, accessibility, and sustainable technical storytelling — systems-focused and reader-friendly.

Originally forked from [Ghost Dawn](https://github.com/TryGhost/Dawn); customized as the official theme foundation for this site.

---

## Quick start

1. In Ghost Admin go to **Settings → Design**.
2. Upload the theme zip (see **Build for production** below) or use the local development setup.

---

## Development

Built with Gulp and PostCSS. This project uses **Yarn** only (do not use `npm install` here; keep one lockfile to avoid resolution conflicts). From the theme root:

```bash
yarn
yarn dev
```

Edit files under `assets/css/`; they compile to `assets/built/`. Handlebars (`.hbs`) and JS changes are picked up on save when using local Ghost.

### Build for production

```bash
yarn zip
```

This creates `dist/manny-roy.zip`, which you can upload in Ghost Admin → Design. The zip step shells out to the system `zip` command so binary assets (images, etc.) stay intact. IBM Plex is loaded from Google Fonts in `default.hbs` so font files are not served from the theme (avoids OTS errors if a host/CDN mishandles theme assets).

### Validate theme

```bash
yarn test
```

Runs [GScan](https://gscan.ghost.org/) for Ghost compatibility.

---

## Local Ghost development

To run Ghost locally and develop with live reload (no zip/upload each time), use a sibling Ghost install and symlink this repo into its `content/themes/` folder. Full steps: **[docs/local-ghost-setup.md](docs/local-ghost-setup.md)**.

After Ghost is installed:

```bash
./scripts/link-theme-to-ghost.sh ../ghost-local
```

Then in Ghost Admin → Design, activate the theme **manny-roy**.

---

## Site structure: homepage + /blog/ archive

The theme supports a **custom homepage** at `/` (using `home.hbs`) and a **blog archive** at `/blog/` (post listing, cover, and featured posts). The homepage stays as-is; all posts live at `/blog/` and `/blog/{slug}/`.

To enable this structure (and audiences, resources, glossary, component library):

1. In Ghost Admin go to **Settings → Labs**.
2. Under **Routes**, upload or paste the contents of **[docs/routes-glossary.yaml](docs/routes-glossary.yaml)** (back up your current routes first if you have custom ones).
3. Add **Blog** (or “Writing”) to your nav in **Settings → Design → Navigation** pointing to `/blog/`.

Result: `/` = custom home, `/blog/` = post listing, `/blog/{slug}/` = posts, plus audience and resource routes from the glossary file.

**If the blog page doesn’t work on production (404 or wrong page):** Apply the same routes in **production** Ghost. In the live site’s Ghost Admin go to **Settings → Labs → Routes**, upload or paste **[docs/routes-glossary.yaml](docs/routes-glossary.yaml)** (back up current routes first), then save. Ensure **Navigation** includes a link to `/blog/`. See **[docs/troubleshooting-blog.md](docs/troubleshooting-blog.md)** for more.

---

## Project docs

- **[docs/README.md](docs/README.md)** — source-of-truth hierarchy and living docs index
- **[docs.mannyroy.com](https://docs.mannyroy.com)** — public docs site (`docs-site/`)
- [Brand voice](docs/brand-voice.md) — Tone, personality, and copy guidelines
- [Local Ghost setup](docs/local-ghost-setup.md)
- [Ghost.org setup](docs/ghost-org-setup.md)
- [Routes (production)](docs/routes-glossary.yaml) (Settings → Labs → Routes)
- [Archived plans and SOPs](docs/archive/README.md)

---

## License

MIT. See [LICENSE](LICENSE). Based on Dawn by Ghost Foundation; customizations © Amanda Roy.
