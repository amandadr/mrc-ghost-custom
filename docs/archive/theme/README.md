# Archived theme files

**Frozen.** These Handlebars files are not loaded by Ghost (they do not sit at the theme root or in `partials/`). Keep them as copy recipes; do not treat them as current templates.

| File | Why archived |
|------|----------------|
| [page-glossary.hbs.txt](page-glossary.hbs.txt) | `/glossary/` is a **collection** using `glossary.hbs`, not a Ghost Page |
| [glossary-terms.hbs.txt](glossary-terms.hbs.txt) | Only used by the archived page template; live glossary builds terms in `glossary.hbs` |
| [glossary-collection.hbs.txt](glossary-collection.hbs.txt) | Scaffold for a new glossary collection. Copy to the theme root as `glossary-collection-<slug>.hbs` and replace `COLLECTION_TAG` |
| [content-cta.hbs.txt](content-cta.hbs.txt) | Orphan members CTA; subscribe markup lives in `post-whitepaper.hbs` / `content.hbs` |

Files use a `.hbs.txt` suffix so GScan does not treat them as live theme templates. To restore a template, copy it to the theme root (or `partials/`), drop the `.txt` suffix, and add a Labs route if needed. See [theme-map.md](../../theme-map.md).
