# TDP Website Deliverables — Phase 1 and Phase 2

Date: 2026-05-21

This document turns the current work into reviewable outputs. Phase 1 is the SEO/LLM launch without a lead magnet. Phase 2 is a separate lead-magnet build with the full practice/tool library.

## Phase 1 Outputs

### 1. Revised Website With LLM Architecture and No Lead Magnet

Status: **implemented in this repo**

Repo:

- `TDP-Website-Phase1-LLM`

What is included:

- Homepage revised around India-first SEO language.
- Practice/tool pages removed from public navigation.
- `/pause` and `/practice-*` routes redirected away on Vercel.
- `/faq.html` with FAQPage schema.
- `/glossary.html` with method and brand definitions.
- `/sources.html` credibility scaffold.
- `/llms.txt` and `/llms-full.txt`.
- `/llms-sitemap.html`.
- `/api/essays.json`.
- `/api/avi.json`.
- `/feed.xml`.
- Full essay archive preserved under `/read`.

What is intentionally not included:

- No public lead magnet.
- No public practice/tool library.
- No full protocols exposed in public navigation.
- `/api/practices.json` marks the tool library as reserved for Phase 2.

### 2. Copy Options / Mockup Websites Based on SEO Keyword Strategy

Status: **first mockups added**

Files:

- `/mockups/copy-option-a-entrepreneur-first.html`
- `/mockups/copy-option-b-burnout-first.html`
- `/mockups/copy-option-c-founder-psychology.html`

Purpose:

- Show three possible homepage copy directions without disturbing the live Phase 1 site.
- Let Avi choose whether the launch should lead with the ICP (`entrepreneur`), pain (`burnout`), or category (`founder psychology`).

### 3. Reasoning Document / Executive Summary

Status: **implemented as a client-facing summary, with supporting docs available**

Primary file:

- `EXECUTIVE_SUMMARY_PHASE1_LLM_SEO_COPY_2026_05_21.md`

Supporting strategy docs:

- `INDIA_FIRST_SEO_REDO_2026_05_20.md`
- `STORYBRAND_SEO_COPY_PASS_2026_05_20.md`
- `WORD_CHOICE_AND_SEO_RESEARCH_MEMO.md`
- `SEO_INPUT_REVIEW_2026_05_18.md`

What it covers:

- Why Phase 1 removes the lead magnet.
- Why the LLM architecture matters.
- Why the copy should lead with `entrepreneur` while retaining `founder`.
- Why CPC/volume must be checked against organic SERP ownership.
- Why Phase 2 should use a separate lead-magnet repo.

### 4. More Research on CPC vs Volume and Organic Keyword Strategy

Status: **new research note started**

File:

- `CPC_VOLUME_ORGANIC_COMPETITION_RESEARCH_2026_05_21.md`

Core point:

- India volume and India CPC are not organic difficulty scores.
- A term can look attractive in the keyword file but still be hard to win if large publishers, wellness apps, spiritual incumbents, or broad business media dominate the organic SERP.
- The strategy should use broad terms in copy/schema/FAQ and compete through narrower founder/entrepreneur-specific angles.

Still needed:

- A proper SERP matrix by query.
- India-localized search checks, ideally using a keyword/SERP tool or clean Google India results.
- Classification of competitor page types: publisher, app, therapy/mental-health, spiritual incumbent, startup-specific, forum/social.

## Phase 2 Output

### 5. Separate Phase 2 Website With Lead Magnet and Full Practice Extension

Status: **not started yet**

Recommended repo:

- `TDP-Website-Phase2-LeadMagnet`

Purpose:

- Start from the approved Phase 1 architecture.
- Add lead magnet conversion.
- Extend the practice/tool library from the current 4 practices to all 11 practices.
- Decide whether the lead magnet is a PDF, quiz, tool, gated practice library, or a hybrid.

Phase 2 should include:

- Lead magnet landing section.
- Full practice/tool index.
- Individual practice pages for all 11 practices.
- Conversion flow.
- Email capture.
- Optional quiz/tool layer for ICP diagnosis.
- Carry forward FAQ, glossary, sources, LLM architecture, and essay archive from Phase 1.

## Current Recommendation

Ship Phase 1 first with:

1. Entrepreneur-first homepage copy.
2. No lead magnet.
3. Strong FAQ/glossary/sources/LLM architecture.
4. Essay archive crawlable.
5. Copy-option mockups for Avi to choose from.
6. A sharper executive summary explaining why Phase 1 deliberately prioritizes discoverability before conversion.

Then build Phase 2 in a separate repo once Avi approves the lead magnet format.
