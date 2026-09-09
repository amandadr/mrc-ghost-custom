# MRC Audience Service Pages — Dev Guide v1

## Scope

This guide establishes:

1. The shared framework for all five audience service pages
2. The complete content specification for **Small & Medium Businesses**
3. The styling, layout, responsive, accessibility, SEO, and implementation requirements for that page

The remaining audience pages should reuse the same component system while changing the audience problems, project examples, proof, and calls to action.

The system should reflect the existing MRC brand: clear, practical, accessible, technically credible, and written for non-technical decision-makers. The established palette, IBM Plex typography, 16px body copy, readable line lengths, and AA-accessibility rules should remain the foundation. 

---

# 1. Overall audience-page framework

## Primary audiences

```text
Services
├── Small & Medium Businesses
├── Tourism & Hospitality
├── Arts, Culture & Community
├── Organizations & Institutions
├── Agencies & Development Teams
└── All Services
```

The existing `/services/` page remains the capability-led overview.

Each audience page answers a different question:

* **Services page:** What can Manny do?
* **Audience page:** Does Manny understand a business like mine?

## Recommended URLs

```text
/services/
/services/small-businesses/
/services/tourism-hospitality/
/services/arts-culture-community/
/services/organizations-institutions/
/services/agencies-development-teams/
```

Use short, plain slugs. The page title can still say “Small & Medium Businesses” even though the slug is simply `small-businesses`.

## Navigation behaviour

### Desktop

“Services” should remain a clickable top-level item leading to `/services/`, with an adjacent disclosure control opening the dropdown.

Dropdown order:

1. Small & Medium Businesses
2. Tourism & Hospitality
3. Arts, Culture & Community
4. Organizations & Institutions
5. Agencies & Development Teams
6. All Services (uses the same page as just clicking "Services", /services/)

Do not make the menu hover-only. It should also open by click and keyboard.

### Mobile

Use an accordion beneath “Services.”

* Tap Services to expand the audience links
* Include “All Services” as the first or last child
* Show the current page using `aria-current="page"`
* Preserve a direct route to the main Services overview

## Shared page sequence

Every audience page should use the same sequence:

```text
1. Audience hero
2. Recognizable problems
3. How I help
4. Common projects
5. What working together looks like
6. Relevant experience and proof
7. Final CTA
8. Related audience/service links
```

This sequence moves visitors through:

> Recognition → understanding → possibilities → reassurance → proof → contact

## Shared content rules

Each page must include:

* One clear audience label
* One H1 focused on an outcome
* Three to five recognizable problems
* Four common-project groups
* Four working principles
* Audience-specific experience
* One low-pressure primary CTA
* A link back to all Services

Avoid repeating identical generic copy across all five pages. The structure can remain consistent, but each page must have unique language in:

* The hero
* The problem statements
* The project examples
* The proof section
* The final CTA

## Shared page components

Recommended component/class system:

```text
audience-page
├── audience-hero
│   ├── audience-hero__content
│   └── audience-fit-card
├── audience-challenges
│   └── challenge-grid
├── audience-introduction
│   ├── audience-introduction__content
│   └── audience-callout
├── audience-projects
│   └── project-card-grid
├── audience-expectations
│   └── expectation-grid
├── audience-proof
│   └── proof-grid
├── audience-cta
└── audience-navigation
```

Do not build five unrelated layouts. Use one shared design system and page-specific content.

---

# 2. Small & Medium Businesses page

## Page identity

**Navigation label:** Small & Medium Businesses
**Page slug:** `/services/small-businesses/`
**Template identifier:** `small-business`
**Audience:** Owner-operated businesses, family businesses, local services, retailers, trades, professional practices, and growing teams without extensive internal technical capacity.

## Page objective

Help a business owner recognize that:

* Their problem is valid even when they cannot describe it technically
* MRC can help with more than complete website builds
* The engagement can start small
* Recommendations will reflect their actual time, budget, and capacity
* They will understand and retain ownership of the result

## Primary conversion

A visitor starts a conversation about something that is outdated, confusing, repetitive, broken, or holding the business back.

## Primary CTA destination

```text
/contact/?audience=small-business
```

Where practical, use the query parameter to preselect or label the contact form inquiry.

---

# 3. Metadata and SEO

## HTML title

> Websites & Digital Support for Small Businesses | Manny Roy Consulting

## Meta description

> Practical websites, digital systems, automation, and technical guidance for small and medium businesses in PEI, Atlantic Canada, and beyond.

## Open Graph title

> Practical Digital Support for Small & Medium Businesses

## Open Graph description

> Websites, tools, and straightforward technical guidance designed around how your business actually works.

## Canonical URL

```text
https://www.mannyroy.com/services/small-businesses/
```

## Breadcrumb

```text
Home → Services → Small & Medium Businesses
```

## Suggested search themes

Use naturally rather than repeating them mechanically:

* Small business website support
* Web developer for small businesses
* Small business digital systems
* Website help in PEI
* Business automation
* Ecommerce and booking support
* Technical consulting for small businesses

## Structured data

Use:

* Site-wide `ProfessionalService` or `Organization`
* Page-level `Service`
* Visible breadcrumbs paired with `BreadcrumbList`

Do not add FAQ schema unless an actual FAQ is visible on the page.

---

# 4. Complete page content

## Section 1 — Hero

### Eyebrow

> For Small & Medium Businesses

### H1

> Practical digital support for growing businesses.

### Lead copy

> Websites, tools, and straightforward technical guidance designed around how your business actually works.

### Supporting copy

> Whether something is outdated, disconnected, or simply taking too much time, I can help you understand the problem and choose a practical way forward.

### Primary CTA

> Tell me what’s not working

Link:

```text
/contact/?audience=small-business
```

### Secondary CTA

> See common projects

Link:

```text
#common-projects
```

### “Good fit for” card

**Heading:**

> Good fit for

**Items:**

* Owner-operated and family businesses
* Local shops and service providers
* Trades and professional practices
* Growing teams without a dedicated technical department
* Businesses relying on several disconnected digital tools

### Development notes

* The page must contain only one H1
* Keep the H1 to approximately 12–15 words
* Hero lead should remain below 60 characters per line
* The audience-fit card is supporting content, not a competing hero
* Do not use a stock photo in the initial build

---

## Section 2 — Recognizable problems

### Section heading

> You may be here because…

### Introductory copy

> You do not need to know the technical name for the problem. Most projects begin with something that feels outdated, confusing, repetitive, or harder than it should be.

### Challenge 1

**Heading:**

> Your website no longer reflects the business.

**Copy:**

> The services, team, location, or way customers work with you have changed—but the website has not kept up.

### Challenge 2

**Heading:**

> Customers struggle to take the next step.

**Copy:**

> Important information is difficult to find, forms are unclear, or booking, buying, and getting in touch require too much effort.

### Challenge 3

**Heading:**

> Routine work is spread across too many tools.

**Copy:**

> Email, forms, spreadsheets, software, and manual follow-up are creating duplicate work or allowing things to fall through the cracks.

### Challenge 4

**Heading:**

> You are not sure what to fix first.

**Copy:**

> Several things need attention, but the cost, impact, and right order of work are not obvious.

### Layout note

Use four compact challenge cards in a 2 × 2 grid. These should be lighter than the Common Projects cards and should not resemble product pricing cards.

---

## Section 3 — How I help

### Heading

> Start with the business problem

### Body copy

> You do not need an internal IT team or a finished technical brief. I help you understand what is causing friction, decide what matters most, and make practical improvements without adding unnecessary complexity.

> Sometimes the answer is a better website. Sometimes it is a cleaner workflow, a repaired integration, clearer reporting, or simply knowing which problem is worth solving first.

### Pull quote or callout

> The goal is not more technology. It is a business that works better with the technology it already depends on.

### Optional supporting points

Use these only when the split layout needs visual balance:

**Understand**

> Clarify what is happening and why it matters.

**Prioritize**

> Focus on changes that will make a meaningful difference.

**Improve**

> Build or repair the right part of the system.

**Hand off**

> Leave you with access, documentation, and a clear way to manage what comes next.

MRC’s existing project work already treats documentation, administrative access, and maintainable ownership as part of delivery rather than an afterthought. 

---

## Section 4 — Common projects

Set section ID:

```text
id="common-projects"
```

### Heading

> Common projects

### Introductory copy

> You do not need to know which service category your project fits into. These are some of the practical ways I help businesses improve how they work online.

### Card 1 — Websites and online presence

**Intro:**

> Make it easier for customers to find, understand, and trust your business.

**Items:**

* New websites and focused rebuilds
* Website rescue and maintenance
* Hosting, domains, and business email
* Mobile, accessibility, and performance improvements
* Search visibility and analytics setup

### Card 2 — Bookings, sales, and customer experience

**Intro:**

> Reduce friction between customer interest and the next useful action.

**Items:**

* Booking and reservation improvements
* Ecommerce and online payments
* Forms, inquiries, and quote requests
* Online ordering and third-party integrations
* Clearer customer journeys and calls to action

### Card 3 — Day-to-day digital operations

**Intro:**

> Simplify repetitive work and help your tools work together more effectively.

**Items:**

* Connecting disconnected systems
* Forms, spreadsheets, and reporting
* Workflow automation
* Internal documentation
* Practical AI for administrative work

### Card 4 — Advice, audits, and training

**Intro:**

> Understand what is happening before committing to a larger project.

**Items:**

* Website and digital-system reviews
* Technical troubleshooting
* Project planning and prioritization
* Analytics and performance interpretation
* Team training and practical workshops

### Closing prompt

> Not sure where your project fits? Start with what is frustrating you or taking more time than it should.

**Text link:**

> Tell me what’s going on →

---

## Section 5 — What working together looks like

### Heading

> What you can expect

### Introductory copy

> Good technical work should leave you with more clarity and confidence—not a larger system you are afraid to touch.

### Principle 1

**Heading:**

> Plain-language decisions

**Copy:**

> You will understand what is being recommended, why it matters, and what it will require.

### Principle 2

**Heading:**

> Right-sized scope

**Copy:**

> The work will reflect your priorities, budget, timeline, and actual capacity to manage it.

### Principle 3

**Heading:**

> Practical implementation

**Copy:**

> New tools and features must fit the way your business and team already operate.

### Principle 4

**Heading:**

> Ownership after launch

**Copy:**

> You will receive the access, documentation, and guidance needed to confidently manage what comes next.

### Styling note

This section should use the olive background treatment currently associated with engagement and process content. It creates a visual pause after the larger project grid.

---

## Section 6 — Experience and proof

### Heading

> Experience across the whole system

### Introductory copy

> My work spans websites, ecommerce, hosting, analytics, automation, accessibility, SEO, data, and applied AI. That breadth helps me understand how the customer-facing experience connects to the systems behind it.

> Small-business support also means respecting time, margins, staff capacity, and the fact that every new tool creates something else someone has to manage.

### Proof card 1

**Heading:**

> Customer-facing systems

**Copy:**

> Websites, ecommerce, ordering, booking, forms, customer journeys, and the information people need before they contact or visit a business.

### Proof card 2

**Heading:**

> Behind-the-scenes operations

**Copy:**

> Hosting, integrations, analytics, workflows, reporting, technical troubleshooting, and the tools staff rely on during the workday.

### Proof card 3

**Heading:**

> Handoff and ongoing support

**Copy:**

> Clear documentation, practical training, manageable systems, and support arrangements that fit the business rather than creating unnecessary dependence.

### Supporting link

> See selected work →

Destination:

```text
/work/
```

or the current case-study index.

### Proof-content rules

* Use named client logos only with permission
* Prefer short project outcomes over software inventories
* Avoid presenting every technical capability at once
* Link to one or two directly relevant case studies when available
* Do not fabricate metrics where no reliable baseline exists

---

## Section 7 — Final CTA

### Heading

> Have something that could work better?

### Copy

> Tell me what is frustrating, unclear, or taking more time than it should. You do not need to arrive with a solution—we can start with the problem.

### Primary button

> Start a conversation

Link:

```text
/contact/?audience=small-business
```

### Secondary text link

> Explore all services →

Link:

```text
/services/
```

---

## Section 8 — Related audience navigation

Keep this visually modest. It is site navigation, not another sales section.

### Heading

> Looking for something more specific?

### Links

* Tourism & Hospitality
* Arts, Culture & Community
* Organizations & Institutions
* Agencies & Development Teams
* All Services

Do not repeat full page descriptions here. Use simple text links or compact pills.

---

# 5. Styling and layout specification

## Design direction

The page should feel:

* Warm rather than corporate
* Editorial rather than app-like
* Structured without feeling rigid
* Local and approachable without becoming rustic
* Technically credible without looking like a software-company landing page

Follow the themes that already exist in the codebase.

Avoid excessive icons, gradients, floating mockups, dashboards, code imagery, or photography.

---

# 6. Section layout

(The following is a recommendation only, and can be interpreted as needed to better fit the existing codebase.)

## Hero

### Desktop

Use a two-column layout:

```text
Left:  approximately 65%
Right: approximately 35%
Gap:   48–64px
```

Left side contains:

* Eyebrow
* H1
* Lead
* Supporting paragraph
* CTAs

Right side contains the “Good fit for” card.

Suggested CSS:

```css
.audience-hero__inner {
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr);
    gap: clamp(2.5rem, 6vw, 4rem);
    align-items: center;
}
```

### Hero heading

* Maximum width: approximately `14ch`
* Do not centre the hero
* Avoid forced line breaks unless they remain sensible at all breakpoints

### Good-fit card

* Paper background
* Thin olive top or left border
* Subtle ink border
* Little or no box shadow
* Maximum border radius: `var(--radius-l)` (8px)
* Use a real unordered list

```css
.audience-fit-card {
    background: var(--mrc-surface);
    border: var(--border-width) var(--border-style) var(--border-color-subtle);
    border-left: var(--border-width-accent) var(--border-style) var(--border-color-accent);
    border-radius: var(--radius-l);
    padding: clamp(1.5rem, 3vw, 2rem);
}
```

---

## Challenge grid

Use a 2 × 2 grid at desktop sizes.

Cards should be visually lighter than the project cards:

* Cream or paper background
* Fine border
* No heavy shadow
* Short heading
* One short paragraph
* Equal height only where natural

```css
.challenge-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
}
```

Use maroon for a small rule, number, or decorative marker. Do not use colour as the only distinction between cards.

---

## How-I-help section

Use a split editorial layout:

```text
Left: section heading and main copy
Right: callout or four short stages
```

The callout may use a paper background with a mustard accent rule.

Do not use four full cards here if the page is becoming visually dense. A stacked list with small headings is enough.

---

## Common-project grid

This is the primary scanning section.

### Desktop

* Two columns
* Two rows
* Equal padding
* Consistent heading alignment
* Five items maximum in each card

### Card treatment

```css
.project-card {
    background: var(--mrc-surface);
    border: var(--border-width) var(--border-style) var(--border-color-subtle);
    border-radius: var(--radius-m);
    padding: clamp(1.5rem, 3vw, 2rem);
}

.project-card__title {
    border-left: var(--border-width-accent) var(--border-style) var(--border-color-accent);
    padding-left: 0.9rem;
}
```

Alternate accent borders carefully:

* Olive: websites and online presence
* Maroon: bookings and customer experience
* Olive: operations
* Maroon: advice and training

The alternating accents should support scanning, not imply status or hierarchy.

Do not add a unique icon to every bullet.

---

## Expectations section

Use an olive background:

```css
.audience-expectations {
    background: var(--mrc-olive);
    color: var(--mrc-surface);
}
```

Use four columns on wide desktop and two columns on tablet.

No individual card background is necessary. Separate items with spacing or subtle cream-coloured rules.

Ensure links and any button treatment meet AA contrast requirements.

---

## Experience section

Use a split structure:

```text
Introductory copy: 35–40%
Proof cards:       60–65%
```

Proof cards may form one vertical stack or three rows.

This section should feel credible and specific without becoming a résumé.

Use outcome language:

* Improved customer access
* Reduced manual work
* Stabilized systems
* Made updates manageable
* Documented ownership

Avoid technology-logo walls.

---

## Final CTA

Use maroon or olive as the background. Maroon provides stronger visual distinction from the olive Expectations section.

```css
.audience-cta {
    background: var(--mrc-maroon);
    color: var(--mrc-surface);
}
```

Keep the content to:

* One heading
* One paragraph
* One primary button
* One secondary link

Do not add another multi-field form directly to the page unless contact-form analytics later show that the extra step is causing meaningful drop-off.

---

# 7. Analytics plan

Track the following events consistently across all five audience pages:

```text
audience_primary_cta_click
audience_secondary_cta_click
audience_project_link_click
audience_case_study_click
audience_related_page_click
contact_form_start
contact_form_submit
```

Recommended parameters:

```text
audience = small_business
page_section = hero | common_projects | proof | final_cta
cta_label = visible button or link text
```

Do not create a different event name for every audience. Keep the event structure shared and distinguish pages using parameters.

---

# MRC Audience Service Pages — Copy Guide v2

## Scope

This guide supplies the page-specific copy for:

1. Tourism & Hospitality
2. Arts, Culture & Community
3. Organizations & Institutions
4. Agencies & Development Teams

Each page should reuse the framework, components, layout rules, and styling established for the **Small & Medium Businesses** page.

The structure remains:

```text
1. Audience hero
2. Recognizable problems
3. How I help
4. Common projects
5. What you can expect
6. Relevant experience and proof
7. Final CTA
8. Related audience navigation
```

---

# 1. Tourism & Hospitality

## Page identity

**Navigation label:** Tourism & Hospitality
**Page slug:** `/services/tourism-hospitality/`
**Template identifier:** `tourism-hospitality`

## Audience

* Restaurants, cafés, and breweries
* Inns, hotels, cottages, and campgrounds
* Attractions and experience providers
* Festivals and seasonal events
* Tour operators and guides
* Farm markets and agritourism businesses
* Destination and tourism organizations

## Page objective

Show tourism operators that MRC understands:

* Seasonal revenue
* Short planning windows
* Customer-facing pressure
* Mobile visitor behaviour
* Booking, ordering, and listing complexity
* The importance of getting work completed before the busy season
* The reality that staff cannot pause operations to troubleshoot technology

## Primary conversion

The visitor starts a conversation about preparing for the season, improving bookings, correcting visitor information, or resolving an operational digital problem.

---

## Metadata and SEO

### HTML title

> Websites & Digital Support for Tourism Businesses | Manny Roy Consulting

### Meta description

> Websites, bookings, online ordering, listings, analytics, and practical technical support for tourism and hospitality businesses in PEI and Atlantic Canada.

### Open Graph title

> Digital Support for Tourism & Hospitality

### Open Graph description

> Practical websites and digital systems built around busy seasons, visitor needs, and the realities of customer-facing work.

### Suggested search themes

* Tourism website development PEI
* Hospitality website support
* Restaurant website developer
* Hotel booking website support
* Tourism digital consulting
* Seasonal business website
* Restaurant online ordering support

---

## Section 1 — Hero

### Eyebrow

> For Tourism & Hospitality

### H1

> Digital support built around the tourism season.

### Lead copy

> Helping visitor-focused businesses get found, earn bookings, and stay manageable when the season gets busy.

### Supporting copy

> From websites and booking systems to online ordering, listings, and seasonal updates, I help make the digital side of your business easier for both visitors and staff.

### Primary CTA

> Talk about your season

### Secondary CTA

> See common projects

### “Good fit for” card

**Heading:**

> Good fit for

**Items:**

* Restaurants, cafés, and breweries
* Inns, cottages, hotels, and campgrounds
* Attractions and experience providers
* Festivals, markets, and seasonal events
* Tourism organizations and destination partners

---

## Section 2 — Recognizable problems

### Heading

> You may be here because…

### Introductory copy

> Tourism businesses rarely have the luxury of fixing digital problems whenever they appear. The work has to fit around opening dates, staff capacity, visitor expectations, and a season that may account for much of the year’s revenue.

### Challenge 1

**Heading:**

> Your season is approaching quickly.

**Copy:**

> The website, listings, menus, rates, or booking information still need attention before visitors begin planning and arriving.

### Challenge 2

**Heading:**

> Visitors cannot find clear, current information.

**Copy:**

> Hours, availability, policies, menus, directions, and contact details differ across your website, Google listing, social pages, and booking platforms.

### Challenge 3

**Heading:**

> Booking or ordering creates unnecessary friction.

**Copy:**

> The process is difficult on mobile, requires too much manual follow-up, or depends on several tools that do not work well together.

### Challenge 4

**Heading:**

> Nobody has time to troubleshoot during the rush.

**Copy:**

> Once the season is underway, staff need systems they can trust and updates they can make without calling a developer for every small change.

---

## Section 3 — How I help

### Heading

> Build for the season you actually have

### Body copy

> Tourism technology has to work under real operational pressure. Visitors are often making decisions from their phones, staff are balancing several responsibilities, and small inconsistencies can quickly become repeated phone calls, missed bookings, or frustrated customers.

> I help you identify the parts of the customer journey that need attention, improve the systems behind them, and plan technical work around the rhythm of the business.

### Pull quote

> The goal is a smoother path from discovery to arrival—and fewer digital problems during the busiest part of the year.

### Optional supporting points

**Prepare**

> Update the website, listings, and customer information before the season begins.

**Simplify**

> Make booking, ordering, and inquiries easier for visitors and staff.

**Support**

> Keep critical information current without disrupting operations.

**Review**

> Use the quieter season to understand what worked and improve what did not.

---

## Section 4 — Common projects

### Heading

> Common projects

### Introductory copy

> Tourism projects often cross several platforms. The work may involve the website, booking tools, online listings, ordering systems, analytics, or the information staff use to serve visitors.

### Card 1 — Seasonal websites and visitor information

**Intro:**

> Give visitors the information they need before they contact, book, or arrive.

**Items:**

* New tourism and hospitality websites
* Pre-season website refreshes
* Menus, rates, packages, and policies
* Hours, directions, maps, and visitor information
* Mobile, accessibility, and performance improvements

### Card 2 — Bookings, ordering, and sales

**Intro:**

> Reduce friction between visitor interest and a confirmed purchase or reservation.

**Items:**

* Booking and reservation integrations
* Online ordering and delivery systems
* Ecommerce and gift cards
* Inquiry and group-booking forms
* Clearer booking and purchase journeys

### Card 3 — Listings, visibility, and analytics

**Intro:**

> Help customers find accurate information wherever they encounter the business.

**Items:**

* Google Business Profile support
* Tourism and directory listing consistency
* Search visibility and local SEO
* Campaign and booking analytics
* Seasonal reporting and performance reviews

### Card 4 — Seasonal support and planning

**Intro:**

> Schedule improvements around opening dates, busy periods, and limited staff capacity.

**Items:**

* Pre-season readiness reviews
* In-season website updates
* Technical troubleshooting
* Shoulder-season landing pages
* Post-season planning and documentation

### Closing prompt

> Not sure what needs attention before the season begins? Start with the questions visitors ask most often.

**Text link:**

> Talk about your season →

---

## Section 5 — What you can expect

### Heading

> What you can expect

### Introductory copy

> The work should respect the season, the staff doing the work, and the fact that every new tool creates something else the business must manage.

### Principle 1

**Heading:**

> Seasonal planning

**Copy:**

> Important changes are scheduled around opening dates, campaign windows, and the periods when your team has the capacity to participate.

### Principle 2

**Heading:**

> Visitor-first decisions

**Copy:**

> Mobile use, clear information, trust, booking confidence, and ease of contact shape the work.

### Principle 3

**Heading:**

> Practical operations

**Copy:**

> Recommendations account for staffing, workflows, training, and what can realistically be maintained during peak season.

### Principle 4

**Heading:**

> Manageable handoff

**Copy:**

> Staff receive the access, documentation, and guidance needed to keep information current.

---

## Section 6 — Relevant experience and proof

### Heading

> Experience on both sides of the counter

### Introductory copy

> My tourism and small-business experience began long before I became a developer. As a teenager, I worked on my nan’s chip truck at local festivals, learning firsthand how customer-facing businesses operate when the line is long and every small problem becomes immediate.

> Since then, I have supported restaurants, tourism operators, and regional organizations with websites, hosting, ecommerce, delivery systems, workshops, analytics, and public-facing digital products.

### Proof card 1

**Heading:**

> Restaurant and hospitality systems

**Copy:**

> Hosting and web infrastructure for a hotel restaurant, third-party takeout and delivery for a diner, online ordering, menus, ecommerce, and operational website support.

### Proof card 2

**Heading:**

> Tourism training and planning

**Copy:**

> AI and tourism workshops, practical digital guidance, seasonal planning, and help translating technical possibilities into useful business decisions.

### Proof card 3

**Heading:**

> Regional visitor and investment information

**Copy:**

> Public-facing dashboards, destination information, analytics, and digital tools designed to communicate regional value clearly.

### Supporting link

> See selected work →

---

## Section 7 — Final CTA

### Heading

> Let’s make the busy season easier.

### Copy

> Whether you are preparing for opening day, improving the booking experience, or fixing something that became painful last season, we can start with a practical review of what matters most.

### Primary button

> Talk about your season

### Secondary link

> Explore all services →

---

# 2. Arts, Culture & Community

## Page identity

**Navigation label:** Arts, Culture & Community
**Page slug:** `/services/arts-culture-community/`
**Template identifier:** `arts-culture-community`

## Audience

* Artists and collectives
* Galleries and studios
* Festivals and cultural events
* Museums and heritage organizations
* Theatres and music organizations
* Community groups and associations
* Nonprofits and volunteer-led initiatives
* Arts councils and cultural networks

## Page objective

Show that MRC understands:

* Limited budgets and grant-funded timelines
* Volunteer and board turnover
* Collaborative decision-making
* Accessibility and public communication
* Artist and participant intake
* Events, ticketing, submissions, and directories
* The need to avoid systems that depend on one technical person

## Primary conversion

The visitor starts a conversation about a new initiative, existing platform, public website, or workflow that needs to become clearer and more sustainable.

---

## Metadata and SEO

### HTML title

> Websites & Digital Systems for Arts and Community Organizations | MRC

### Meta description

> Accessible websites, directories, forms, event systems, and practical digital support for artists, cultural organizations, nonprofits, and community groups.

### Open Graph title

> Digital Support for Arts, Culture & Community

### Open Graph description

> Thoughtful websites and practical systems for creative, cultural, nonprofit, and community-led work.

### Suggested search themes

* Arts organization website
* Nonprofit web development PEI
* Festival website developer
* Artist directory website
* Community organization digital support
* Accessible nonprofit website
* Cultural organization technology consulting

---

## Section 1 — Hero

### Eyebrow

> For Arts, Culture & Community

### H1

> Digital systems that support creative and community work.

### Lead copy

> Websites, platforms, and practical tools for organizations built around people, participation, and shared purpose.

### Supporting copy

> I help artists, cultural groups, nonprofits, and community organizations create digital systems that are accessible, manageable, and able to survive changes in staff, boards, and volunteers.

### Primary CTA

> Tell me what you’re building

### Secondary CTA

> See common projects

### “Good fit for” card

**Heading:**

> Good fit for

**Items:**

* Artists, studios, and collectives
* Festivals and cultural events
* Galleries, museums, and heritage groups
* Nonprofits and community organizations
* Volunteer-led and grant-funded initiatives

---

## Section 2 — Recognizable problems

### Heading

> You may be here because…

### Introductory copy

> Creative and community projects often involve many contributors, limited resources, and knowledge spread across several people. The technology needs to make participation easier—not become another barrier.

### Challenge 1

**Heading:**

> One person knows how everything works.

**Copy:**

> The website, passwords, forms, and processes depend on a staff member or volunteer who may not always be available.

### Challenge 2

**Heading:**

> Information is scattered across too many places.

**Copy:**

> Event details, applications, artist information, memberships, files, and public updates live in separate tools with no clear source of truth.

### Challenge 3

**Heading:**

> A funded project needs a realistic digital plan.

**Copy:**

> The idea is strong, but the platform, scope, ongoing ownership, and technical requirements still need to be defined.

### Challenge 4

**Heading:**

> The system has to work for many different people.

**Copy:**

> Staff, volunteers, artists, participants, visitors, and board members may all interact with the same information in different ways.

---

## Section 3 — How I help

### Heading

> Build something people can carry forward

### Body copy

> Creative and community work changes as programs evolve, funding shifts, and new people step into leadership. That makes clear ownership, documentation, accessibility, and flexible systems especially important.

> I help shape websites and workflows that support participation without burying the organization in unnecessary technology or ongoing dependence on one specialist.

### Pull quote

> A useful system should strengthen the work and leave the knowledge with the community that owns it.

### Optional supporting points

**Listen**

> Understand the people, programs, and constraints shaping the project.

**Structure**

> Turn scattered needs into a clear and manageable system.

**Build**

> Use accessible tools that match available capacity.

**Share**

> Document the work so staff, boards, and volunteers can continue it.

---

## Section 4 — Common projects

### Heading

> Common projects

### Introductory copy

> These projects often combine public communication, participant information, internal coordination, and long-term ownership.

### Card 1 — Websites and public information

**Intro:**

> Make programs, events, and opportunities easier to understand and access.

**Items:**

* Organization and artist websites
* Festival and event websites
* Program and exhibition information
* Accessible public resources
* Heritage and cultural storytelling

### Card 2 — Artists, members, and participants

**Intro:**

> Create clearer ways to gather, organize, and publish information.

**Items:**

* Artist directories and online galleries
* Applications and submission forms
* Membership and registration workflows
* Participant intake systems
* Profiles, bios, and media collection

### Card 3 — Events, sales, and engagement

**Intro:**

> Support the practical systems behind public participation.

**Items:**

* Event calendars and schedules
* Ticketing and registration
* Donations and memberships
* External shop and ecommerce integrations
* Email and audience signup workflows

### Card 4 — Planning, access, and continuity

**Intro:**

> Make the work easier to maintain as people and programs change.

**Items:**

* Digital project planning
* Accessibility reviews
* Staff and volunteer documentation
* Platform and tool selection
* Training and handoff

### Closing prompt

> Have an idea but not a technical plan? Start with the people, purpose, and constraints.

**Text link:**

> Tell me what you’re building →

---

## Section 5 — What you can expect

### Heading

> What you can expect

### Introductory copy

> Good systems should respect the organization’s mission, budget, contributors, and responsibility to the people it serves.

### Principle 1

**Heading:**

> Collaborative planning

**Copy:**

> The work includes the people who understand the programs, participants, and community—not just the technical requirements.

### Principle 2

**Heading:**

> Accessibility from the start

**Copy:**

> Public information and digital participation should work for as many people as possible.

### Principle 3

**Heading:**

> Respect for capacity

**Copy:**

> The solution should fit available staff time, volunteer effort, funding, and long-term maintenance.

### Principle 4

**Heading:**

> Shared ownership

**Copy:**

> Access, documentation, and decision-making remain with the organization rather than one technical gatekeeper.

---

## Section 6 — Relevant experience and proof

### Heading

> Experience with collaborative and community-led work

### Introductory copy

> My work includes artist platforms, intake systems, accessible web planning, educational programs, public information, and projects shaped by multiple contributors.

> I am comfortable working with writers, designers, artists, board members, staff, volunteers, and funders to turn a shared idea into something practical.

### Proof card 1

**Heading:**

> Artist and cultural platforms

**Copy:**

> Website architecture, artist profiles, gallery planning, external shop integrations, and intake systems designed for a growing artist-led initiative.

### Proof card 2

**Heading:**

> Accessible public communication

**Copy:**

> Readable content structures, accessible interfaces, forms, event information, and systems designed for non-technical audiences.

### Proof card 3

**Heading:**

> Documentation and continuity

**Copy:**

> Clear workflows, role ownership, platform guidance, and handoff materials that reduce reliance on institutional memory.

### Supporting link

> See selected work →

---

## Section 7 — Final CTA

### Heading

> Build something your community can carry forward.

### Copy

> Bring the idea, the existing platform, the funding requirements, or the messy collection of notes. We can shape a practical and sustainable way forward.

### Primary button

> Tell me what you’re building

### Secondary link

> Explore all services →

---

# 3. Organizations & Institutions

## Page identity

**Navigation label:** Organizations & Institutions
**Page slug:** `/services/organizations-institutions/`
**Template identifier:** `organizations-institutions`

## Audience

* Municipalities
* Economic development organizations
* Chambers and business associations
* Colleges and training organizations
* Larger nonprofits
* Public agencies
* Regional partnerships
* Corporations with internal teams
* Organizations managing public information or operational systems

## Page objective

Show that MRC can support projects involving:

* Multiple stakeholders
* Public accountability
* Accessibility
* Data governance
* Internal ownership
* Vendor coordination
* Strategy and implementation
* Documentation and continuity
* Technical and non-technical teams

## Primary conversion

A decision-maker starts a conversation about a complex digital initiative, systems problem, public-facing platform, data product, or internal modernization need.

---

## Metadata and SEO

### HTML title

> Digital Strategy & Systems for Organizations | Manny Roy Consulting

### Meta description

> Technical strategy, websites, dashboards, analytics, accessibility, automation, and implementation support for organizations and institutions.

### Open Graph title

> Clear Technical Systems for Complex Organizations

### Open Graph description

> Strategy and implementation for teams balancing public responsibility, internal operations, and long-term ownership.

### Suggested search themes

* Digital strategy consultant Atlantic Canada
* Organization website modernization
* Public dashboard development
* Economic development dashboard
* Technical consultant for nonprofits
* Data visualization consultant
* Digital systems audit
* AI training for organizations

---

## Section 1 — Hero

### Eyebrow

> For Organizations & Institutions

### H1

> Clear technical systems for complex organizations.

### Lead copy

> Strategy, data, websites, and implementation support for teams balancing public responsibility, internal operations, and long-term ownership.

### Supporting copy

> I help organizations turn broad mandates, scattered requirements, and existing systems into practical digital plans and maintainable outcomes.

### Primary CTA

> Discuss an organizational need

### Secondary CTA

> See common projects

### “Good fit for” card

**Heading:**

> Good fit for

**Items:**

* Municipal and regional organizations
* Economic development and business groups
* Colleges and training organizations
* Larger nonprofits and associations
* Internal teams managing public or operational systems

---

## Section 2 — Recognizable problems

### Heading

> You may be here because…

### Introductory copy

> Organizational projects are rarely difficult because of one missing feature. They become difficult when goals, stakeholders, data, platforms, and ownership are not aligned.

### Challenge 1

**Heading:**

> Several teams influence the same system.

**Copy:**

> Leadership, communications, operations, technical staff, vendors, and public users all have different requirements and priorities.

### Challenge 2

**Heading:**

> The current tools grew without a shared plan.

**Copy:**

> Platforms, spreadsheets, integrations, and workarounds accumulated over time, making ownership and future decisions unclear.

### Challenge 3

**Heading:**

> Public information must be accurate and accessible.

**Copy:**

> The system needs to communicate clearly, meet accessibility responsibilities, and remain trustworthy as information changes.

### Challenge 4

**Heading:**

> A funded or approved initiative still needs implementation structure.

**Copy:**

> The mandate exists, but scope, platform choices, data sources, governance, and maintenance responsibilities remain unresolved.

---

## Section 3 — How I help

### Heading

> Connect strategy to implementation

### Body copy

> I work between organizational goals and technical delivery. That may mean clarifying requirements, auditing an existing system, coordinating a public-facing build, designing a data product, or documenting how the finished system should be maintained.

> My role is often to translate between technical and non-technical stakeholders so decisions remain understandable, realistic, and tied to the purpose of the project.

### Pull quote

> The finished system should make sense to the people approving it, building it, using it, and maintaining it.

### Optional supporting points

**Clarify**

> Define the problem, users, responsibilities, and constraints.

**Plan**

> Translate goals into a realistic technical path.

**Deliver**

> Build, coordinate, or quality-check the implementation.

**Transfer**

> Document the system so knowledge and ownership remain internal.

---

## Section 4 — Common projects

### Heading

> Common projects

### Introductory copy

> Engagements may focus on a public product, an internal system, a specific implementation, or the planning needed to move a larger initiative forward.

### Card 1 — Public websites and information systems

**Intro:**

> Make public information clear, accessible, and easier to maintain.

**Items:**

* Organizational website modernization
* Public resource hubs and directories
* Accessible digital services
* Searchable information systems
* Content and platform governance

### Card 2 — Data, dashboards, and reporting

**Intro:**

> Turn complex information into useful tools for decisions and public communication.

**Items:**

* Public-facing dashboards
* Data visualization and reporting
* Analytics strategy
* Data-source planning
* Repeatable update workflows

### Card 3 — Strategy, audits, and planning

**Intro:**

> Understand the current state and define a practical path forward.

**Items:**

* Technical and systems audits
* Platform and architecture planning
* Workflow and process reviews
* Vendor and proposal evaluation
* Digital roadmaps and prioritization

### Card 4 — Implementation, training, and adoption

**Intro:**

> Support teams through change without losing clarity or internal ownership.

**Items:**

* Custom tools and integrations
* AI adoption and workshops
* Staff training
* Documentation and handoff
* Technical quality assurance

### Closing prompt

> Have a mandate but not yet a clear technical path? Start with the organizational need and the constraints around it.

**Text link:**

> Discuss the project →

---

## Section 5 — What you can expect

### Heading

> What you can expect

### Introductory copy

> Complex projects need enough structure to remain accountable without becoming slowed by unnecessary process.

### Principle 1

**Heading:**

> Stakeholder-aware discovery

**Copy:**

> Requirements are gathered from the people responsible for the outcome, the implementation, and the ongoing work.

### Principle 2

**Heading:**

> Clear decision logic

**Copy:**

> Recommendations explain the trade-offs, constraints, and reasons behind the proposed approach.

### Principle 3

**Heading:**

> Sustainable implementation

**Copy:**

> Platform, data, and workflow decisions account for future staffing, maintenance, and organizational capacity.

### Principle 4

**Heading:**

> Documented ownership

**Copy:**

> Access, update processes, source logic, and operational responsibilities are made explicit before handoff.

---

## Section 6 — Relevant experience and proof

### Heading

> Experience turning complex requirements into usable systems

### Introductory copy

> My work includes public-facing dashboards, accessible websites, analytics, education, technical planning, and systems designed for teams that need to maintain them after launch.

> I am especially effective where data, public communication, internal workflows, and long-term ownership overlap.

### Featured proof — Pictou County Partnership

**Heading:**

> Investor-facing economic dashboard

**Copy:**

> Designed and delivered a regional economic dashboard using authoritative public data, documented calculated metrics, a maintainable spreadsheet structure, and a repeatable Tableau publishing workflow.

**Supporting outcomes:**

* Clear information for investors and site selectors
* A narrow, dependable data-source strategy
* Documented regional calculations
* Low-overhead publishing
* Full source-file and administrative handoff
* Update instructions for future staff

### Proof card 2

**Heading:**

> Training and technical translation

**Copy:**

> Workshops, educational content, and practical guidance that help non-technical teams understand analytics, AI, accessibility, and digital-system decisions.

### Proof card 3

**Heading:**

> Cross-functional implementation

**Copy:**

> Collaboration with leadership, communications teams, designers, developers, project managers, and external vendors across planning and delivery.

### Supporting link

> View the economic dashboard case study →

---

## Section 7 — Final CTA

### Heading

> Need a clearer path through a complex project?

### Copy

> Bring the mandate, existing systems, stakeholder needs, and constraints. I can help turn them into a practical plan and a system your organization can confidently own.

### Primary button

> Discuss your project

### Secondary link

> Explore all services →

---

# 4. Agencies & Development Teams

## Page identity

**Navigation label:** Agencies & Development Teams
**Page slug:** `/services/agencies-development-teams/`
**Template identifier:** `agencies-development-teams`

## Audience

* Creative and marketing agencies
* Web agencies
* Product studios
* Freelance collectives
* Internal development teams
* Internal marketing and digital teams
* Project managers needing specialist technical support
* Teams requiring temporary or overflow capacity

## Page objective

Show that Manny can:

* Join an existing delivery team
* Own a defined technical workstream
* Work independently
* Communicate risks clearly
* Collaborate without territorial behaviour
* Support white-label or client-facing delivery
* Provide architecture, implementation, QA, rescue, and documentation
* Work across WordPress, Ghost, ecommerce, analytics, accessibility, automation, and custom systems

## Primary conversion

An agency or team shares a project, capacity gap, difficult implementation, or technical workstream requiring experienced support.

---

## Metadata and SEO

### HTML title

> Subcontract Web Development & Technical Support | Manny Roy Consulting

### Meta description

> Subcontract development, architecture, ecommerce, accessibility, analytics, automation, and technical delivery support for agencies and internal teams.

### Open Graph title

> Experienced Technical Support for Agencies & Development Teams

### Open Graph description

> Flexible subcontract development and technical leadership that fits into your existing team and delivery process.

### Suggested search themes

* Subcontract web developer Canada
* White-label WordPress developer
* Agency development support
* Freelance technical architect
* WooCommerce subcontractor
* Ghost developer Canada
* Accessibility development consultant
* Web project rescue consultant

---

## Section 1 — Hero

### Eyebrow

> For Agencies & Development Teams

### H1

> Experienced technical support that fits into your team.

### Lead copy

> Subcontract development, architecture, analytics, accessibility, and implementation support for teams that need dependable capacity without another full-time hire.

### Supporting copy

> I can own a defined workstream, support an existing delivery team, or step into a difficult project that needs technical clarity and forward movement.

### Primary CTA

> Discuss capacity

### Secondary CTA

> View capabilities

### “Good fit for” card

**Heading:**

> Good fit for

**Items:**

* Agencies with overflow development work
* Teams missing a specific technical capability
* Complex WordPress and ecommerce projects
* Projects needing architecture, QA, or rescue
* Client-facing or white-label delivery arrangements

---

## Section 2 — Recognizable problems

### Heading

> You may be here because…

### Introductory copy

> The project is already moving. You do not need another broad discovery process—you need someone who can understand the context, take ownership, and integrate with the way your team delivers work.

### Challenge 1

**Heading:**

> The project exceeds current capacity.

**Copy:**

> The work is sold, deadlines are approaching, and the internal team needs experienced implementation support.

### Challenge 2

**Heading:**

> A specialist problem is blocking delivery.

**Copy:**

> Ecommerce, integrations, accessibility, analytics, performance, hosting, or architecture require deeper attention than the core team can currently provide.

### Challenge 3

**Heading:**

> The build has become fragile or difficult to launch.

**Copy:**

> Scope, infrastructure, ownership, or technical debt is creating risk near the point where the project needs to ship.

### Challenge 4

**Heading:**

> You need someone who can work without creating more management.

**Copy:**

> The contractor must communicate clearly, respect existing relationships, document the work, and escalate risks before they become surprises.

---

## Section 3 — How I help

### Heading

> Add capacity without adding chaos

### Body copy

> I work comfortably alongside designers, strategists, developers, marketers, project managers, and client stakeholders.

> Depending on the engagement, I can take responsibility for a defined technical deliverable, embed within the project team, provide architecture and planning, or stabilize work that has become difficult to finish.

### Pull quote

> The goal is to move the project forward while making the surrounding team’s work easier—not create another layer to manage.

### Optional supporting points

**Align**

> Understand the scope, delivery model, responsibilities, and existing decisions.

**Own**

> Take clear responsibility for the assigned workstream.

**Communicate**

> Surface progress, dependencies, and risk without unnecessary noise.

**Hand off**

> Leave clean implementation notes, documentation, and next steps.

---

## Section 4 — Core capabilities

For this audience, change the section heading from **Common projects** to **Core capabilities**.

### Heading

> Core capabilities

### Introductory copy

> I can support a specific implementation need or work across the broader technical system when the project requires it.

### Card 1 — Web platforms and ecommerce

**Items:**

* WordPress and WooCommerce
* Ghost development
* Custom themes and components
* Ecommerce architecture
* Checkout, shipping, and delivery integrations
* Hosting and launch support

### Card 2 — Integrations and applications

**Items:**

* APIs and third-party integrations
* Forms and data workflows
* Custom web applications
* Automation
* Applied AI tools
* Internal utilities and prototypes

### Card 3 — Quality and performance

**Items:**

* Accessibility implementation
* Core Web Vitals and performance
* Analytics and measurement
* Technical SEO
* QA and launch readiness
* Platform stabilization

### Card 4 — Strategy and technical leadership

**Items:**

* Discovery and architecture
* Technical estimation
* System audits
* Migration planning
* Documentation and handoff
* Vendor and implementation review

### Closing prompt

> Need something narrower? I am equally comfortable owning one difficult integration or supporting a full technical workstream.

**Text link:**

> Discuss the scope →

---

## Section 5 — Engagement models

For this audience, replace the generic expectations section with a clearer engagement-model section.

### Heading

> Ways I can support the team

### Introductory copy

> The engagement can be structured around a deliverable, a period of capacity, or a technical problem that needs experienced ownership.

### Model 1

**Heading:**

> Defined workstream

**Copy:**

> Ownership of a specific build, integration, migration, platform, or technical deliverable.

### Model 2

**Heading:**

> Embedded delivery support

**Copy:**

> Additional hands-on capacity within an existing project team and workflow.

### Model 3

**Heading:**

> Technical advisory

**Copy:**

> Architecture, discovery, estimation, audits, risk review, or implementation planning.

### Model 4

**Heading:**

> Rescue and stabilization

**Copy:**

> Focused support when a project is fragile, delayed, under-documented, or difficult to launch.

---

## Section 6 — What teams can expect

### Heading

> What teams can expect

### Principle 1

**Heading:**

> Clear ownership

**Copy:**

> Responsibilities, assumptions, dependencies, and deliverables are made explicit from the beginning.

### Principle 2

**Heading:**

> Direct communication

**Copy:**

> Progress and risks are shared clearly, without waiting until a deadline is already in danger.

### Principle 3

**Heading:**

> Respect for relationships

**Copy:**

> Agency, team, and client boundaries are handled professionally in white-label or visible delivery arrangements.

### Principle 4

**Heading:**

> Clean handoff

**Copy:**

> Implementation notes, access, decisions, and outstanding work are documented for the people carrying the project forward.

---

## Section 7 — Relevant experience and proof

### Heading

> Technical breadth with delivery experience

### Introductory copy

> My work spans client-facing websites, ecommerce, hosting, analytics, accessibility, performance, automation, data, and custom tools.

> I have worked independently and within multidisciplinary teams, supporting designers, project managers, marketers, developers, and client stakeholders through complex builds and launches.

### Proof card 1

**Heading:**

> Ecommerce and operational integrations

**Copy:**

> WooCommerce architecture, payments, shipping, local delivery, product structures, transactional email, analytics, and launch coordination.

### Proof card 2

**Heading:**

> Platform and performance work

**Copy:**

> WordPress, Ghost, custom implementations, Core Web Vitals, accessibility, technical SEO, hosting, migrations, and stabilization.

### Proof card 3

**Heading:**

> Architecture and handoff

**Copy:**

> Technical planning, requirements translation, documentation, client training, and delivery systems designed for ongoing ownership.

### Suggested capability links

* View selected work
* Read the Core Web Vitals guide
* View GitHub
* Discuss a project

---

## Section 8 — Final CTA

### Heading

> Need technical capacity without adding another full-time role?

### Copy

> Send the project context, likely scope, delivery timeline, and where the team needs support. I can help determine whether the work is a good fit.

### Primary button

> Discuss the work

### Secondary link

> Explore all services →

---

# Shared related-navigation copy

Use the same component at the bottom of all four pages.

## Heading

> Explore services by audience

## Links

* Small & Medium Businesses
* Tourism & Hospitality
* Arts, Culture & Community
* Organizations & Institutions
* Agencies & Development Teams
* All Services

The current page should be marked with `aria-current="page"` and either omitted from the links or displayed as non-clickable text.

---

# Content implementation notes

## Maintain audience distinctions

Several services appear on more than one page. That is expected.

The wording should change according to what the audience cares about:

| Capability    | Small business            | Tourism                       | Community                       | Organizations                     | Agencies                   |
| ------------- | ------------------------- | ----------------------------- | ------------------------------- | --------------------------------- | -------------------------- |
| Website       | Customers and credibility | Visitors and bookings         | Participation and public access | Governance and public information | Platform implementation    |
| Automation    | Less admin                | Less seasonal pressure        | Volunteer capacity              | Operational consistency           | Integration delivery       |
| Analytics     | Understand what works     | Seasonal demand and campaigns | Program participation           | Reporting and decisions           | Measurement implementation |
| Documentation | Owner confidence          | Staff updates                 | Continuity through turnover     | Institutional ownership           | Technical handoff          |

## CTA query parameters

Recommended destinations:

```text
/contact/?audience=tourism-hospitality
/contact/?audience=arts-culture-community
/contact/?audience=organizations-institutions
/contact/?audience=agencies-development-teams
```

## Recommended analytics values

```text
audience = tourism_hospitality
audience = arts_culture_community
audience = organizations_institutions
audience = agencies_development_teams
```

## Proof hierarchy

Use the strongest evidence available for each audience:

* **Tourism:** operational and seasonal experience
* **Arts and community:** collaboration, accessibility, intake, and continuity
* **Organizations:** dashboard, data, documentation, and stakeholder work
* **Agencies:** technical depth, delivery reliability, and integrations

## Final editorial test

Each page should leave its intended visitor with a different conclusion:

### Tourism & Hospitality

> Manny understands the season and the pressure behind serving visitors.

### Arts, Culture & Community

> Manny understands collaborative work and will leave us able to carry it forward.

### Organizations & Institutions

> Manny can make a complex project understandable, accountable, and maintainable.

### Agencies & Development Teams

> Manny can take ownership of difficult technical work without creating more management.
