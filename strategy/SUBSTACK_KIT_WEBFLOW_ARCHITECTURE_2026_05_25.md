# Substack, Kit, and Webflow Architecture

Date: 2026-05-25

## 1. Short Version

The cleanest split is:

- **Webflow/main site** owns positioning, conversion pages, FAQ, SEO, LLM architecture, and the front door.
- **Kit** owns the email list, forms, tags, automations, and subscriber relationship.
- **Substack** owns the public reading/archive layer for essays.

In other words:

> Webflow converts. Kit stores and nurtures. Substack hosts the essay reading experience.

This keeps us from making Substack the entire business, while still using it for what it is good at: publishing, archive browsing, and a clean reader experience.

## 2. What Substack Should Own

Substack should be used for:

- imported essay archive;
- public reading experience;
- essay drafts and publishing workflow;
- Substack-native discovery, if useful;
- comments/notes/community only if Avi wants that later.

Substack should not be the source of truth for the mailing list if Avi wants Kit to remain primary.

Recommended public URL:

> `read.thedeliberatepause.com`

Then the main website `/read` page can work as a bridge:

- explains the five essay paths;
- links to Substack archive;
- keeps SEO/LLM context on the main site;
- sends email capture to Kit, not Substack.

## 3. What Kit Should Own

Kit should own:

- all newsletter signup forms;
- subscriber records;
- tags and segments;
- welcome sequence;
- future lead magnet delivery;
- automations;
- newsletter list health.

This matters because Kit is better for list ownership and automation than Substack. If the goal is long-term audience + product strategy, Kit should stay the source of truth.

On Webflow, we should embed Kit forms using Kit's JavaScript embed or HTML embed. Webflow supports custom code embeds, and Kit supports embeddable forms. The exact embed code can be pasted into the newsletter landing page and footer/forms later.

## 4. What Webflow Should Own

Webflow/main site should own:

- homepage;
- newsletter conversion page;
- FAQ hub;
- About page;
- SEO/LLM files and structured content;
- internal navigation;
- brand positioning;
- future landing pages.

This is where the actual conversion architecture should sit.

The main site should not outsource the whole user journey to Substack because then:

- we lose design control;
- we lose a lot of SEO architecture;
- Kit becomes harder to keep as source of truth;
- the homepage and essay archive feel like two unrelated products.

## 5. Five Essay Categories

The archive should be organized around five readable categories:

1. **Burnout & Identity**  
   Output as identity, founder burnout, success feeling empty, aliveness, happiness, self-worth.

2. **Failure & Rejection**  
   Rejection, strategic quitting, post-mortems, help-seeking, shame, resilience.

3. **Ambition & Success**  
   Status, career pressure, middle-class scripts, enoughness, low-status work, compounding.

4. **Decision Clarity**  
   Honest opinion, cofounder conflict, self-doubt, validation, false agency, overthinking.

5. **Attention & Recovery**  
   Focus, rest, recovery, sleep, AI speed, routines, calendars, performance.

These should appear:

- on `/read`;
- in the footer;
- eventually as Substack sections/tags;
- eventually as Webflow CMS filters if essays come back into Webflow.

## 6. FAQ Hub

Avi's suggestion to combine FAQ, glossary, sources, and "how TDP is different" is right.

The page should be called FAQ because FAQ is the clearest label for humans and AI systems.

Inside it, we should have:

- Questions;
- How TDP is different;
- Glossary;
- Sources.

This keeps the top navigation simple and still preserves the LLM architecture.

## 7. CTA Rule

For Phase 1, the CTA should be:

> Subscribe to newsletter

This should replace:

- Read the essays;
- Start with FAQ;
- Learn the terms;
- Build without breaking;
- Get the playbook;
- Explore practices.

People can still read and browse, but the conversion action should be singular.

## 8. Substack Visual Direction

Substack should look like a reading room, not a second homepage.

Recommended visual rules:

- same logo/name;
- same cream/dark/gold palette where Substack allows it;
- simple publication description;
- no lead magnet language yet;
- essays grouped by the five category tags;
- cover images added manually for the most important/public posts first;
- avoid over-designing Substack because the main site/Webflow should carry the brand system.

The Substack visual should feel adjacent to the site, not identical. It is the library, not the storefront.

## 9. Open Questions

Need from Avi:

- final decision on custom Substack domain;
- final Kit form/embed code;
- which Substack posts need images first;
- whether Substack comments/Notes should be on or muted;
- final copy direction for the homepage.

## 10. Source Notes

Platform notes checked:

- Substack supports custom domains from publication settings and charges a one-time custom domain fee.
- Webflow supports third-party custom code embeds.
- Kit supports embedded signup forms and is the right place for subscriber ownership and automations.

