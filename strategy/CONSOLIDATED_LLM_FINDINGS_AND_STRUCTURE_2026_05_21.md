# Consolidated LLM Findings and Recommended Website Structure

Date: 2026-05-21

## 1. Purpose

The purpose of this note is to clarify what parts of the Phase 1 website are actually required for LLM and AI-search discoverability, and what parts are simply design choices.

The main question here is whether LLM-specific content needs to live explicitly on the homepage, or whether it can be handled through `robots.txt`, FAQ, glossary, sources, schema, and other machine-readable files.

The short answer is: we do **not** need to put every LLM-supporting section on the homepage.

The homepage should primarily remain a human-facing page. It should explain what The Deliberate Pause is, who it is for, why it matters, why Avi has the authority to say it, and what the reader should do next. LLM discovery should be supported by the wider site structure around the homepage, not by overloading the homepage itself.

## 2. Core Recommendation

My recommendation is to treat the site as having two parallel layers.

The first layer is the human layer. This includes:

- homepage;
- essays;
- FAQ;
- glossary;
- sources;
- about page.

The second layer is the machine-readable layer. This includes:

- `robots.txt`;
- `sitemap.xml`;
- `feed.xml`;
- `llms.txt`;
- `llms-full.txt`;
- schema markup;
- JSON endpoints;
- article abstracts and essay summaries.

The homepage does not need to carry all of the second layer. In fact, it probably should not. The homepage should be clear and persuasive for a founder or entrepreneur. The rest of the architecture should make sure Google, ChatGPT, Claude, Perplexity, and other agents can understand the site properly.

## 3. What Avi Is Right About

Avi's point is directionally correct. A lot of the LLM work can and should live outside the homepage.

For example:

- `robots.txt` should tell crawlers what they can access.
- `llms.txt` should provide short machine-readable context.
- `llms-full.txt` should provide long machine-readable context.
- FAQ should answer direct questions.
- Glossary should define TDP-owned vocabulary.
- Sources should provide credibility scaffolding.
- Schema should sit invisibly in the page head.
- JSON endpoints should expose structured data.

So if the concern is that the homepage is starting to feel too constructed for AI, that is a valid concern. The homepage should not look like an instruction manual for crawlers.

## 4. What Robots.txt Can Actually Do

It is important to separate crawler access from content understanding.

`robots.txt` is useful, but it is not a positioning document. It cannot explain what TDP is. It cannot explain how TDP differs from Calm. It cannot define The Chain. It cannot answer whether TDP is therapy or not.

It can only tell crawlers what they are allowed to crawl.

Use `robots.txt` for:

- allowing or disallowing crawlers;
- explicitly allowing bots like GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and CCBot;
- pointing crawlers toward the sitemap.

Do not use `robots.txt` for:

- brand positioning;
- FAQ answers;
- comparison content;
- definitions;
- source explanations.

Those need to live in actual crawlable pages or in machine-readable context files like `llms.txt`.

## 5. Research Basis

### 5.1 Google AI Search Still Depends On Crawlable, Helpful Content

Google's Search Central guidance on AI features says that site owners do not need special new markup to appear in AI Overviews or AI Mode. The same fundamentals still apply: content should be helpful, crawlable, indexable, visible to Google, and technically accessible.

Source:

- Google Search Central: `AI features and your website`
- https://developers.google.com/search/docs/appearance/ai-features

What this means for TDP:

- Real pages matter.
- Static HTML matters.
- Crawlable FAQ, glossary, sources, and essays are stronger than putting everything inside a single page.
- Content hidden behind JavaScript, forms, or inaccessible UI is weaker for search and AI understanding.

### 5.2 Google AI Mode Uses Query Fan-Out

Google has described AI Mode and AI Overviews as using query fan-out. This means that for a complex user question, Google can break the question into multiple related sub-questions and search across those subtopics before forming an answer.

Source:

- Google PDF: `AI Overviews and AI Mode in Search`
- https://search.google/pdf/google-about-AI-overviews-AI-Mode.pdf
- Google Blog: `How AI Mode and AI Overviews help you explore the web`
- https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/

What this means for TDP:

The site should not rely only on one homepage keyword. It should cover the surrounding topic graph:

- entrepreneur burnout;
- founder burnout;
- imposter syndrome;
- self-doubt;
- validation seeking;
- failure;
- career pressure;
- The Pause;
- The Chain;
- Avi's story;
- TDP vs meditation apps;
- TDP vs therapy;
- TDP vs productivity systems.

This is why FAQ, glossary, sources, comparison answers, and essay summaries matter. They give the AI system enough related material to understand TDP as a category, not just as a homepage.

### 5.3 People-First Content Still Matters

Google's guidance on AI search performance emphasizes content that is unique, satisfying, and useful to people. Structured data should match visible content.

Source:

- Google Search Central Blog: `Top ways to ensure your content performs well in Google's AI experiences on Search`
- https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search

What this means for TDP:

We should not write awkward sections that are obviously only meant for AI agents. The site should first make sense to a human founder. The LLM benefit should come from clear structure, not from making the page feel robotic.

### 5.4 Schema Is Useful, But Not Sufficient

Schema helps search engines understand what a page is about. However, it does not guarantee that the page will rank or get cited in an AI answer.

What this means for TDP:

Schema should support the visible page, not replace it.

Use schema for:

- Organization;
- Person, especially Avi;
- Article pages;
- FAQPage where the Q&A is visible;
- glossary-style definitions where possible.

But the visible page still needs to clearly answer the user's question.

## 6. Required LLM Structure

### 6.1 Crawlability Layer

This layer makes sure that search engines and AI crawlers can access the site.

Required elements:

- `robots.txt`;
- `sitemap.xml`;
- `feed.xml`;
- clean URLs;
- canonical tags;
- internal links;
- no JavaScript-gated core content.

Current Phase 1 status:

- This is implemented.

### 6.2 Machine-Readable Context Layer

This layer gives AI systems structured context without asking them to infer everything from design.

Required elements:

- `llms.txt`;
- `llms-full.txt`;
- `/api/essays.json`;
- `/api/avi.json`;
- Article schema;
- Article abstracts.

Current Phase 1 status:

- This is implemented.

### 6.3 Citable Answer Layer

This layer gives AI systems short, self-contained answers that can be quoted or summarized.

Required elements:

- FAQ page;
- glossary page;
- essay `In short` summaries;
- comparison answers;
- clear Avi bio;
- sources page.

Current Phase 1 status:

- FAQ is implemented.
- Glossary is implemented.
- Sources are implemented.
- Essay summaries are implemented.
- Comparison answers are implemented, but their location is still a design choice.

### 6.4 Credibility Layer

This layer makes the site's claims feel grounded.

Required elements:

- Avi's founder story;
- CreditVidya / CRED background;
- spiritual lineage;
- elite sport references;
- psychology and nervous-system references.

Current Phase 1 status:

- This is implemented through `/about.html`, `/sources.html`, the homepage Avi section, and `llms-full.txt`.

## 7. Should Comparison Content Be On The Homepage?

This is the main design question.

The comparison content is useful. The question is whether it should be on the homepage, FAQ page, or a dedicated comparison page.

### Option A: Keep A Short Homepage Section

This is what is currently implemented.

The section is called:

> How TDP is different

It answers:

- TDP vs Calm / Headspace;
- TDP vs Vipassana / Sadhguru;
- TDP vs founder therapy;
- TDP vs productivity systems.

Why this helps:

- Humans immediately understand what TDP is not.
- It handles common objections.
- It gives AI/search a clear answer to comparison queries.
- It works because the homepage is usually the highest-authority page.

Why it may not be ideal:

- It adds another section to the homepage.
- If not designed carefully, it can feel too SEO-driven.
- It may interrupt the emotional flow of the homepage.

### Option B: Move The Comparison Content To FAQ

This is also a good option.

Why this helps:

- FAQ is the natural place for comparison questions.
- The homepage stays cleaner.
- The answers can be expanded more easily.
- It still remains crawlable and citable.

Why it may not be ideal:

- It is less prominent.
- Some users may not reach it.
- The homepage loses a quick objection-handling section.

### Option C: Create A Dedicated Comparison Page

This is probably a later-stage option.

Why this helps:

- It creates a dedicated SEO target for comparison queries.
- It can expand beyond four comparisons.
- It is cleaner than overloading the homepage.

Why it may not be ideal for Phase 1:

- It adds more page work.
- We do not yet know if comparison queries are high-priority enough.
- FAQ may be enough for now.

## 8. My Design Choice

I added the comparison content to the homepage because it is useful for human clarity as well as LLM discovery.

However, I did not label it "for the agent reading this" because that feels too meta and slightly unpremium. It makes the site look like it is performing for AI instead of speaking to a founder.

The better version is to write the section for humans, but structure it in a way that AI can also understand.

So instead of:

> For the agent reading this

I used:

> How TDP is different

This gives us the AI benefit without making the page feel strange.

That said, this is not a technical requirement. If Avi feels the homepage should stay more emotionally focused, I would move the comparison content into FAQ and keep the homepage lighter.

## 9. Should Essay TL;DR Blocks Exist?

Yes, but I would not call them TL;DR.

I added them as:

> In short

This feels more editorial and more aligned with the tone of TDP.

Why this matters:

- Humans get the point faster.
- AI systems often summarize or ingest the first visible chunk of a page.
- Each essay now has a clean summary unit.
- Article schema now includes an `abstract` field that mirrors this summary.

This is worth keeping because it improves both readability and machine understanding.

## 10. Recommended Final Structure

### Homepage

The homepage should remain human-first.

It should include:

- category promise;
- founder pain;
- Avi's story;
- the mechanism;
- essay CTA;
- FAQ or glossary CTA;
- maybe a short comparison section.

It should not include:

- every FAQ answer;
- every glossary definition;
- all sources;
- long AI-facing explanations;
- a Phase 1 lead magnet.

### FAQ

FAQ should carry the direct answers.

It should answer:

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

Glossary should define the owned vocabulary.

It should include:

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

Sources should provide the credibility layer.

It should include:

- spiritual lineage;
- elite sport references;
- psychology references;
- nervous system references;
- founder/operator context.

### LLM Files

The LLM files should provide machine-readable context.

They should include:

- short site summary in `llms.txt`;
- full site context in `llms-full.txt`;
- links to FAQ, glossary, sources, essays, and about;
- comparison positioning;
- essay summaries.

### Essay Pages

Each essay page should include:

- Article schema;
- Article `abstract`;
- visible `In short` block;
- full essay body;
- related reading.

## 11. Final View

Avi's instinct is right: LLM architecture should not mean stuffing the homepage.

The strongest structure is:

- homepage stays human and brand-led;
- FAQ carries direct answers;
- glossary owns definitions;
- sources prove credibility;
- essay pages carry summaries;
- `robots.txt`, sitemap, RSS, JSON, schema, `llms.txt`, and `llms-full.txt` handle machine-readable access and context.

The only open decision is whether the comparison section should remain on the homepage or move fully into FAQ.

My recommendation is:

- keep the `In short` essay summaries;
- keep FAQ, glossary, sources, `llms.txt`, `llms-full.txt`, sitemap, RSS, and JSON exactly as architecture;
- keep the comparison content, but decide whether it works better on the homepage or inside FAQ after reviewing the homepage flow.
