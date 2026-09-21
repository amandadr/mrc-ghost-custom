---
sidebar_position: 2
---

# Homepage (home.hbs)

The **homepage** is rendered by `home.hbs` when a static homepage is set in Ghost (Settings → General → Homepage).

## Structure

1. **Hero** — Headline, subtext, Work / About CTAs (`hero`).
2. **Audiences** — Tab panels linking to the five `services-*.hbs` routes (`tab-panel`).
3. **About split** — Short bio plus headshot (`section-header`, `media-frame`).
4. **What I do** — Three pillars (`feature-item`).
5. **Toolkit** — Technology carousel (`tech-carousel`).
6. **Outcomes** — Dark band of results (`feature-item`).
7. **Work / resources feeds** — Latest case studies and writing (`feed-work`, `feed-resources`).
8. **Final CTA** — Contact band (`cta-section`).

Hero copy is hardcoded in `home.hbs` (theme settings still exist for headline/subtext if you wire them back). SEO title stays the site name; description, Open Graph, and canonical are set in `seo-meta`.

## Theme settings used (homepage group)

| Key | Type | Default | Purpose |
| --- | --- | --- | --- |
| `hero_headline` | text | (see `package.json`) | Available for hero H1 if the template reads `@custom.hero_headline` |
| `hero_subtext` | text | (see `package.json`) | Available for hero subtext |
| `show_featured_posts` | boolean | true | Featured posts on the **blog** index, not the homepage |

Edit these in **Settings → Design → Theme**, group **homepage**.

## Partials

- `hero`, `section-header`, `tab-panel`, `media-frame`
- `feature-item` (pillars and outcomes)
- `tech-carousel`, `feed-work`, `feed-resources`, `cta-section`

`service-card` and `principle-item` are **legacy** (`partials/legacy/`); they are not used on the live homepage.

No Ghost post loop on `home.hbs` except the shared feed partials.
