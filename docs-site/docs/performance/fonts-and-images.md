---
sidebar_position: 3
---

# Fonts and images

This page covers **font loading** and **image sizing and delivery** so the theme stays fast and avoids layout shift.

## Font loading

### Current setup

- **Fonts:** IBM Plex Sans (body, 400/600) and IBM Plex Serif (headings, 400/600), latin woff2 from `@fontsource`, copied by Gulp into `assets/fonts/`.
- **`@font-face`:** Inlined in `partials/font-faces.hbs` with `{{asset}}` URLs and `font-display: swap`. Do not put `src: url("../fonts/...")` in CSS — Ghost’s `{{asset}}` helper adds `?v=`, and a relative path is a second download.
- **Preload:** `default.hbs` preloads the two first-paint faces: Sans 400 (body / LCP text) and Serif 600 (logo + headlines). Same `{{asset}}` href as `@font-face`.

### Improvements (in scope or future)

- **Subset further** if a unicode-range or variable-font cut beats the current latin files.
- **Keep preload and `@font-face` URLs identical** when adding weights or files.

## Image sizes (Ghost)

The theme declares image sizes in `package.json` under `config.image_sizes` so Ghost generates responsive variants:

| Size | Width |
|------|--------|
| xs | 150px |
| s | 400px |
| m | 750px |
| l | 960px |
| xl | 1140px |
| xxl | 1920px |

Templates and the **content** partial use these with the **srcset** partial to output `srcset` and `sizes` so the browser picks an appropriate resolution. This reduces unnecessary data and helps LCP/CLS.

## Responsive images in content

- **Post/page body:** The `content` partial outputs responsive images (srcset) for the feature image and in-content images. Use `feature_image_alt` where available for accessibility.
- **Featured posts / feed / related:** Use srcset and sensible `sizes` so images scale with layout. Add `loading="lazy"` for images below the fold (e.g. post feed, related posts, featured after the first slide) to avoid loading and layout cost for off-screen images.

## Lazy loading

- **Below-the-fold images:** Add `loading="lazy"` where images are not in the initial viewport (feed, related posts, etc.). This is a small change with good impact on network and layout.
- **Above-the-fold:** Do not use `loading="lazy"` for the hero or first visible image; let the browser load them normally.

## Related

- [Theme system](/docs/architecture/theme-system) — Where fonts and assets live
- [Content partial](/docs/templates/post-and-page) — How post/page body images are rendered
- [Theme settings](/docs/templates/theme-settings) — Not font-specific; image_sizes are in package.json config
