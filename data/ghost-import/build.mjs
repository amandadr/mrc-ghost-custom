#!/usr/bin/env node
/**
 * Build a Ghost Labs import JSON from the HTML posts in this folder.
 *
 * Run from the theme repo:
 *   NODE_PATH="../ghost-local/current/node_modules" node data/ghost-import/build.mjs
 *
 * Upload the output in Ghost Admin → Settings → Labs → Import.
 * Posts import as drafts so you can edit, then publish.
 */

import { createHash, randomBytes } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ghostRoot = join(__dirname, "../../../ghost-local/current");
const require = createRequire(join(ghostRoot, "package.json"));
const { htmlToLexical } = require("@tryghost/kg-html-to-lexical");

function oid() {
  return randomBytes(12).toString("hex");
}

function uuidFromSlug(slug) {
  const hex = createHash("sha1").update(`mrc-resource:${slug}`).digest("hex");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-a${hex.slice(17, 20)}-${hex.slice(20, 32)}`;
}

function plaintext(html) {
  return html
    .replace(/<hr\s*\/?>/gi, "\n\n")
    .replace(/<\/(p|h2|h3|li|blockquote)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8220;|&ldquo;/g, "“")
    .replace(/&#8221;|&rdquo;/g, "”")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const TAGS = [
  { id: oid(), name: "Playbook", slug: "playbook", description: "Step-by-step resources." },
  { id: oid(), name: "Explainer", slug: "explainer", description: "What this actually means." },
  { id: oid(), name: "Field note", slug: "field-note", description: "Opinionated notes from the work." },
  { id: oid(), name: "Tourism & Hospitality", slug: "tourism-hospitality", description: "For tourism and hospitality operators." },
  { id: oid(), name: "Small & Medium Businesses", slug: "small-businesses", description: "For owner-operated and growing businesses." },
];

const tagId = Object.fromEntries(TAGS.map((t) => [t.slug, t.id]));

const POSTS_META_SPEC = [
  {
    file: "01-what-to-send-before-a-first-call.html",
    title: "What to send before a first call",
    slug: "what-to-send-before-a-first-call",
    custom_excerpt:
      "You do not need a technical spec. Ten minutes of honest notes is enough for a useful first conversation.",
    meta_description:
      "What to send before a first call with a web developer: the URL, what is frustrating, and who currently updates the site.",
    tags: ["playbook"],
  },
  {
    file: "02-website-and-google-listing.html",
    title: "Your website and your Google listing are two different things",
    slug: "website-and-google-listing",
    custom_excerpt:
      "Visitors often see two versions of you. Hours, menus, and whether you are open live in more than one place — and they drift.",
    meta_description:
      "Why your website and Google listing disagree, what a source of truth is, and how to fix hours and booking paths this week.",
    tags: ["explainer", "tourism-hospitality"],
  },
  {
    file: "03-you-probably-do-not-need-a-new-website.html",
    title: "You probably do not need a new website",
    slug: "you-probably-do-not-need-a-new-website",
    custom_excerpt:
      "A new theme is a poor cure for a site nobody can update, and a poorer cure for a site that does not say what to do next.",
    meta_description:
      "Why most businesses need repair, not a rebuild — and the cases where starting over is the honest answer.",
    tags: ["field-note", "small-businesses"],
  },
];

const now = "2026-09-10 21:00:00";
const dummyAuthorId = "000000000000000000000001";

const posts = [];
const postsTags = [];
const postsAuthors = [];
const postsMeta = [];

for (const spec of POSTS_META_SPEC) {
  const html = await readFile(join(__dirname, "posts", spec.file), "utf8");
  const lexical = htmlToLexical(html);
  const postId = oid();

  posts.push({
    id: postId,
    uuid: uuidFromSlug(spec.slug),
    title: spec.title,
    slug: spec.slug,
    mobiledoc: null,
    lexical: JSON.stringify(lexical),
    html,
    comment_id: postId,
    plaintext: plaintext(html),
    feature_image: null,
    featured: 0,
    type: "post",
    status: "draft",
    locale: null,
    visibility: "public",
    email_recipient_filter: "all",
    created_at: now,
    updated_at: now,
    published_at: null,
    custom_excerpt: spec.custom_excerpt,
    codeinjection_head: null,
    codeinjection_foot: null,
    custom_template: null,
    canonical_url: null,
    newsletter_id: null,
    show_title_and_feature_image: 1,
  });

  spec.tags.forEach((slug, sort_order) => {
    postsTags.push({
      id: oid(),
      post_id: postId,
      tag_id: tagId[slug],
      sort_order,
    });
  });

  postsAuthors.push({
    id: oid(),
    post_id: postId,
    author_id: dummyAuthorId,
    sort_order: 0,
  });

  postsMeta.push({
    id: oid(),
    post_id: postId,
    og_image: null,
    og_title: spec.title,
    og_description: spec.custom_excerpt,
    twitter_image: null,
    twitter_title: spec.title,
    twitter_description: spec.custom_excerpt,
    meta_title: spec.title,
    meta_description: spec.meta_description,
    email_subject: null,
    frontmatter: null,
    feature_image_alt: null,
    feature_image_caption: null,
    email_only: 0,
  });
}

const output = {
  db: [
    {
      meta: {
        exported_on: Date.parse("2026-09-10T21:00:00Z"),
        version: "6.30.0",
      },
      data: {
        posts,
        tags: TAGS.map((t) => ({
          id: t.id,
          name: t.name,
          slug: t.slug,
          description: t.description,
          feature_image: null,
          parent_id: null,
          visibility: "public",
          og_image: null,
          og_title: null,
          og_description: null,
          twitter_image: null,
          twitter_title: null,
          twitter_description: null,
          meta_title: null,
          meta_description: null,
          codeinjection_head: null,
          codeinjection_foot: null,
          canonical_url: null,
          accent_color: null,
          created_at: now,
          updated_at: now,
        })),
        posts_tags: postsTags,
        posts_authors: postsAuthors,
        posts_meta: postsMeta,
      },
    },
  ],
};

const outFile = join(__dirname, "mrc-first-three-resources.json");
await writeFile(outFile, JSON.stringify(output, null, 2));
console.log(`Wrote ${posts.length} draft posts to ${outFile}`);
