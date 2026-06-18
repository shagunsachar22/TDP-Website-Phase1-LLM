# Handoff: Match HTML to Site Theme

Reconstructed from the current repository and commits `d1aff6d` through `43e26b6`.

## Objective

Add a native on-site Articles layer to The Deliberate Pause while preserving the established Phase 1 visual system. These are evergreen SEO articles hosted on the TDP domain, distinct from weekly Substack letters.

## Live previews

- Articles landing page: `https://tdp-website-phase1-llm.vercel.app/articles`
- Example article: `https://tdp-website-phase1-llm.vercel.app/articles/the-cost-of-becoming-a-people-pleaser`
- Developer/SEO template: `https://tdp-website-phase1-llm.vercel.app/article-template`

## What was built

### 1. Articles landing page

File: `articles.html`

- Added an Articles index using the existing TDP cream, mocha, rust, and dark visual language.
- Uses the existing Fraunces + Inter typography system, nav, footer, buttons, spacing, and shared assets.
- Includes an editorial hero, category navigation, featured article, article grid, and newsletter CTA.
- Distinguishes website articles from weekly letters.
- Current cards beyond the first article are structural placeholders until corresponding CMS pages exist.
- Developer/CMS notes remain intentionally visible in this preview and must be removed from the production-facing Webflow build.

### 2. Individual article page

File: `articles/the-cost-of-becoming-a-people-pleaser/index.html`

- Created the first real article at a clean URL under `/articles/[slug]`.
- Includes breadcrumb navigation, category, H1, dek, author/date/read-time metadata, hero image, article body, pull quote, inline image, subscribe CTA, author block, FAQ, related articles, and site footer.
- Styled to match the main TDP site rather than looking like a separate blog product.
- Nav uses the public label `Read`, while the content is hosted under `/articles`.

### 3. Developer + SEO template

File: `article-template.html`

- Serves as the implementation reference for the Webflow CMS template.
- Marked `noindex, nofollow`; it is documentation, not a production article.
- Shows the required content modules and CMS fields.
- Contains visible developer notes explaining CMS behavior, SEO behavior, the `home` placement flag, canonical URLs, and newsletter integration.
- Developer notes must not appear on live articles.

## SEO architecture already represented

Each production article should support:

- Unique SEO title and meta description.
- Canonical URL on `https://www.thedeliberatepause.com/articles/[slug]`.
- Open Graph title, description, image, and article type.
- `Article` JSON-LD with headline, description, author, dates, image, publisher, and canonical page ID.
- `BreadcrumbList` JSON-LD matching the visible breadcrumb path.
- `FAQPage` JSON-LD only when the visible article contains matching FAQs.
- One clear H1 and descriptive H2 sections.
- Semantic article body, descriptive image alt text, author attribution, related internal links, and category links.
- Clean, crawlable URLs with no JavaScript-gated article content.

The broader repository also contains `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, FAQ content, and JSON endpoints. These need to be regenerated or updated when Webflow becomes the production source of truth.

## Recommended Webflow CMS model

### Articles collection

- Name
- Slug
- SEO title
- SEO description
- Short summary / dek
- Category (Reference)
- Featured image
- Featured image alt text
- Author (Reference or fixed Avi profile)
- Published date
- Modified date
- Read time
- Article body (Rich Text)
- FAQ question/answer content, if supported through a separate referenced collection
- Related articles (Multi-reference)
- Featured on homepage (`home`) switch
- Featured on Articles page switch
- Canonical URL override, optional
- Substack URL, optional
- Old newsletter URL, for migration records

### Categories collection

Create real category pages and URLs, not visual-only filter labels. Current planned categories:

- Founder Burnout
- Founder Resilience
- Founder Loneliness
- Overthinking & Anxiety
- Performance & Recovery
- Self-worth

The `home` value is a backend placement flag only. It must not display as a public category and must not change the article's canonical `/articles/[slug]` URL.

## Content-system decision

- Webflow/TDP domain hosts selected evergreen, search-focused articles.
- Substack remains the weekly newsletter and email delivery layer.
- Kit is reserved for future lead magnets and segmented automations.
- Articles and Substack letters should not create uncontrolled full-text duplication. Decide the canonical destination per piece before publishing duplicate content.

## Production cleanup required

- Remove all visible developer notes, CMS notes, template ribbons, and placeholder copy from public pages.
- Replace placeholder article cards and related-article links with real CMS items.
- Bind all template fields dynamically in Webflow.
- Configure dynamic SEO fields and CMS-driven JSON-LD.
- Confirm final category taxonomy and URL slugs.
- Confirm whether the inline subscribe CTA routes to Substack or a future Kit form.
- Add the Articles index and all live article URLs to the production sitemap and `llms-full.txt`.
- Add 301 redirects only after final production URLs are confirmed.
- Run desktop/mobile layout QA, link checks, schema validation, metadata checks, and indexability checks before launch.

## Current known state

- The three preview URLs are deployed on Vercel.
- The first individual article is implemented.
- The landing page and template are visual/technical references for the Webflow developer.
- The repo is currently clean after commit `7326836`.
- The next requested website change can be made directly against this current state.
