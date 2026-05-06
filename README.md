# The Deliberate Pause — homepage v0.1

Static, single-file homepage built per Avi's direction (5 May 2026):

- Homepage first, no JS complexity
- Tool pages (Jackson Triangle, etc.) come later
- 4 protocol cards on homepage are display-only for v1
- Nav CTA consistent everywhere
- Built modular so sections can be added later
- "UI is the new API" — clean semantic HTML, schema.org, llms.txt

## Files

| File | What it does |
|---|---|
| `index.html` | The homepage. Single file, embedded CSS, one tiny JS line for the year stamp. |
| `llms.txt` | LLM-discoverability summary. Sits at root, served as text/markdown. |
| `robots.txt` | Permissive. Explicit allow for major LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.). |
| `sitemap.xml` | Four URLs for now (/, /about, /read, /pause). Grows as pages ship. |
| `vercel.json` | Vercel config. Clean URLs, no trailing slashes, proper Content-Type for llms.txt. |

## Stack

- HTML5 + CSS3 (vanilla, embedded). No framework, no build step.
- Fonts: Fraunces (serif headlines) + Inter (sans UI), loaded from Google Fonts.
- Hosting: Vercel (drop the folder in as a static project).
- Domain: thedeliberatepause.com (TBD)
- CMS: not in v1. Static content for now. Webflow port + CMS layer comes after homepage and About are signed off.

## Design tokens

All in CSS variables at the top of the `<style>` block. Edit there, propagate everywhere.

```
--color-charcoal: #1A1A1A;     /* dark sections */
--color-cream: #F5F0EB;        /* default bg */
--color-beige: #EDE6DA;        /* alt bg */
--color-amber: #C4873A;        /* accent (italics, eyebrow numerals) */
--color-terracotta: #B8694A;   /* CTA button */
--font-serif: "Fraunces"...    /* headlines */
--font-sans: "Inter"...        /* UI */
--max-width: 1280px;           /* desktop container */
```

## Section map

```
nav (sticky)
01  Hero
02  Pain points (what it costs)
03  Avi intro
04  Logo bar (read by / backed by)
05  The Pause + The Chain SVG + 4 protocol cards
06  Featured essays (3 cards)
07  Testimonials (4 cards)
08  What TDP is / isn't
09  Avi journey (building → breaking → re-building)
10  Newsletter + footer
```

Each section is a standalone `<section>` with its own class. Drop a new one in by copying an existing block and renaming.

## Placeholder slots (need real content)

- Hero image / video (1920x1080 desktop, 780x1170 mobile)
- Avi portrait (800x1000)
- 5 press/backer logos (300x100, SVG preferred)
- 3 essay thumbnails (400x400)
- 4 testimonial quotes + names + roles + avatars (300x300)

See `TDP_Homepage_Image_Sizes_for_Avi.md` for the full brief.

## What's intentionally NOT in v1

- ConvertKit form integration (form posts to `#` for now — wire when account ID is ready)
- The breathe widget animation (waiting on /pause page build)
- Jackson Triangle interactive (deferred per Avi)
- Filter chips (lives on /read, not homepage)
- 90-second timer (deferred per Avi)
- Real OG image at /og.jpg (placeholder reference in <meta>)

## Deploy to Vercel (3 commands)

```
cd tdp-site
npx vercel --prod
# (or push to GitHub and connect via Vercel dashboard)
```

## Schema.org / structured data

Inline `<script type="application/ld+json">` covers:
- WebSite
- Organization (with founder ref)
- Person (Avi, with knowsAbout)

This is the minimum for LLM discoverability. As we ship essays, each `/read/[slug]` will need its own `Article` schema.

## Validation checks before going live

1. Run through https://validator.schema.org/ — paste full HTML
2. Run through https://search.google.com/test/rich-results
3. Lighthouse on mobile + desktop (target: 95+ on Performance, Accessibility, SEO)
4. View as `User-Agent: GPTBot` and `User-Agent: ClaudeBot` to confirm nothing breaks
5. Visual diff at 1280px and 390px viewports
