# SEO Metadata Review

## What This Covers

This doc is for the active public pages on the current site:

- Homepage
- `/articles`
- `/letters`
- `/about`
- `/faq`
- `/pause-playbook`
- 14 article pages
- 6 article category pages

Old pages like `/read`, old practice pages, glossary, sources, and template pages are not included here. Those should be handled separately when we do redirect cleanup.

## What Each Page Should Have

Each public page should have the basic SEO and social metadata in place:

- page title
- meta description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card metadata
- schema where it makes sense

## Quick Status

Current status:

- Active public pages checked: 26
- Pages with core metadata in place: 26
- Accidental `noindex` on active pages: none
- Canonicals are using the `https://www.thedeliberatepause.com/...` format

So broadly, the active pages are in good shape from a metadata point of view.

## What Was Fixed

These are the main fixes already made:

- Added Twitter card metadata to the article pages.
- Added Open Graph, Twitter card, `CollectionPage`, and `BreadcrumbList` metadata to category pages.
- Added missing social preview metadata to `/letters`, `/about`, and `/faq`.
- Added `CollectionPage` and breadcrumb schema to `/letters`.
- Removed `noindex` from `/pause-playbook`.
- Added `/pause-playbook` to `sitemap.xml`.
- Normalized the important page canonicals to the `www` domain used in the sitemap.

## Main Pages

| Page | URL | Title | Description | Canonical | OG Image | Twitter | Schema | Notes |
|---|---|---:|---:|---:|---:|---:|---|---|
| Home | `/` | Yes | Yes | Yes | Yes | Yes | `WebSite`, `Organization`, `Person` | Set. |
| Articles | `/articles` | Yes | Yes | Yes | Yes | Yes | `CollectionPage`, `BreadcrumbList` | Set. |
| Letters | `/letters` | Yes | Yes | Yes | Yes | Yes | `CollectionPage`, `BreadcrumbList` | Set. |
| About | `/about` | Yes | Yes | Yes | Yes | Yes | `AboutPage` | Set. |
| FAQ | `/faq` | Yes | Yes | Yes | Yes | Yes | `FAQPage`, `DefinedTermSet` | Set. |
| Pause Playbook | `/pause-playbook` | Yes | Yes | Yes | Yes | Yes | `WebPage` | Set. Backend is still placeholder for now. |

## Article Pages

All 14 active article pages now have:

- title
- meta description
- canonical
- Open Graph image
- Twitter card metadata
- `Article` schema
- `BreadcrumbList` schema

| Article | URL | Schema | Notes |
|---|---|---|---|
| Fall in Love With 2026 Sooner Than Later | `/articles/fall-in-love-with-2026-sooner-than-later` | `Article`, `BreadcrumbList` | Set. |
| My Rejection Experiment | `/articles/my-rejection-experiment-that-can-be-your-breakthrough` | `Article`, `BreadcrumbList` | Set. |
| No Means No to Hustle Culture | `/articles/no-means-no-to-hustle-culture` | `Article`, `BreadcrumbList` | Set. |
| Perfectionism Is Self-Sabotage in Disguise | `/articles/perfectionism-is-self-sabotage-in-disguise` | `Article`, `BreadcrumbList` | Set. |
| Rejection Hurts but Don't Let It Be Painful | `/articles/rejection-hurts-but-dont-let-it-be-painful` | `Article`, `BreadcrumbList` | Set. |
| Smart but Stuck | `/articles/smart-but-stuck-when-intelligence-alone-falls-short-of-cracking-the-startup` | `Article`, `BreadcrumbList` | Set. |
| The Cost of Becoming a People Pleaser | `/articles/the-cost-of-becoming-a-people-pleaser` | `Article`, `BreadcrumbList` | Set. |
| The False Sense of Agency | `/articles/the-false-sense-of-agency` | `Article`, `BreadcrumbList` | Set. |
| The Hidden Cost of Not Choosing Yourself | `/articles/the-hidden-cost-of-not-choosing-yourself` | `Article`, `BreadcrumbList` | Set. |
| The Low Status Moat Matters | `/articles/the-low-status-moat-matters` | `Article`, `BreadcrumbList` | Set. |
| The Market for Your Honest Opinion | `/articles/the-market-for-your-honest-opinion-is-bigger-than-you-think` | `Article`, `BreadcrumbList` | Set. |
| The Unicorn Trap and the Road to Enlightenment | `/articles/the-unicorn-trap-and-the-road-to-enlightenment` | `Article`, `BreadcrumbList` | Set. |
| Welcome to The Deliberate Pause | `/articles/welcome-to-the-deliberate-pause` | `Article`, `BreadcrumbList` | Set. |
| Your Attention Span Holds a Secret | `/articles/your-attention-span-holds-a-secret` | `Article`, `BreadcrumbList` | Set. |

## Article Category Pages

All 6 category pages now have:

- title
- meta description
- canonical
- Open Graph image
- Twitter card metadata
- `CollectionPage` schema
- `BreadcrumbList` schema

| Category | URL | Schema | Notes |
|---|---|---|---|
| Founder Burnout | `/articles/category/founder-burnout` | `CollectionPage`, `BreadcrumbList` | Metadata is set. Avi may still change which articles sit in this category. |
| Founder Resilience | `/articles/category/founder-resilience` | `CollectionPage`, `BreadcrumbList` | Metadata is set. Avi may still change which articles sit in this category. |
| Founder Loneliness | `/articles/category/founder-loneliness` | `CollectionPage`, `BreadcrumbList` | Metadata is set. Avi may still change which articles sit in this category. |
| Overthinking & Anxiety | `/articles/category/overthinking-anxiety` | `CollectionPage`, `BreadcrumbList` | Metadata is set. Avi may still change which articles sit in this category. |
| Performance & Recovery | `/articles/category/performance-recovery` | `CollectionPage`, `BreadcrumbList` | Metadata is set. Avi may still change which articles sit in this category. |
| Self-worth | `/articles/category/self-worth` | `CollectionPage`, `BreadcrumbList` | Metadata is set. Avi may still change which articles sit in this category. |

## Still To Handle

1. Legacy redirects and old pages

Old `/read`, practice, glossary, sources, and template pages still need to be handled during redirect cleanup. They are separate from this metadata check.

2. Lead magnet backend

`/pause-playbook` is indexable and has metadata now. The form backend is still placeholder until we move this into Webflow and connect Make/Kit.

3. Category membership

Avi is manually simplifying the categories and deciding which article sits where. Metadata is ready, but the actual category membership can still change.

4. OG image strategy

Right now, the site uses article images where available and a shared brand image for category/utility pages. If we want custom OG images for each category later, that can be a separate design pass.

## Bottom Line

The active public pages have the metadata basics in place.

The next SEO cleanup items are redirects, old URL handling, and final Webflow/CMS behavior once the migration happens.
