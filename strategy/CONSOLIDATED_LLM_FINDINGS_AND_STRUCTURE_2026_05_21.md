# Consolidated LLM Findings and Recommended Site Structure

Date: 2026-05-21

## Executive Answer

We do **not** need every LLM-supporting section explicitly on the homepage.

The homepage should stay human-first. It should explain the category, the problem, the mechanism, the proof, and the next action. LLM discovery is supported by the whole site architecture: FAQ, glossary, sources, schema, sitemap, RSS, `llms.txt`, `llms-full.txt`, and structured JSON.

The homepage comparison section is optional. It is useful because comparison questions are common and commercially important, but it can also live on the FAQ page or a dedicated comparison page if the homepage starts feeling crowded.

## What Avi Is Right About

Avi is right that many LLM-specific elements should live outside the homepage.

Examples:

- `robots.txt` should control crawler access.
- `llms.txt` and `llms-full.txt` should give machine-readable site context.
- FAQ should carry direct Q&A answers.
- Glossary should define TDP vocabulary.
- Sources should carry credibility scaffolding.
- Schema should sit invisibly in page heads.
- JSON endpoints should expose structured data.

The homepage does not need to carry all of that work.

## What Robots.txt Can and Cannot Do

`robots.txt` is not a content or positioning file. It tells crawlers what they are allowed to access. It cannot explain what TDP is, how it differs from Calm, or what The Chain means.

Use `robots.txt` for:

- allowing or disallowing crawlers;
- allowing GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, etc.;
- pointing crawlers toward sitemap location.

Do not use `robots.txt` for:

- brand positioning;
- FAQ answers;
- comparison content;
- definitions;
- source explanations.

Those should live in crawlable pages and machine-readable context files.

## Research Basis

### 1. Google Says Standard Search Fundamentals Still Apply to AI Features

Google's Search Central guidance for AI features says site owners do not need special new markup for AI Overviews or AI Mode. The same fundamentals apply: make content helpful, crawlable, indexable, and visible to Google.

Source:

- Google Search Central: `AI features and your website`
- https://developers.google.com/search/docs/appearance/ai-features

Implication for TDP:

- Static, crawlable pages matter.
- Hidden or JavaScript-gated content is weaker.
- Real URLs for FAQ, glossary, sources, and essays are stronger than burying everything inside one page.

### 2. Google AI Mode Uses Query Fan-Out

Google describes AI Mode and AI Overviews as using query fan-out: the system breaks a complex question into multiple related subtopics and searches across them before composing an answer.

Source:

- Google PDF: `AI Overviews and AI Mode in Search`
- https://search.google/pdf/google-about-AI-overviews-AI-Mode.pdf
- Google Blog: `How AI Mode and AI Overviews help you explore the web`
- https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/

Implication for TDP:

The site should not only target one homepage keyword. It should cover the topic graph:

- founder burnout;
- entrepreneur burnout;
- imposter syndrome;
- self-doubt;
- validation seeking;
- failure;
- career pressure;
- The Pause;
- The Chain;
- Avi's founder story;
- TDP vs meditation apps;
- TDP vs therapy;
- TDP vs productivity systems.

This is why FAQ, glossary, sources, and essay summaries matter.

### 3. Google Recommends Unique, Helpful, People-First Content

Google's guidance on AI search performance emphasizes unique, satisfying content and good page experience. Structured data should match visible page content.

Source:

- Google Search Central Blog: `Top ways to ensure your content performs well in Google's AI experiences on Search`
- https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search

Implication for TDP:

We should not create awkward copy that only talks to AI agents. The page should help humans first, while also being structured enough for AI systems to understand.

### 4. Schema Helps Explain Page Meaning, But It Is Not a Magic Ranking Lever

Schema.org markup helps search systems understand page entities and relationships. It does not guarantee inclusion in AI answers.

Implication for TDP:

Use schema where it reflects visible content:

- Organization schema;
- Person schema for Avi;
- Article schema on essays;
- FAQPage schema where Q&A is visible;
- DefinedTerm style structure for glossary terms.

Do not rely on schema alone. The visible page still matters.

## Required LLM / AI Search Structure

### 1. Crawlability Layer

Purpose: make sure search engines and AI crawlers can find and access the site.

Needed:

- `robots.txt`
- `sitemap.xml`
- `feed.xml`
- clean URLs
- no JavaScript-gated core content
- canonical tags
- internal links between important pages

Current status:

- Implemented in the Phase 1 repo.

### 2. Machine-Readable Context Layer

Purpose: give AI systems structured context without forcing them to infer everything from design.

Needed:

- `llms.txt`
- `llms-full.txt`
- `/api/essays.json`
- `/api/avi.json`
- article metadata and schema

Current status:

- Implemented in the Phase 1 repo.

### 3. Citable Answer Layer

Purpose: give AI systems short, self-contained answers that can be quoted or summarized accurately.

Needed:

- FAQ page
- glossary page
- essay `In short` summary blocks
- comparison answers
- clear about/Avi bio

Current status:

- FAQ, glossary, sources, and essay summaries are implemented.
- Comparison content is currently on the homepage as a short section, but this is movable.

### 4. Credibility Layer

Purpose: show why TDP's claims are trustworthy.

Needed:

- sources page;
- Avi bio;
- CreditVidya/CRED background;
- intellectual lineage: Patanjali, Vipassana, Phil Jackson, Federer, Vision54, Jill Bolte Taylor, Gabor Mate, D.W. Winnicott, etc.

Current status:

- Implemented through `/sources.html`, `/about.html`, homepage Avi section, and `llms-full.txt`.

## Should Comparison Content Be On The Homepage?

It does not have to be.

There are three possible placements:

### Option A: Keep A Short Homepage Section

Pros:

- Helps humans quickly understand what TDP is not.
- Directly answers common objections.
- Gives AI/search a prominent comparison block on the highest-authority page.
- Creates internal language for queries like "TDP vs Calm" or "is TDP like therapy?"

Cons:

- Adds another homepage section.
- Can feel too SEO/LLM-driven if not designed tastefully.

Best if:

- The homepage still feels clean after adding it.
- We title it naturally, such as "How TDP is different."

### Option B: Move It To FAQ

Pros:

- Keeps homepage tighter.
- FAQ is already the natural place for comparison answers.
- Easier to maintain and expand.

Cons:

- Less prominent.
- Some users may never see the comparison content.

Best if:

- Avi wants a cleaner, more emotional homepage.
- We want the homepage to stay StoryBrand-first and keep LLM answers deeper in the site.

### Option C: Create A Dedicated Comparison Page

Pros:

- Strongest long-term SEO structure.
- Can target comparison queries directly.
- Easy to expand over time.

Cons:

- More page work.
- Probably not necessary for Phase 1 unless comparison queries are already high priority.

Best if:

- Later keyword research shows real demand for TDP vs Calm, meditation apps for founders, founder therapy alternatives, etc.

## Current Design Choice I Made

I added a short homepage section called:

> How TDP is different

It compares:

- TDP vs Calm / Headspace;
- TDP vs Vipassana / Sadhguru;
- TDP vs founder therapy;
- TDP vs productivity systems.

I did **not** label it "for the agent reading this" because that feels too meta and less premium. The content still serves AI discovery because it is structured, direct, and citable, but it reads naturally for a human founder.

This is a design choice, not a technical requirement. If Avi prefers, I recommend moving the comparison content into `/faq.html` and keeping only a smaller "Not another meditation app" line on the homepage.

## Should Essay TL;DR Blocks Exist?

Yes, but they should be quiet.

I added them as:

> In short

instead of:

> TL;DR

Reason:

- Humans get a faster read.
- AI systems often ingest or summarize the first visible chunk of a page.
- Each essay gets a clean citable summary.
- Article schema now includes an `abstract` field that mirrors this summary.

This is worth keeping.

## Recommended Final Structure

### Homepage

Human-first.

Should include:

- category promise;
- founder pain;
- Avi's story;
- mechanism;
- essay CTA;
- FAQ/glossary CTA;
- maybe a short comparison section.

Should not include:

- long agent-facing explanations;
- lead magnet in Phase 1;
- all glossary definitions;
- all sources;
- all FAQ answers.

### FAQ

Primary citable Q&A page.

Should include:

- What is TDP?
- Who is it for?
- How is it different from Calm / Headspace?
- How is it different from Vipassana / Sadhguru?
- How is it different from therapy?
- How is it different from productivity systems?
- Who is Avi?
- What is The Chain?
- Is this religious?
- What should a founder read first?

### Glossary

Primary definition page.

Should include:

- The Pause;
- The Chain;
- Sakshi;
- Vritti;
- Federer Reset;
- Jackson Triangle;
- Think Box / Play Box;
- 90-Second Recovery;
- founder psychology;
- output as identity.

### Sources

Credibility page.

Should include:

- spiritual lineage;
- elite sport references;
- psychology and nervous system references;
- founder/operator context.

### LLM Files

Machine-readable context.

Should include:

- short site summary in `llms.txt`;
- full site context in `llms-full.txt`;
- links to FAQ, glossary, sources, essays, about.

### Essay Pages

Should include:

- Article schema;
- Article `abstract`;
- visible `In short` block;
- essay body;
- related reading.

## Bottom Line

Avi's instinct is right: LLM architecture should not mean stuffing the homepage.

The strongest approach is:

- homepage stays human and brand-led;
- FAQ carries direct answers;
- glossary owns definitions;
- sources provide credibility;
- essay pages carry summaries;
- `llms.txt`, `llms-full.txt`, JSON, RSS, sitemap, and schema handle machine-readable context.

The only open design question is whether the comparison content should stay as a short homepage section or move fully into FAQ. Both are valid. My recommendation is to keep a short, tasteful version on the homepage only if it improves human clarity. Otherwise, move it to FAQ.
