---
sidebar_position: 2
---

# Scripts and assets

This page describes how the theme loads JavaScript and manages the critical path so the site stays fast and non-blocking.

## Script loading

- **Lite script (default):** `default.hbs` loads `{{asset "built/main-lite.min.js"}}` with **defer** on marketing pages, home, and collections (burger, dropdown, pagination, tabs, carousel — no PhotoSwipe).
- **Full script:** Posts always load `main.min.js` (+ PhotoSwipe markup). Rare KG content pages opt in with `{{#contentFor "scripts"}}{{> "scripts-full"}}{{/contentFor}}` (`page.hbs`, `page-glossary.hbs`).
- **No inline blocking JS:** Critical behaviour (e.g. burger menu) should work with DOM-ready logic that is compatible with deferred execution.
- **Ghost injection:** `{{ghost_foot}}` is output after the theme script so Ghost can inject its own assets (e.g. member scripts) without blocking our bundle.

## Build and wiring snippets (for fast reproduction)

### Theme template: load the built assets (`default.hbs`)

```text
<link rel="stylesheet" href="{{asset "built/screen.css"}}">
...
{{!-- posts / opted-in pages: main.min.js + pswp; everyone else: main-lite.min.js --}}
<script src="{{asset "built/main-lite.min.js"}}" defer></script>
```

### Theme build: CSS pipeline (`gulpfile.js`)

```js
function css(done) {
    pump([
        src('assets/css/screen.css', {sourcemaps: true}),
        postcss([
            easyimport,
            autoprefixer(),
            cssnano()
        ]),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}
```

Home, About, and Services critical CSS use `shared-home.css` (no PhotoSwipe). About first paint is `built/screen-about.css`; Services is `built/screen-services.css`. Component-library-only styles ship as `built/screen-cl.css`.
### Theme config: image sizes (`package.json`)

```json
"image_sizes": {
  "xs": { "width": 150 }
}
```

## What the theme JS does

The concatenated and minified bundles in `assets/built/main.min.js` and `main-lite.min.js` are built from Ghost shared assets, selected `assets/js/lib/*.js`, and `assets/js/main.js` (Gulp: concat + uglify). They include:

- **Burger menu** — Toggle mobile navigation (`ghost-main-lite.js` / shared).
- **Tabs / carousel** — Progressive enhancement in `assets/js/lib/tabs.js` and `carousel.js` (both bundles). `toc.js` ships in the **full** bundle only.
- **PhotoSwipe / reframe / lightbox** — Full bundle only (posts and opted-in KG pages).
- **Theme behaviours** — Analytics hooks, services mega-menu, contact `?audience=` prefill, PDF viewer upgrade (`main.js`).

jQuery, Owl Carousel, and unused `imagesloaded` are **not** part of the current theme bundle.

## Critical path (above-the-fold)

- **Home:** `built/screen-home.css` (blocking) + async `built/screen.css`. Home critical omits PhotoSwipe and blog chrome via `shared-home.css`, and includes tabs/carousel for first paint.
- **About:** `built/screen-about.css` (blocking) + async `built/screen.css`. Header, hero, and the two-column intro (LCP) only.
- **Services:** Inlined `screen-services.css` (header, hero, first service block) + full `screen.css` after load. Sans 600 / italic stay off the LCP path.
- **Other routes:** `built/screen.css` blocking. Component-library FAQ/chrome CSS loads only as `built/screen-cl.css` on that route.
- **Fonts:** Self-hosted IBM Plex woff2. `@font-face` is inlined in `partials/font-faces.hbs` with `{{asset}}` URLs so they match the two preloads (Sans 400, Serif 600).
## Asset budget (recommended)

- Define a max size for CSS and for JS (e.g. after gzip) and check on each release.
- Run Lighthouse (or CI) and track Core Web Vitals so regressions are caught.

## Related

- [Fonts and images](./fonts-and-images) — Font files and preload
- [Build and validate](/docs/getting-started/build-and-validate) — How the bundle is built
- [Architecture: theme system](/docs/architecture/theme-system) — Layout and head structure
