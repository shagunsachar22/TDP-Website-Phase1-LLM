# The Deliberate Pause — Build Handoff

_Last updated: 29 June 2026_

## Status

The website build (this repo, deployed on Vercel) is **complete and live**. All design and copy work is done, including the new homepage hero, the mobile two-fold homepage banner, the Luck Manual lead-magnet page, and the redesigned popup.

**Only two items remain open — and both are forward-looking, gated on external setup (Kit / Webflow / GA4), not on the build itself:**

1. Avi's Substack flow (lead magnet → Kit → CSV → Substack)
2. CTA tracking, mobile vs web (GA4)

Details on each below. Everything after that is reference.

---

## Open item 1 — Substack: capturing emails via the lead magnet, then syncing

**Recommended setup: automate it with a webhook + Make.com.** This removes nearly all of the manual work:

1. Webflow form → **Make.com webhook** (either directly, or via Kit's "new subscriber" webhook if Kit is also used).
2. **Make.com scenario** handles: delivering the free Luck Manual PDF, and appending the email to a **deduplicated master list (Google Sheet)** — and optionally adding to Kit.
3. **Into Substack:** keep the import-ready CSV current in Drive (or have Make email it on a schedule), then upload it in Substack: **Settings → Subscribers → Import**.

**The one limitation to know:** Substack has **no public API to add subscribers**, so that final import step can't be fully automated by Make (or Zapier, or anything sanctioned). Everything *up to* it can be — so in practice this becomes a ~once-a-month one-click upload of a CSV that Make has already prepared and deduped. (Avoid unofficial "hit Substack's internal endpoint" hacks — they break on Substack changes and put the account at risk.)

Notes:
- **Consent is covered** by the form copy ("…the Monday newsletter. Unsubscribe anytime.").
- **Dependency:** this can't start until the **Webflow production build is live** with the form pointed at the Make webhook (or Kit). The forms on the current Vercel site are placeholders (`action="#kit-placeholder"`) — they capture nothing yet.
- Form IDs in this repo, for the dev to replicate in Webflow: `kit-lead-form-home` (desktop hero), `kit-lead-form-m1` (mobile fold 1), `kit-lead-form-m2` (mobile fold 2), `kit-lead-form` (luck-manual page).

---

## Open item 2 — CTA tracking (Avi's "mobile vs web" question)

Install **GA4** (works on Vercel and carries over to Webflow). GA4 records **device category (mobile / desktop / tablet) automatically** on every event — so you tag each CTA once and segment by device in GA4. No separate "mobile tag" is needed.

Scheme: event `cta_submit` (forms) / `cta_click` (links), with parameters `cta_location` + `cta_label`.

| CTA | `cta_location` |
|---|---|
| Desktop hero Subscribe | `homepage_hero` |
| Mobile fold 1 Subscribe for free | `homepage_newsletter_mobile` |
| Mobile fold 2 Send me The Luck Manual | `homepage_luckmanual_mobile` |
| Popup Get the Luck Manual | `popup_luckmanual` |
| Popup Just the letter | `popup_letter` |
| Nav Subscribe | `nav_subscribe` |
| Luck Manual page form | `luck_manual_hero` |

In GA4: Explore → event `cta_submit` → add **Device category** as the breakdown = mobile-vs-web per CTA. (For a quick read while still on Vercel, you can also turn on **Vercel Web Analytics** — 2-minute setup, device breakdown — but it won't follow to Webflow.)

---

## Reference — what's in the build

- **Homepage (`index.html`):** desktop hero ("…the *highest-leverage move* a founder can make", single rust Subscribe CTA, Luck Manual book mockup + social proof). Mobile is a **two-fold** layout (Fold 1 = Monday Newsletter, dark; Fold 2 = Luck Manual gift + five conditions, cream); the desktop hero is hidden ≤768px.
- **Lead magnet (`luck-manual.html`):** dark hero, gold italic "five conditions", rust CTA, full-width "As featured in" strip, Wiseman quote under "Five ways to maximize your luck", minimal footer. Slug is `/luck-manual` (301 redirects from `pause-playbook` in `vercel.json`).
- **Popup (shared, `scroll-fx.js` + `styles.css`):** "Luck isn't *random*." + bold/normal body + two rust CTAs. Global across pages. Cache-buster on CSS/JS is `?v=20260626a`.

## Reference — for the Webflow dev (Priya)

The Webflow production rebuild is a separate workstream. See **`Webflow_vs_Live_QA_2026-06-25.docx`** in this folder for the full QA. Main fixes flagged there: the inner article template (placeholder nav, broken layout), Letters links not deep-linking, the leftover wellness footer, placeholder page titles/meta, and `/new/*` canonicals + About `noindex` to fix at launch.

## Reference — conventions

- **Colours:** gold accent `#ecd49b`; rust CTA `#c05a34` (`--accent-rust` `#B87556`); `--bg-dark` `#1F1E19`; `--bg-cream` `#F7F3E8`. Accent words: gold on dark, rust on cream.
- **Fonts:** `--font-serif` is actually **Satoshi** (geometric sans — intentional; headlines are sans, not Fraunces). Inter for body. Mobile breakpoint **768px**.
