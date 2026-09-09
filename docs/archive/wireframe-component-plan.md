# Wireframe → component plan

How the Relume wireframes in `assets/wireframes/` map onto the theme's partials, what is
missing, and the order to build it in.

## How to read the wireframes

The 15 HTML exports are **Relume Tailwind blocks with placeholder copy** — "Tagline",
"Medium length section heading goes here", "Button", lorem ipsum. They describe *layout and
section rhythm only*. They are not a source of copy, colour, or type. Real copy comes from
`assets/wireframes/PEI & Tourism Content Strategy.md` and `docs/services-pages.md`.

The paired PNGs (`* • Desktop.png` / `* • Mobile.png`) are the visual reference for the same
layouts and are more useful than the HTML for judging proportion and density.

A handful of sections *were* customised and carry real copy — treat these as the author's
actual intent, not Relume defaults:

| Page | Section | Real copy |
|------|---------|-----------|
| Small & Medium Businesses | hero | "Your website should work as hard as you do" |
| Small & Medium Businesses | problems | "You may be here because" |
| Organizations & Institutions | outcomes | "What your organization gains" |
| Tourism & Hospitality | seasonal | "Built around your busiest months" |
| Services & Capabilities | access | "A website that works for everyone" |
| Services & Capabilities | portfolio | "Online presence / Bookings / Operations" |
| Case Studies | intro | "Work that made things work better" |
| Home | CTA | "You don't need to become technical. You need the right partner." |

**Housekeeping:** all 14 `* copy.html` files are byte-identical duplicates of their
counterparts and should be deleted.

## Guiding rules

These come from the existing site's voice (minimalist, text-driven) and override the
wireframes wherever the two disagree.

1. **Text first, photo optional.** Relume fills every block with a grey image box. We do not.
   Every component that *can* take a photo ships text-only by default, and the text-only
   version must look deliberate — not like a layout with a hole in it.
2. **One media contract, theme-wide.** `two-column-section.hbs` already has the right pattern
   (`right_img` / `right_img_alt` / `right_placeholder`). Standardise on it and extract it so
   every photo-capable component behaves identically.
3. **Collapse, don't fill.** With no image, a two-column section becomes a single readable
   column at full measure. The bordered placeholder exists only for the component library.
4. **No new colour or type.** Everything uses existing tokens. New components are new
   *arrangements*, not new visual language.
5. **Progressive enhancement.** Tabs, accordions, and carousels must work with JS disabled.
   The theme already concatenates `assets/js/lib/*.js`, so a small enhancement module is
   idiomatic here.
6. **Icons are opt-in.** The wireframes lean on icon grids. Keep `icon` an optional parameter
   so the default rendering stays typographic.

## Gap analysis

Status against the current theme. "Update" means the component exists but needs a variant.

### Foundations

| Wireframe pattern | Status | Action |
|---|---|---|
| Section header (eyebrow + heading + subcopy + optional actions) — appears in ~90% of sections | Missing (inlined ad hoc in every template) | **New** `section-header.hbs`. Highest-leverage item in this plan. |
| Eyebrow / tagline label | Partial (`.mrc-audience-hero__eyebrow` only) | **Promote** to a general `.mrc-eyebrow` |
| Media frame (photo ⇄ text-only switch) | Pattern exists inside `two-column-section` | **Extract** `media-frame.hbs` |
| Dark statement band | `anchor-section.hbs` exists but has **no CSS and is used nowhere** | **Wire up** + add CSS |
| Feature icons | Only arrows/social/star in `partials/icons/` | **Add** ~8 line icons |

### Content sections

| Wireframe pattern | Seen on | Status | Action |
|---|---|---|---|
| Split hero (copy left, image right) | Home, Who I Help, Tourism, Arts | `hero.hbs` is centred and text-only | **Update** — add optional media, keep centred text-only as default |
| Collage hero (two offset images) | Small Business, Case Studies | Missing | Photo variant of split hero; low priority |
| Two-column heading + copy + optional image | Everywhere | **Exists and already correct** | Reuse as-is |
| Capability block with sub-items + image | Services ×4 | `service-section.hbs` (no media) | **Update** — add optional media |
| Icon feature grid (2/3/4-up) | Home ×2, Orgs, Small Business, Tourism, Services | Missing | **New** `feature-grid.hbs` + `feature-item.hbs` |
| Two-up link pair ("See the work" / "Not sure what you need?") | Home ×2 | Missing | **New** `link-pair.hbs` |
| Vertical tab selector ("Find where you fit") | Home, Who I Help, Small Business ×2, Agencies, Orgs | Missing | **New** `tab-selector.hbs` (stacked without JS) |
| Horizontal stepper ("A clear path forward") | Small Business | `process-step.hbs` is a static grid | **Update** — stepper variant |
| 3-phase outcome band | Tourism, Orgs | `audience-expectation.hbs` covers it | Reuse |
| FAQ accordion | Orgs | Missing | **New** `faq.hbs` using `<details>` — no JS |
| Centred CTA band | Every page | `cta-section.hbs` | Reuse (optional media variant) |

### Social proof

| Wireframe pattern | Seen on | Status | Action |
|---|---|---|---|
| Single centred testimonial (avatar + stars) | Home | Missing | **New** `testimonial.hbs` — avatar and stars both optional |
| 3-up testimonial grid | About, Agencies, Orgs, Small Business, Tourism, Arts, Case Study | Missing | **New** `testimonial-grid.hbs` |

### Post & resource surfaces

This is the largest gap. The theme currently renders posts as a **text list** (`loop.hbs`:
date, title, reading time). Every wireframe renders them as **cards with images**.

| Wireframe pattern | Seen on | Status | Action |
|---|---|---|---|
| Post card (image, category, title, excerpt, meta) | Every page | `loop.hbs` is a text row | **New** `post-card.hbs` with photo **and** text-only variants |
| 3-up post grid + "View all" | Home ×2, most pages | Missing | **New** `post-grid.hbs` |
| Featured split (1 large + 3 stacked) | Resources | Missing | **New** `post-feature-split.hbs` |
| Post carousel (arrows + dots) | Resources | Missing | **New** — reuse the scroll-snap + mask-fade pattern already built for the component library TOC; no JS |
| Case-study link list (thumb + title + tag) | Small Business, Services | Missing | **New** `case-study-list.hbs` |
| Portfolio category columns | Services | Missing | **New** `link-columns.hbs` |

### Article furniture

| Wireframe pattern | Seen on | Status | Action |
|---|---|---|---|
| Article hero (title, author, date, read time, tags) | Case Study, Resource | Partial in `content.hbs` / `post-case-study.hbs` | Audit against wireframe |
| Sticky table of contents sidebar | Case Study | Missing | **New** `post-toc.hbs` |
| Sidebar: contributors + subscribe | Case Study | `content-cta.hbs` covers subscribe | Compose |
| Share bar | Resource, Case Study | Exists (`share.css`) | Reuse |

### Contact

| Wireframe pattern | Status | Action |
|---|---|---|
| Multi-field contact form | Exists inline in `page-contact.hbs` | Reuse |
| Contact method cards (email / phone / office) | Partial (`mrc-contact-options`) | Minor update |
| Map image | Exists in wireframe only | **Skip** — conflicts with the minimal-photography rule |

## The media contract

Every photo-capable component takes the same three parameters, handled by one partial:

```handlebars
{{> "media-frame" img=right_img img_alt=right_img_alt placeholder=right_placeholder}}
```

| Parameter | Behaviour |
|---|---|
| `img` | Image URL. Present → renders `<img>` and the section becomes two-column. |
| `img_alt` | Alt text. Omitted → `alt=""` + `aria-hidden` (decorative). |
| `placeholder` | Renders a bordered empty block. **Component library only** — never on a live page. |
| *(none of the above)* | Text-only: the section collapses to a single column at full measure. |

Components adopting this: `hero`, `two-column-section` (already), `service-section`,
`cta-section`, `feature-item`, `post-card`, `testimonial`, `case-study-list`.

## Build order

Each phase ends with the new components added to `/component-library/` showing the photo
variant and the text-only variant side by side, which is how we verify rule 1.

### Phase 1 — Foundations ✅ done
Unblocks everything else and removes duplication already in the codebase.

1. ✅ Deleted the 14 duplicate `* copy.html` wireframes.
2. ✅ Section tone foregrounds. `.section-light/-surface/-dark/-cta` now set a text
   colour as well as a background, and headings inside dark tones inherit it. Added
   `--mrc-text-soft` and `--mrc-eyebrow` alongside the existing `--mrc-focus`, so
   components reference a role rather than a colour. This is the root fix for the
   recurring "invisible text on olive/maroon" bugs.
3. ✅ `section-header.hbs` + `.mrc-eyebrow` (`general/section-header.css`).
4. ✅ `media-frame.hbs` (`general/media-frame.css`); `two-column-section.hbs` migrated
   to it, replacing the About-specific `--headshot` class with a reusable `round` shape.
5. ✅ `general/anchor-section.css`; About's "Why This Work Exists" now uses the partial
   instead of 12 lines of duplicated markup, and the `.mrc-about-why-*` CSS is gone.
6. ✅ Nine line icons in `partials/icons/`, with `.icon-line` sizing in `icons.css`.
7. ✅ Cascade fix: `site/layout.css` moved into the base layer. `.gh-inner` was loading
   after the general components and overriding their `max-width`, so any component
   trying to hold a narrower measure inside `.gh-inner` was silently widened to 1100px.

**Still to refactor onto `section-header`:** the five title/intro families it replaces
(`.mrc-section-title`, `.mrc-audience-section-title` + `-intro`, `.mrc-about-section-title`,
`.mrc-contact-section-title`, `.mrc-common-projects-intro`). Deferred so Phase 1 shipped
without touching every page; the component and its CSS are in place and proven.

### Phase 2 — Content sections ✅ done
The bulk of the visual difference between the current site and the wireframes.

6. ✅ `feature-item.hbs` + `general/feature.css`. No `feature-grid.hbs`: columns already
   come from `.mrc-grid`, and a wrapper partial cannot take children in Handlebars, so
   `.mrc-feature-grid` is a class the template composes rather than a partial.
7. ✅ **`link-pair.hbs` folded into the feature grid** as `.mrc-feature-grid--pair`.
   It was the same markup at a larger size with a rule above each cell; a second partial
   would have been a copy with different padding.
8. ✅ `faq-item.hbs` + `general/faq.css`, built on `<details>`. Shared `group` name makes
   the set exclusive where browsers support it and independent toggles everywhere else.
9. ✅ `hero.hbs` optional media. The layout switch keys off
   `.mrc-hero-layout:has(.mrc-hero-media)`, so the text-only hero — the default and most
   of the site — needed no new class and no template changes.
10. ✅ `service-section.hbs` optional media, same `:has()` approach. On `align="right"`
    blocks the media flips to the left, which is what produces the A/B rhythm.

**Link colour, fixed at the token level.** Five places in the CSS were re-declaring
`color: … !important` to escape `a { color: var(--mrc-link) !important }` — the bug that
made the secondary CTA and the olive-ground links invisible. `--mrc-link` and a new
`--mrc-link-hover` are now overridden by the dark tones alongside `--mrc-focus`, and the
global rule is `a:where(:not(.button))`: `:where()` keeps specificity at 0,0,1 so
components can still win, and excluding buttons stops the rule fighting every button
variant. Secondary outline buttons now switch to Paper on dark grounds instead of
rendering olive-on-olive.

### Phase 3 — Interaction ✅ done
Isolated so the no-JS decision can be made once and applied consistently.

11. ✅ `tab-panel.hbs` + `general/tabs.css` + `assets/js/lib/tabs.js`. Panels are authored
    as real headed sections with ids; the JS builds the tablist from their
    `data-tab-label`, wires ARIA and arrow keys, and honours a deep link to a panel. Under
    900px the rail is a horizontally scrolling row with a mask fade; above it, a left rail.
    Fewer than two panels are left alone — tabs with one choice are just chrome.
12. ✅ `.mrc-process-grid--numbered`, a CSS counter on the existing `process-step.hbs`.

**`partials/icon.hbs`.** Handlebars resolves `{{> (lookup . "icon")}}` and Ghost renders it
correctly, but **gscan rejects it as invalid Handlebars**, which would fail theme
validation on upload. Icon lookup is therefore an explicit `{{#match}}` dispatch in one
partial. Adding an icon means a file in `partials/icons/` and one line in `icon.hbs`.

### Phase 4 — Post & resource surfaces ✅ done (components; live templates not rewired)
Largest gap; also the highest content risk, since it changes how every post is presented.
The components exist and are proven against real posts in the library; **no live template
has been rewired yet**, so the current feed is untouched.

13. ✅ `post-card.hbs` + `blog/post-card.css`. Reads the post context, so it drops into
    `{{#foreach posts}}` unchanged. `show_image=true` uses the feature image *only when
    the post has one*, so a mixed feed never renders a hole. No `post-grid.hbs` — same
    reasoning as the feature grid: `.mrc-post-grid` is a class on `.mrc-grid`.
14. ✅ `.mrc-post-split` (lead card beside a stack) lives in the same stylesheet rather
    than a partial, since it is a two-`{{#foreach}}` arrangement, not a component.
    ✅ Scroll-snap carousel: `.mrc-carousel` is CSS-only (overflow-x, snap, mask fade).
    `assets/js/lib/carousel.js` unhides prev/next only when the track overflows.
15. ✅ `case-study-row.hbs` (the list is a class, same reasoning as the feature grid)
    and `link-column.hbs`.
16. ⬜ Rewire `index.hbs`, `case-studies.hbs`, `whitepapers.hbs`, and the Resources page.
    Held for the next step, by request.

**`section-header` gained a split layout** while wiring the feed section. `layout="split"`
puts the heading left and a plain `link_text` link right, which is the shape every
"Latest writing … View all" band takes in the wireframes; the existing `action_text`
renders a button, which shouts too loudly for a "View all". The partial now wraps
eyebrow/heading/intro in `.mrc-section-header__text` so the two can sit side by side.

### Phase 5 — Social proof
Deliberately late: needs real testimonial copy before it is worth building.

17. `testimonial.hbs` + `testimonial-grid.hbs`.

### Phase 6 — Article furniture 🔶 in progress
18. ✅ `post-toc.hbs` + `blog/post-toc.css` + `assets/js/lib/toc.js`. Authored links, or
    an empty list that is filled from article headings. Sticky from 900px; a `<details>`
    drawer below that. Current-heading highlighting is a JS extra.
    ⬜ Audit article hero and share bar against the Case Study wireframe — with page
    assembly.

### Phase 7 — Page assembly
19. Rebuild `home.hbs`, `page-services.hbs`, the five `services-*.hbs` audience pages, and
    Resources to the wireframe section order.
20. Full-page visual QA at 375 / 768 / 1024 / 1440, plus `yarn test` (gscan).

## Decisions

1. **Photography — text-only for now.** Photo variants get built and exercised in the
   component library, but every component ships text-only on live pages. The text-only
   rendering is the primary design, not a fallback.
2. **Post cards — text-first.** Title, excerpt, and meta carry the card; the image is an
   optional top slot. This keeps the feed closer to the current spare text list than to the
   wireframe's image grid.
3. **Tabs — progressive enhancement.** Panels render as plain stacked sections with real
   headings and no JS, then upgrade to an ARIA tablist when `assets/js/lib/tabs.js` loads.
   Everything stays reachable and linkable without scripting.
4. **Testimonials — still open.** Phase 5 stays deferred until there are real quotes; it
   should not be built against placeholders.
