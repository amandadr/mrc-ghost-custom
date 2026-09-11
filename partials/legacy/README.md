# Legacy partials

These atoms are **not used on live marketing pages**. They remain so `/component-library/` can still render historical fixtures.

| Partial | Replaced by |
|---------|-------------|
| `service-card` | `feature-item` |
| `principle-item` | (band removed; copy lives in other home sections) |
| `common-project-card` | `feature-item` |
| `engagement-way` | `process-step` |
| `audience-expectation` | not wired on `services-*.hbs` |
| `audience-proof-card` | not wired on `services-*.hbs` |

Include as `{{> "legacy/service-card"}}`. Do not add new production call sites. To retire a demo, remove it from `custom-component-library.hbs` then delete the file here.
