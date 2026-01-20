---
title: How We Built Our CMS with Claude Code
slug: how-we-built-our-cms
description: A behind-the-scenes look at building a custom markdown-based CMS for BuildAtScale using Claude Code, Astro, and the GitHub API.
---

\# How We Built Our CMS with Claude Code

We needed a simple way to edit content on our Astro website without touching code every time. Instead

of reaching for a heavy headless CMS, we built our own lightweight solution in a single coding session

with Claude Code.

\## The Requirements

We wanted something minimal but functional:

\- **Markdown-based content** stored directly in our GitHub repository

\- **Password-protected admin panel** for editing

\- **WYSIWYG editor** so we don't have to write raw markdown

\- **Drag-and-drop image uploads** to Cloudflare R2

\- **Draft PR workflow** so changes don't go straight to production

\## The Stack

The CMS is built entirely within our existing Astro site:

\- **Astro** for the admin pages and API routes

\- **React + TipTap** for the rich text editor

\- **Cloudflare R2** for media storage

\- **GitHub API** for persisting content changes

\- **Tailwind CSS** for styling the admin UI

\## How It Works

When you edit content in the admin panel, here's what happens:

1\. The TipTap editor converts your formatted text to HTML

2\. Turndown converts that HTML back to clean Markdown

3\. The content is committed to a new branch via the GitHub API

4\. A draft pull request is created automatically

5\. Cloudflare builds a preview of your changes

This means every content change gets a preview URL before it goes live. No more "oops I broke

production" moments.

\## The Draft PR Workflow

One thing we added after the initial build was a draft PR system. Instead of committing directly to

main (scary), the CMS creates branches with a `cms/` prefix and opens draft PRs.

If you're making multiple edits, you can add them all to the same PR. The admin panel shows your

existing drafts and lets you choose where to save.

\## Building It

The entire CMS was built in a single session using Claude Code. We started with a plan document

outlining the architecture, then Claude implemented each phase:

1\. Dependencies and configuration

2\. Content collections for blocks and pages

3\. Authentication middleware

4\. Admin dashboard UI

5\. TipTap editor integration

6\. R2 media management

7\. GitHub API for persistence

8\. Draft PR workflow (added later)

The implementation hit a few bumps—dynamic routes needing server rendering, TipTap SSR hydration

issues, content-type handling in the login API—but Claude worked through each one and documented the

solutions.

\## What We Learned

Building your own CMS sounds intimidating, but with the right tools it's surprisingly approachable. The

key insights:

\- **GitHub as a database** works well for content that doesn't change constantly

\- **Draft PRs** give you a safety net and preview builds for free

\- **TipTap** is excellent for building custom editors

\- **Claude Code** can implement a full feature from a plan document

The whole thing is about 30 files and integrates seamlessly with our existing site. No external

services to manage, no API keys to rotate (except GitHub), and content lives right alongside our code.

\## Try It Yourself

If you're running an Astro site on Cloudflare, this approach might work for you too. The

architecture is simple enough to adapt, and having your content in git means you get version history

for free.

The full implementation details are in our `plans/CMS.md` file if you want to see how it all fits

together.