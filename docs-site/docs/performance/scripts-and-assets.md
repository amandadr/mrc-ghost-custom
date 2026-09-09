---
sidebar_position: 2
---

# Scripts and assets

This page describes how the theme loads JavaScript and manages the critical path so the site stays fast and non-blocking.

## Script loading

- **Main script:** `default.hbs` loads `{{asset "built/main.min.js"}}` with the **defer** attribute. The script runs after the DOM is parsed and does not block rendering.
- **No inline blocking JS:** Critical behaviour (e.g. burger menu) should work with DOM-ready logic that is compatible with deferred execution.
- **Ghost injection:** `{{ghost_foot}}` is output after the theme script so Ghost can inject its own assets (e.g. member scripts) without blocking our bundle.

## Build and wiring snippets (for fast reproduction)

### Theme template: load the built assets (`default.hbs`)

```text
<link rel="stylesheet" href="{{asset "built/screen.css"}}">
...
<script src="{{asset "built/main.min.js"}}" defer></script>
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

### Theme config: image sizes (`package.json`)

```json
"image_sizes": {
  "xs": { "width": 150 }
}
```

## What the theme JS does

The concatenated and minified bundles in `assets/built/main.min.js` and `main-lite.min.js` are built from Ghost shared assets, sorted `assets/js/lib/*.js`, and `assets/js/main.js` (Gulp: concat + uglify). They include:

- **Burger menu** — Toggle mobile navigation (`ghost-main-lite.js` / shared).
- **Tabs / carousel / TOC** — Progressive enhancement in `assets/js/lib/tabs.js`, `carousel.js`, `toc.js` (CSS scroll-snap and native details work without JS).
- **Theme behaviours** — Analytics hooks, services mega-menu, contact `?audience=` prefill, PDF viewer upgrade (`main.js`).

jQuery and Owl Carousel are **not** part of the current theme bundle. Do not reintroduce them for a single feature.

## Critical path (above-the-fold)

- **CSS:** The single stylesheet `built/screen.css` is loaded in `<head>` without `async`/`defer` so first paint is styled. For v1 we keep one bundle; critical CSS (inline or separate above-the-fold CSS) is a possible future step to improve LCP.
- **Fonts:** Critical fonts used in the hero and nav are preloaded in `default.hbs`:
  - `IBMPlexSans-Regular.ttf`
  - `IBMPlexSans-SemiBold.ttf`
  Preload uses `rel="preload"`, `as="font"`, `type="font/ttf"`, and `crossorigin` so the browser discovers them early. Adding woff2 and preloading those instead would reduce payload and improve load time.

## Asset budget (recommended)

- Define a max size for CSS and for JS (e.g. after gzip) and check on each release.
- Run Lighthouse (or CI) and track Core Web Vitals so regressions are caught.

## Related

- [Fonts and images](./fonts-and-images) — Font files and preload
- [Build and validate](/docs/getting-started/build-and-validate) — How the bundle is built
- [Architecture: theme system](/docs/architecture/theme-system) — Layout and head structure
