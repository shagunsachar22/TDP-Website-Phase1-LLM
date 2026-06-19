# Article Metadata Audit

Generated: 19 June 2026

## Executive Summary

- Standalone article pages audited: **15**
- Pages passing all required checks: **11/15**
- Required metadata errors: **9**
- Best-practice warnings: **1**

An **error** means required metadata is absent, inconsistent, invalid, or disconnected from the site structure. A **warning** is a recommended improvement that does not prevent indexing.

## Article Results

| # | Article | Category | Errors | Warnings | Status |
|---:|---|---|---:|---:|---|
| 1 | [Fall in Love With 2026 Sooner Than Later \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/fall-in-love-with-2026-sooner-than-later) | Founder Resilience | 0 | 0 | Pass |
| 2 | [Founders Are Lonely but There's a Way Out \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/founders-are-lonely-but-theres-a-way-out) | Founder Loneliness | 0 | 0 | Pass |
| 3 | [My Rejection Experiment \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/my-rejection-experiment-that-can-be-your-breakthrough) | Founder Resilience | 0 | 0 | Pass |
| 4 | [No Means No to Hustle Culture \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/no-means-no-to-hustle-culture) | Founder Burnout | 0 | 0 | Pass |
| 5 | [Perfectionism Is Self-Sabotage in Disguise \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/perfectionism-is-self-sabotage-in-disguise) | Overthinking & Anxiety | 0 | 0 | Pass |
| 6 | [Rejection Hurts: Don't Let It Become Pain \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/rejection-hurts-but-dont-let-it-be-painful) | Founder Resilience | 0 | 0 | Pass |
| 7 | [Smart but Stuck \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/smart-but-stuck-when-intelligence-alone-falls-short-of-cracking-the-startup) | Founder Resilience | 0 | 0 | Pass |
| 8 | [The Cost of Becoming a People Pleaser \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/the-cost-of-becoming-a-people-pleaser) | Self-worth | 0 | 0 | Pass |
| 9 | [The False Sense of Agency \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/the-false-sense-of-agency) | Founder Resilience | 0 | 0 | Pass |
| 10 | [The Hidden Cost of Not Choosing Yourself \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/the-hidden-cost-of-not-choosing-yourself) | Self-worth | 0 | 0 | Pass |
| 11 | [The Low Status Moat Matters \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/the-low-status-moat-matters) | Self-worth | 1 | 0 | Needs fixes |
| 12 | [The Market for Your Honest Opinion \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/the-market-for-your-honest-opinion-is-bigger-than-you-think) | Self-worth | 0 | 0 | Pass |
| 13 | [The Unicorn Trap and Enlightenment \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/the-unicorn-trap-and-the-road-to-enlightenment) | Self-worth | 2 | 0 | Needs fixes |
| 14 | [Welcome to The Deliberate Pause \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/welcome-to-the-deliberate-pause) | Missing | 3 | 0 | Needs fixes |
| 15 | [Your Attention Span Holds a Secret \| The Deliberate Pause](https://www.thedeliberatepause.com/articles/your-attention-span-holds-a-secret) | Performance & Recovery | 3 | 1 | Needs fixes |

## Findings

### The Low Status Moat Matters | The Deliberate Pause

Path: `/articles/the-low-status-moat-matters`

- **Error — Listed under category:** Not listed on /articles/category/self-worth.

### The Unicorn Trap and Enlightenment | The Deliberate Pause

Path: `/articles/the-unicorn-trap-and-the-road-to-enlightenment`

- **Error — Single H1:** Found 3 H1 elements.
- **Error — Listed under category:** Not listed on /articles/category/self-worth.

### Welcome to The Deliberate Pause | The Deliberate Pause

Path: `/articles/welcome-to-the-deliberate-pause`

- **Error — Category link:** Missing linked article category.
- **Error — Category page:** Missing category page for unknown category.
- **Error — Listed under category:** Not listed on /articles/category/.

### Your Attention Span Holds a Secret | The Deliberate Pause

Path: `/articles/your-attention-span-holds-a-secret`

- **Warning — Description length:** 117 characters; target 120–165.
- **Error — Open Graph description:** OG description should match the meta description.
- **Error — Twitter description:** Twitter description should match the meta description.
- **Error — Schema description:** Schema description should match the meta description.

## What This Audit Checks

- Unique HTML title and one H1 per article.
- Meta description presence and search-friendly length.
- Canonical URL, Open Graph URL, and schema URL consistency.
- Complete Open Graph and Twitter large-image metadata.
- Valid Article and BreadcrumbList JSON-LD.
- Avi Agarwal author and The Deliberate Pause publisher identity.
- ISO publication date, article image, headline, and description consistency.
- Linked category, inclusion on the matching category page, and inclusion in the main article grid.
- Sitemap inclusion and absence of accidental `noindex` directives.

## How To Verify Again

From the repository root, run:

```bash
node scripts/audit-article-metadata.mjs
```

The command regenerates this report and exits with a non-zero status when required errors remain, making it suitable for pre-launch QA or CI.

After deployment, also test representative URLs with:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

These external tools verify what live crawlers receive after Webflow or Vercel deployment.
