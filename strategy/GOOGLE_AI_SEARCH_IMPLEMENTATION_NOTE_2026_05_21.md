# Google AI Search Implementation Note

Date: 2026-05-21

## What Avi Is Pointing At

Avi's latest direction is correct: Phase 1 should prioritize technical architecture and new LLM-discovery sections before final copy polish.

Google's own Search Central guidance says the fundamentals of SEO still apply to AI Overviews and AI Mode. There are no special schema types or AI-only markup required to appear, but pages still need to be crawlable, indexable, text-visible, internally linked, and genuinely helpful.

The practical change is behavioral: AI Mode and AI Overviews are built for longer, more complex, follow-up-style queries. Google describes query fan-out, where AI features issue multiple related searches across subtopics and sources to construct an answer. That means the site should not only target one keyword per page. It should provide structured, citable answers across the full topic graph.

## Sources Used

- Google Search Central: `AI features and your website`
  - `https://developers.google.com/search/docs/appearance/ai-features`
- Google Search Central Blog: `Top ways to ensure your content performs well in Google's AI experiences on Search`
  - `https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search`
- Google Search PDF: `AI Overviews and AI Mode in Search`
  - `https://search.google/pdf/google-about-AI-overviews-AI-Mode.pdf`
- Google Blog: `How AI Mode and AI Overviews help you explore the web`
  - `https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/`

## Implications for TDP

### 1. Technical Architecture Comes First

TDP should make sure every important page has:

- static HTML content, not JS-gated copy;
- canonical URLs;
- internal links;
- visible text that matches schema claims;
- sitemap and RSS support;
- permissive crawler access;
- structured data where it reflects visible content.

Current Phase 1 already covers most of this with FAQ, glossary, sources, `llms.txt`, `llms-full.txt`, `llms-sitemap.html`, API JSON, sitemap, RSS, and article schema.

### 2. New LLM-Discovery Sections Are More Important Than More CTAs

For Phase 1, the valuable sections are:

- FAQ: direct Q/A retrieval.
- Glossary: defined brand and method terms.
- Sources: credibility and citation scaffolding.
- LLM sitemap: explicit agent-facing site map.
- Full LLM context file: one-fetch context for agents.
- Essay archive: crawlable source corpus.

These are more important than a lead magnet because they help Google, ChatGPT, Claude, Perplexity, and future agents understand what TDP is before asking the user to convert.

### 3. Remove Lead Magnet Sections From Homepage

The homepage should not ask for an email in Phase 1. That keeps the story clean:

- What problem do Indian entrepreneurs have?
- What is the mechanism?
- Why Avi?
- What should the reader explore next?

The conversion layer should move to Substack or Phase 2.

### 4. Route Essay Consumption Through Substack Once URL Is Known

If Substack becomes the publishing/distribution layer, the website should handle it deliberately:

- `/read.html` can become a curated landing page that introduces the archive and sends users to Substack.
- Individual essay links can point to Substack post URLs once the slug map exists.
- TDP should decide whether website essay pages stay canonical or Substack becomes canonical.

Recommendation:

- If SEO/LLM authority matters most, keep TDP website canonical and use Substack for signup/email.
- If operational simplicity matters most, make Substack canonical and have `/read` send users there.

Do not mix both without canonical rules, because duplicate essay archives can split authority.

### 5. Copy Comes Last

The copy pass should happen after:

1. homepage has no lead magnet;
2. `/read` has a clear Substack direction;
3. FAQ/glossary/sources/LLM files are settled;
4. keyword targets are confirmed against India CPC, volume, and organic competition.

That avoids rewriting the homepage around a route or conversion model that may still change.
