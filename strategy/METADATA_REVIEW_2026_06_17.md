# Metadata Review

Date: 2026-06-17

## Scope

This review covers the active public pages in the current site structure:

- Homepage
- `/articles`
- `/letters`
- `/about`
- `/faq`
- `/pause-playbook`
- 14 individual article pages
- 6 article category pages

Legacy pages such as old `/read` pages, old practice pages, and archived template pages should be reviewed separately during redirect cleanup.

## Standard Used

Each active public page should have:

- Page title
- Meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card metadata
- Relevant schema

## Summary

Status after the metadata pass:

- Active public pages checked: 26
- Pages with required core metadata present: 26
- Accidental `noindex` on active public pages: none
- Canonical format: normalized to `https://www.thedeliberatepause.com/...`

## Fixes Applied

- Added Twitter card metadata to individual article pages.
- Added Open Graph, Twitter card, `CollectionPage`, and `BreadcrumbList` metadata to article category pages.
- Added missing social preview metadata to `/letters`, `/about`, and `/faq`.
- Added `CollectionPage` and breadcrumb schema to `/letters`.
- Removed the `noindex` treatment from `/pause-playbook`.
- Added `/pause-playbook` to `sitemap.xml`.
- Normalized important public-page canonicals to the `www` domain used in the sitemap.

## Page-by-Page Review

| Page | URL | Title | Description | Canonical | OG Image | Twitter | Schema | Notes |
|---|---|---:|---:|---:|---:|---:|---|---|
| Home | `/` | Yes | Yes | Yes | Yes | Yes | `WebSite`, `Organization`, `Person` | Good. |
| Articles | `/articles` | Yes | Yes | Yes | Yes | Yes | `CollectionPage`, `BreadcrumbList` | Good. |
| Letters | `/letters` | Yes | Yes | Yes | Yes | Yes | `CollectionPage`, `BreadcrumbList` | Good. |
| About | `/about` | Yes | Yes | Yes | Yes | Yes | `AboutPage` | Good. |
| FAQ | `/faq` | Yes | Yes | Yes | Yes | Yes | `FAQPage`, `DefinedTermSet` | Good. |
| Pause Playbook | `/pause-playbook` | Yes | Yes | Yes | Yes | Yes | `WebPage` | Lead magnet page is indexable. Backend endpoint still pending. |

## Article Pages

All 14 active article pages now have title, meta description, canonical, Open Graph image, Twitter card metadata, `Article` schema, and `BreadcrumbList` schema.

| Article | URL | Schema | Notes |
|---|---|---|---|
| Fall in Love With 2026 Sooner Than Later | `/articles/fall-in-love-with-2026-sooner-than-later` | `Article`, `BreadcrumbList` | Good. |
| My Rejection Experiment | `/articles/my-rejection-experiment-that-can-be-your-breakthrough` | `Article`, `BreadcrumbList` | Good. |
| No Means No to Hustle Culture | `/articles/no-means-no-to-hustle-culture` | `Article`, `BreadcrumbList` | Good. |
| Perfectionism Is Self-Sabotage in Disguise | `/articles/perfectionism-is-self-sabotage-in-disguise` | `Article`, `BreadcrumbList` | Good. |
| Rejection Hurts but Don't Let It Be Painful | `/articles/rejection-hurts-but-dont-let-it-be-painful` | `Article`, `BreadcrumbList` | Good. |
| Smart but Stuck | `/articles/smart-but-stuck-when-intelligence-alone-falls-short-of-cracking-the-startup` | `Article`, `BreadcrumbList` | Good. |
| The Cost of Becoming a People Pleaser | `/articles/the-cost-of-becoming-a-people-pleaser` | `Article`, `BreadcrumbList` | Good. |
| The False Sense of Agency | `/articles/the-false-sense-of-agency` | `Article`, `BreadcrumbList` | Good. |
| The Hidden Cost of Not Choosing Yourself | `/articles/the-hidden-cost-of-not-choosing-yourself` | `Article`, `BreadcrumbList` | Good. |
| The Low Status Moat Matters | `/articles/the-low-status-moat-matters` | `Article`, `BreadcrumbList` | Good. |
| The Market for Your Honest Opinion | `/articles/the-market-for-your-honest-opinion-is-bigger-than-you-think` | `Article`, `BreadcrumbList` | Good. |
| The Unicorn Trap and the Road to Enlightenment | `/articles/the-unicorn-trap-and-the-road-to-enlightenment` | `Article`, `BreadcrumbList` | Good. |
| Welcome to The Deliberate Pause | `/articles/welcome-to-the-deliberate-pause` | `Article`, `BreadcrumbList` | Good. |
| Your Attention Span Holds a Secret | `/articles/your-attention-span-holds-a-secret` | `Article`, `BreadcrumbList` | Good. |

## Article Category Pages

All 6 category pages now have title, meta description, canonical, Open Graph image, Twitter card metadata, `CollectionPage` schema, and `BreadcrumbList` schema.

| Category | URL | Schema | Notes |
|---|---|---|---|
| Founder Burnout | `/articles/category/founder-burnout` | `CollectionPage`, `BreadcrumbList` | Good. Avi may manually adjust category membership later. |
| Founder Resilience | `/articles/category/founder-resilience` | `CollectionPage`, `BreadcrumbList` | Good. Avi may manually adjust category membership later. |
| Founder Loneliness | `/articles/category/founder-loneliness` | `CollectionPage`, `BreadcrumbList` | Good. Avi may manually adjust category membership later. |
| Overthinking & Anxiety | `/articles/category/overthinking-anxiety` | `CollectionPage`, `BreadcrumbList` | Good. Avi may manually adjust category membership later. |
| Performance & Recovery | `/articles/category/performance-recovery` | `CollectionPage`, `BreadcrumbList` | Good. Avi may manually adjust category membership later. |
| Self-worth | `/articles/category/self-worth` | `CollectionPage`, `BreadcrumbList` | Good. Avi may manually adjust category membership later. |

## Open Items

1. **Legacy redirects and old pages**  
   Old `/read`, practice, glossary, sources, and template pages should be handled during redirect cleanup. They are not part of the active public-page metadata pass.

2. **Lead magnet backend**  
   `/pause-playbook` has metadata and is indexable, but the email capture backend still needs the real Kit/backend endpoint.

3. **Category membership**  
   Avi is simplifying categories and manually assigning each article. Metadata is ready; page content/category membership can be adjusted separately.

4. **Final OG image strategy**  
   The current implementation uses page/article images where available and a shared brand image for category and utility pages. If Avi wants bespoke OG images per category, that can be a later design pass.
