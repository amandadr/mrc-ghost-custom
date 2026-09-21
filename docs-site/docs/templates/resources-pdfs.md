---
sidebar_position: 6
---

# Whitepapers + case studies (PDF-first resources)

**Whitepapers** are PDF-first: the PDF is the primary content shown to readers using **PDF.js**. **Case studies** use the same layout as blog posts; a PDF in the body is optional and embeds in place.

In Ghost, each resource is still a **post**. For whitepapers, the post body is used to store **one PDF link** (which the theme reads and then embeds).


## Storage + URL requirements (your CDN)

PDF.js needs a URL it can fetch from the browser.

- **Use HTTPS**
- **Direct PDF URL** (should end in `.pdf`)
- **CORS**: allow your site origin (e.g. `https://mannyroy.com`) to fetch the PDF
- **No auth required** (this is *soft gated*, see below)

### Soft gating expectations

Whitepaper pages are gated by Ghost Members, but the PDF URL itself is still a URL. Keep it “well hidden”:

- Use **unguessable filenames** (random suffixes)
- Don’t link PDFs anywhere public
- Avoid predictable paths like `/whitepapers/foo.pdf`

## Add a whitepaper

### 1) Upload the PDF to your storage/CDN

- Upload the PDF and copy the final public URL (e.g. `https://assets.yoursite.com/resources/whitepapers/...pdf`)
- Prefer a long, unguessable filename.

### 2) Create a new post in Ghost

- **Title**: the whitepaper title
- **Tag**: `whitepaper`
- **Visibility**: **Members** (members-only)
- **Custom excerpt**: short, public summary (optional but recommended; it displays above the viewer)

### 3) Add the PDF URL (the only required body content)

In the editor body, add **one** link to the PDF URL using any of:

- Bookmark card
- Button card
- Normal link

The theme will:

- hide the post body
- detect the first `.pdf` link
- render the PDF using PDF.js (members only)

### 4) Publish

Sanity check after publishing:

- Signed out: you should see the **email gate** (no PDF viewer)
- Signed in (member): you should see the **PDF viewer**
- In Admin → Members: new signups from this gate get a label like `whitepaper:<post-slug>`

## Add a case study

Case studies render like **blog posts** (date, read time, and tag above the title; excerpt; feature image; article body; author sign-off; CTA). They are public.

A PDF in the body is optional. If you include a `.pdf` link, the theme embeds it with PDF.js and leaves the rest of the article in place.

### 1) Create a new post in Ghost

- **Title**: the case study title
- **Tag**: `case-study`
- **Visibility**: **Public**
- **Custom excerpt**: short summary (optional but recommended; it shows under the title)
- **Feature image**: optional; same treatment as a blog post

### 2) Write the article

Use the Ghost editor as you would for a blog post. If you also have a PDF, upload it to your CDN and add **one** link/card to that URL in the body.

### 3) Publish

Sanity check after publishing:

- The header matches a blog post (meta above the title)
- Signed out: the page is public
- If you added a PDF link, the viewer embeds in the body

## Common troubleshooting

- **PDF viewer is blank**
  - Confirm the stored link is a **direct** `.pdf` URL (not a share page)
  - Check CORS on your CDN/storage allows your site origin
- **Works for you, fails for others**
  - Confirm the PDF URL is reachable publicly (soft gating means no auth prompts)
- **Viewer shows, but PDF download is blocked**
  - Ensure the CDN serves the PDF with `Content-Type: application/pdf`

