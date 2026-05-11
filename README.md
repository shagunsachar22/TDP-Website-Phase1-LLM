# The Deliberate Pause — site v0.4

Static, multi-page site. Vanilla HTML/CSS, two small JS files (scroll FX + practice widgets).

## Pages

| File | Route | What it does |
|---|---|---|
| `index.html`                       | `/`                              | Homepage — full-bleed video hero with overlaid headline, 12 sections, full scroll FX |
| `about.html`                       | `/about`                         | Cinematic hero (Avi photo full-bleed), identity stack, 3-beat journey, reader pivot, two doors |
| `read.html`                        | `/read`                          | Playbook hero, 2-col archive with sticky sidebar, filter chips, 8 essays |
| `read-essay.html`                  | `/read/[slug]`                   | Representative essay — drop cap, body, pull quote, mid-essay subscribe, share, keep-reading |
| `pause.html`                       | `/pause`                         | Lead magnet — try-one-play breathe widget (CSS animated), what-you-just-did, 4-play toolkit |
| `practice-jackson-triangle.html`   | `/practice/jackson-triangle`     | **Interactive 3-corner tap widget**, Phil Jackson origin, 6 founder situations, related essays |
| `practice-think-box-play-box.html` | `/practice/think-box-play-box`   | **Think Box / Play Box toggle widget**, Annika Sörenstam origin, 6 situations, related essays |
| `practice-90-second-recovery.html` | `/practice/90-second-recovery`   | **Live 90-second countdown timer** (animated stroke ring), Djokovic origin, 6 situations, "Then resume." |

## Shared assets

| File | What |
|---|---|
| `styles.css`       | Design tokens, base, nav, footer, btn, form, eyebrow, scroll FX, practice-page shared classes |
| `scroll-fx.js`     | IntersectionObserver reveals, animated counters, word-by-word reveal, parallax, magnetic CTAs, marquee, scroll progress |
| `interactives.js`  | Triangle tap counter, Think/Play toggle, 90-second countdown timer (loaded on practice pages) |
| `images/`          | Avi photos + logo go here |
| `llms.txt`         | LLM-discoverability brief at root |
| `robots.txt`       | Permissive — explicit allow for GPTBot/ClaudeBot/PerplexityBot/etc. |
| `sitemap.xml`      | All 8 live URLs |
| `vercel.json`      | Clean URLs, no trailing slashes, llms.txt content-type |

## Files to drop into `images/`

**Brand:**
| Filename | Used on | Spec |
|---|---|---|
| `logo.svg`             | Nav across all pages                    | Horizontal lockup, ~28px high, transparent · SVG preferred |
| `hero-poster.jpg`      | Homepage hero video poster frame        | 1920×1080 still from the looping video |
| `hero.mp4`             | (place in `videos/`)                    | Looping hero video, muted, 6-10s |

**Avi:**
| Filename | Used on | Spec |
|---|---|---|
| `avi-peer.jpg`         | Homepage "I'm Avi" + About reader pivot | Peer-direct (white shirt / stool photo), warm, settled · 800×1000 (4:5) |
| `avi-cinematic.jpg`    | About page hero (full-bleed)            | Cinematic (pink blazer / dark bg photo) · 1920×1080+ |
| `avi-building.jpg`     | About journey beat 01                   | 800×600 (4:3) |
| `avi-breaking.jpg`     | About journey beat 02 — hospital bed    | 800×600 (4:3) |
| `avi-rebuilding.jpg`   | About journey beat 03 — at desk         | 800×600 (4:3) |

**Testimonials** (homepage; if file missing, the initials show in a circle as fallback):
| Filename | Person | Role |
|---|---|---|
| `testimonial-rahul.jpg`   | Rahul Mehta   | Founder |
| `testimonial-raghav.jpg`  | Raghav Kumar  | SVP |
| `testimonial-riya.jpg`    | Riya Mittal   | Associate Director |
| `testimonial-pravesh.jpg` | Pravesh Saraf | Director, Barmy Wines |

All testimonial photos: 300×300, square, will be circle-cropped via CSS. Names + quotes are pulled from www.thedeliberatepause.com (the live site) so they match across both versions.

**Extra testimonial photos you sent (6 total) — only 4 are used on the homepage.** Save the remaining 2 if you want them later, or swap them in for any of the 4 above:
- Image 4 (woman, green top, indoor)  → spare female testimonial slot
- Image 6 (woman, black top, necklace) → spare female testimonial slot
- Image 7 (woman, dark tank top)       → spare female testimonial slot

Suggest renaming whichever two you want to use to `testimonial-ankita.jpg` + `testimonial-esha.jpg` (both real names from the live site) and I'll add cards for them in the next iteration.

For the hero video itself, drop a file at `videos/hero.mp4` (the placeholder shows a shimmer in the meantime). Then in `index.html`, uncomment the `<video>` line inside `.hero-video-bg`.

The nav logo: when `images/logo.svg` doesn't exist, the wordmark text shows alone. Drop the SVG in and both the logo + wordmark render side-by-side. Hide the wordmark via CSS if you want logo-only.

## Interactive widgets — what each does

**Jackson Triangle** (`practice-jackson-triangle.html`)
- Three corner buttons: EGO (top), OTHER (bottom-left), INTENT (bottom-right)
- Click each to "tap" — fills with amber glow
- Counter "0 / 3 Tapped" updates live
- At 3/3, "Now send the message →" reveal appears + triangle outline turns amber
- Reset button to redo

**Think Box / Play Box** (`practice-think-box-play-box.html`)
- Toggle switcher with two tabs: THINK BOX (default) | PLAY BOX
- Active tab is solid dark, inactive is outlined
- Pane below swaps content per tab
- Each pane has the protocol description + 5 founder situations

**90-Second Recovery** (`practice-90-second-recovery.html`)
- Big circular SVG ring (drop-shadow glow)
- Time display "1:30" → counts down to "0:00"
- Status flips: READY → RUNNING (amber) → DONE (terracotta)
- Stroke ring fills as time elapses
- START + RESET buttons; START disables while running, RESET works any time

All three respect `prefers-reduced-motion`.

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
- `.reveal-words` — splits text into words, releases them sequentially (homepage's "But yours doesn't have to.")
- `[data-counter="9"]` — animates from 0 to N on first view (homepage's "9 out of 10 startups", read.html's "8 issues so far")
- `[data-parallax="0.08"]` — subtle parallax on photos
- `.btn-magnetic` — CTA cursor follow
- `.marquee + .marquee-track` — infinite logo strip, hover to pause
- `.scroll-progress` — top-of-page gradient progress bar

All FX respect `prefers-reduced-motion`.

## Local preview

```
cd ~/Desktop/dump/tdp-site
python3 -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html`.

## Deploy to Vercel

```
cd ~/Desktop/dump/tdp-site
npx vercel --prod
```

## Open questions / pending content

- Photographer shoot date for the four Avi photos
- Logo SVG (drop into `images/logo.svg`)
- Hero video file (drop into `videos/hero.mp4`)
- Real testimonial quotes (4 needed) + names + roles + photos
- Press / "backed by" logos (need 5+ real ones, otherwise the band stays hidden)
- ConvertKit form ID + per-source tags so I can wire all 12 forms (5 on homepage, 1 read, 1 essay, 4 practice pages, 1 about)
- Production domain (currently `thedeliberatepause.com` in canonical/sitemap/llms.txt)
- Real essay bodies for `/read/[slug]` (current essay page is a representative template)
