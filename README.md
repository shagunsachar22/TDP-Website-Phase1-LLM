# The Deliberate Pause — site v0.3

Static, multi-page site. Vanilla HTML/CSS, one tiny JS file for scroll FX.

## Pages

| File | Route | Status |
|---|---|---|
| `index.html`       | `/`            | Homepage — hero, pull quote, pain checklist, pivot, reading, pause section, testimonials, definition, I'm Avi, newsletter, footer |
| `about.html`       | `/about`       | Cinematic hero, identity stack, journey (3 beats), featured-in, reader pivot, two doors |
| `read.html`        | `/read`        | Playbook hero banner, 2-col archive with sticky sidebar, filter chips, 8 essays |
| `read-essay.html`  | `/read/[slug]` | Representative individual essay — drop cap, body, pull quote, mid-essay subscribe, share, keep-reading |
| `pause.html`       | `/pause`       | Lead magnet — try-one-play breathe widget (CSS-animated), what-you-just-did, 4-play toolkit, get-the-other-eleven |

## Shared assets

| File | What |
|---|---|
| `styles.css`   | Design tokens, base, nav, footer, btn, form, eyebrow, scroll FX classes |
| `scroll-fx.js` | IntersectionObserver reveals, animated counters, word-by-word reveal, parallax, magnetic CTAs, marquee, scroll progress |
| `images/`      | Avi photos go here (see below) |
| `llms.txt`     | LLM-discoverability brief at root |
| `robots.txt`   | Permissive — explicit allow for GPTBot/ClaudeBot/PerplexityBot/etc. |
| `sitemap.xml`  | All five live URLs |
| `vercel.json`  | Clean URLs, no trailing slashes, llms.txt content-type |

## Photos to drop in `images/`

| Filename | Used on | Spec |
|---|---|---|
| `avi-peer.jpg`         | Homepage "I'm Avi" + About reader pivot | Peer-direct, warm, settled · 800×1000 (4:5) |
| `avi-cinematic.jpg`    | About page hero (full-bleed)            | Cinematic, environmental, dark bg · 1920×1080+ |
| `avi-building.jpg`     | About journey beat 01                   | 800×600 (4:3) |
| `avi-breaking.jpg`     | About journey beat 02 — hospital bed    | 800×600 (4:3) |
| `avi-rebuilding.jpg`   | About journey beat 03 — at desk         | 800×600 (4:3) |

Until you drop the JPGs, the slots show a labelled placeholder so you know exactly where each one lives.

## Scroll FX vocabulary

Add `data-scroll-fx="..."` to any element to opt into a reveal:

| Value | Behaviour |
|---|---|
| (default)      | fade up, 28px |
| `fade-up-lg`   | fade up, 56px (for big hero headlines) |
| `fade-left`    | slide in from right |
| `fade-right`   | slide in from left |
| `zoom`         | gentle scale-up |

Stagger reveals with `style="--fx-delay: 0.15s"` on the element.

Special elements:
- `.reveal-words` — splits text into words, releases them sequentially. Used on "But yours doesn't have to."
- `[data-counter="9"]` — animates from 0 to 9 on first view. Used on "9 out of 10 startups."
- `[data-parallax="0.08"]` — subtle parallax on photos (0–0.15 typical).
- `.btn-magnetic` — CTA cursor follow.
- `.marquee + .marquee-track` — infinite logo strip, hover to pause.
- `.scroll-progress` — top-of-page gradient progress bar.

All FX respect `prefers-reduced-motion`.

## Local preview

```
cd ~/Desktop/dump/tdp-site
python3 -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html` — most browsers will run it fine without a server.

## Deploy to Vercel

```
cd ~/Desktop/dump/tdp-site
npx vercel --prod
```

## Open questions / pending content

- Photographer shoot date for the four Avi photos
- Real testimonial quotes (4 needed) + names + roles + photos
- Press / "backed by" logos (need 5+ real ones, otherwise the band stays hidden)
- ConvertKit form ID + per-source tags so I can wire all 8 forms
- Hero looping video (Higgs stills + Seedance motion) — placeholder shimmer in the meantime
- Production domain (currently `thedeliberatepause.com` in canonical/sitemap/llms.txt)
- Real essay bodies for `/read/[slug]` (current essay page is a representative template)
