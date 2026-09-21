---
sidebar_position: 1
---

# Templates overview

Ghost picks a **root template** based on the current route and, for pages and posts, the **template** selected in the editor. Some marketing URLs are **Labs routes** that map straight to a theme `.hbs` file (no Admin template dropdown).

## How Ghost chooses a template

- **Homepage:** When a static “Home” page is set in Ghost (Settings → General → Homepage), Ghost uses `home.hbs` for that URL. Otherwise the index (blog) is the homepage.
- **Blog / archive:** Labs routes put the post listing at `/blog/` using `index.hbs`.
- **Single post:** `post.hbs` by default. Custom post templates use matching `custom-*.hbs` files.
- **Single page:** `page.hbs` by default. Admin templates use `page-<slug>.hbs` (e.g. `page-about.hbs`).
- **Audience / who-i-help / component library:** Defined in `docs/routes-glossary.yaml` and rendered by dedicated root templates (`services-*.hbs`, `who-i-help.hbs`, `custom-component-library.hbs`).
- **Author / tag:** `author.hbs` and `tag.hbs`.

All templates that extend the root layout start with `{{!< default}}` so `default.hbs` wraps the content.

Marketing and collection templates set title, description, Open Graph, and canonical through `partials/seo-meta.hbs`. Posts, tags, and authors get a meta description from Ghost variables when the SEO fields are empty.

## Slug → template mapping

| Route / slug | How it is selected | Theme file |
| --- | --- | --- |
| (any page) | Default template | `page.hbs` |
| `about` | About | `page-about.hbs` |
| `services` | Services | `page-services.hbs` |
| `contact` | Contact | `page-contact.hbs` |
| `resources` | Resources | `page-resources.hbs` |
| `thanks` | Thanks | `page-thanks.hbs` |
| `/who-i-help/` | Labs routes | `who-i-help.hbs` |
| `/services/small-businesses/` | Labs routes | `services-small-business.hbs` |
| `/services/tourism-hospitality/` | Labs routes | `services-tourism-hospitality.hbs` |
| `/services/organizations-institutions/` | Labs routes | `services-organizations-institutions.hbs` |
| `/services/arts-culture-community/` | Labs routes | `services-arts-culture-community.hbs` |
| `/services/agencies-development-teams/` | Labs routes | `services-agencies-development-teams.hbs` |
| `/component-library/` | Labs routes | `custom-component-library.hbs` |

Theme settings (`@custom.*`) control a small set of copy and toggles; see [Theme settings](./theme-settings). Long marketing copy lives in the templates (Ghost’s ~20 custom-setting limit).

## Next

- [Home](./home) — Homepage structure and theme settings
- [Blog and index](./blog-and-index) — Blog archive, cover, featured posts
- [Post and page](./post-and-page) — Single post/page, content partial, custom post templates
- [Whitepapers + case studies (PDF-first)](./resources-pdfs) — Add a PDF resource to Ghost and serve it via your CDN
- [Theme settings](./theme-settings) — Full reference of `@custom.*` keys
- [Theme anatomy](/docs/architecture/templates-and-partials) — Full template and partial inventory
