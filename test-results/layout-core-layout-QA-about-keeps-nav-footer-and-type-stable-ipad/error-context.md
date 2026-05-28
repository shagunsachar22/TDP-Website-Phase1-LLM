# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: layout.spec.ts >> core layout QA >> about keeps nav, footer, and type stable
- Location: tests/layout.spec.ts:13:9

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 1
Received:    19
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "The Deliberate Pause" [ref=e4]:
        - /url: /
        - generic [ref=e5]: The Deliberate Pause
      - navigation "Primary"
      - link "→" [ref=e6]:
        - /url: newsletter.html
        - generic [ref=e7]: →
      - button "Open menu" [ref=e8] [cursor=pointer]: ≡
  - main [ref=e9]:
    - generic [ref=e10]:
      - img "Avi Agarwal portrait — cinematic, environmental" [ref=e12]
      - generic [ref=e13]:
        - generic [ref=e14]: Avi's Story
        - heading "Ambition and spirituality are not opposites." [level=1] [ref=e15]
        - generic [ref=e16]: Scroll ↓
    - region "Entrepreneur. Writer. Practitioner." [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]: 03 / Identity
        - generic [ref=e20]:
          - heading "Entrepreneur. Writer. Practitioner." [level=2] [ref=e21]:
            - generic [ref=e22]: Entrepreneur.
            - generic [ref=e23]: Writer.
            - generic [ref=e24]: Practitioner.
          - generic [ref=e25]:
            - paragraph [ref=e26]: "From selling shoes on the streets of Kathmandu to Wall Street to building CreditVidya in India and selling it to CRED, I learned one thing the hard way: ambition and spirituality are not opposites."
            - paragraph [ref=e27]: The Yoga Sutras gave me the practice. Elite sport gave me the proof. The founder's day gave me the arena.
    - generic [ref=e30]:
      - generic [ref=e31]:
        - generic [ref=e32]: 740people
        - generic [ref=e33]: CreditVidya, scaled from zero
      - generic [ref=e34]:
        - generic [ref=e35]: 1exit
        - generic [ref=e36]: Acquired by CRED
      - generic [ref=e37]:
        - generic [ref=e38]: 2breaks
        - generic [ref=e39]: Slipped disc. Stroke.
      - generic [ref=e40]:
        - generic [ref=e41]: 11rings
        - generic [ref=e42]: The playbook I rebuilt on
    - generic [ref=e45]:
      - generic [ref=e46]:
        - text: press article — TechCrunch / YourStory
        - text: CreditVidya acquired by CRED
      - generic [ref=e47]:
        - paragraph [ref=e48]: "\"From humble beginnings.\""
        - generic [ref=e49]: Primary-source credential
    - region "04 / Journey" [ref=e50]:
      - generic [ref=e51]:
        - generic [ref=e52]: 04 / Journey
        - article [ref=e53]:
          - generic [ref=e54]:
            - generic [ref=e55]: Chapter
            - text: "01"
          - generic [ref=e56]:
            - generic [ref=e57]: Building
            - heading "Kathmandu street kid. Wall Street. Then CreditVidya." [level=3] [ref=e58]
            - paragraph [ref=e59]: I sold shoes on the streets of Kathmandu as a kid. Worked Wall Street as a young man. Then co-founded CreditVidya in India and scaled it to 740 people over a decade. CRED acquired us. Twenty years of climbing.
            - blockquote [ref=e60]: The version of me from those years didn't pause. He sprinted.
            - paragraph [ref=e61]: That version got the company built. He also got me broken. I just didn't know it yet.
          - generic [ref=e62]:
            - text: building photo · 800×600
            - text: "drop:"
            - code [ref=e63]: images/avi-building.jpg
        - article [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]: Chapter
            - text: "02"
          - generic [ref=e67]:
            - generic [ref=e68]: Breaking
            - heading "The body had been keeping score." [level=3] [ref=e69]
            - paragraph [ref=e70]: The slipped disc came first. Then the stroke. The body had been keeping score the entire time. I just hadn't been reading the ledger.
            - blockquote [ref=e71]: Some founders break in the boardroom. I broke in the body. The company kept running. I didn't.
            - paragraph [ref=e72]: Building the company had been visible. What it was costing me hadn't been — until it suddenly was. And then nothing else mattered.
          - generic [ref=e73]:
            - text: hospital bed photo · proof "build without breaking" isn't a metaphor
            - text: "drop:"
            - code [ref=e74]: images/avi-breaking.jpg
        - article [ref=e75]:
          - generic [ref=e76]:
            - generic [ref=e77]: Chapter
            - text: "03"
          - generic [ref=e78]:
            - generic [ref=e79]: Re-building
            - heading "The integration was the actual work." [level=3] [ref=e80]
            - paragraph [ref=e81]: Vipassana. Patanjali's Yoga Sutras, read and re-read. Studying what Phil Jackson did with the Bulls — and what George Mumford did with Kobe and Jordan. Federer's pre-serve breath. Annika Sörenstam's line in the grass.
            - blockquote [ref=e82]: The integration was the actual work. Not the side project. Not the retreat. Not "after the company."
            - paragraph [ref=e83]: The Deliberate Pause is what I built once I knew that. The principles behind championship composure, translated for an entrepreneur's day. I'm bringing both to you.
          - generic [ref=e84]:
            - text: contemporary Avi at desk · Yoga Sutras nearby · post-recovery
            - text: "drop:"
            - code [ref=e85]: images/avi-rebuilding.jpg
    - generic [ref=e87]:
      - generic [ref=e88]: Featured in
      - generic [ref=e89]:
        - generic [ref=e90]: Logo 1
        - generic [ref=e91]: Logo 2
        - generic [ref=e92]: Logo 3
        - generic [ref=e93]: Logo 4
        - generic [ref=e94]: Logo 5
        - generic [ref=e95]: Logo 6
      - paragraph [ref=e96]: "Honesty rule: only ship real logos. If <5 exist, this band waits to Phase 1."
    - region "How can I help you?" [ref=e97]:
      - generic [ref=e99]:
        - img "Avi Agarwal — peer-direct portrait, warm, settled" [ref=e101]
        - generic [ref=e102]:
          - generic [ref=e103]: 05 / Reader Pivot
          - heading "How can I help you?" [level=2] [ref=e104]
          - paragraph [ref=e105]: I can't help with everything. Here's what I can help with.
          - list [ref=e106]:
            - listitem [ref=e107]: ✓ Name the pressure before the meeting that matters
            - listitem [ref=e108]: ✓ Stop confusing exhaustion for commitment
            - listitem [ref=e109]: ✓ Recover from setbacks without grinding through them
            - listitem [ref=e110]: ✓ Decide from clarity, not from fear
            - listitem [ref=e111]: ✓ Build the company without losing yourself
    - region "Where to start." [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e114]: 06 / Where to start
        - heading "Where to start." [level=2] [ref=e115]
        - generic [ref=e116]:
          - article [ref=e117]:
            - generic [ref=e118]: Start here
            - heading "The FAQ." [level=3] [ref=e119]
            - paragraph [ref=e120]: Clear answers on burnout, self-doubt, validation, failure, and the identity cost of building.
            - link "Subscribe →" [ref=e121]:
              - /url: newsletter.html
              - text: Subscribe
              - generic [ref=e122]: →
          - article [ref=e123]:
            - generic [ref=e124]: Newsletter
            - heading "The Essays." [level=3] [ref=e125]
            - paragraph [ref=e126]: One pause every Monday at 11:11. Plus everything I've already written.
            - generic [ref=e127]:
              - generic [ref=e128]: Email address
              - textbox "Email address" [ref=e129]:
                - /placeholder: your@email.com
              - button "Subscribe →" [ref=e130] [cursor=pointer]:
                - text: Subscribe
                - generic [ref=e131]: →
            - paragraph [ref=e132]: No spam ever. Unsubscribe in one click.
  - contentinfo [ref=e133]:
    - generic [ref=e134]:
      - generic [ref=e135]:
        - generic [ref=e136]:
          - generic [ref=e137]: The Deliberate Pause
          - generic [ref=e138]: Mental training for Indian entrepreneurs.
          - paragraph [ref=e139]: Essays on founder psychology, yogic philosophy, and better decisions under pressure.
        - generic [ref=e140]:
          - heading "Get the Monday letter." [level=4] [ref=e141]
          - paragraph [ref=e142]: One essay every Monday at 11:11.
          - link "Subscribe →" [ref=e143]:
            - /url: newsletter.html
            - text: Subscribe
            - generic [ref=e144]: →
      - generic [ref=e145]:
        - generic [ref=e146]:
          - heading "Read" [level=5] [ref=e147]
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Essays on Substack" [ref=e150]:
                - /url: read.html
            - listitem [ref=e151]:
              - link "Subscribe" [ref=e152]:
                - /url: newsletter.html
            - listitem [ref=e153]:
              - link "Essay paths" [ref=e154]:
                - /url: read.html#categories
        - generic [ref=e155]:
          - heading "Essay paths" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Burnout & Identity" [ref=e159]:
                - /url: read.html#categories
            - listitem [ref=e160]:
              - link "Failure & Rejection" [ref=e161]:
                - /url: read.html#categories
            - listitem [ref=e162]:
              - link "Ambition & Success" [ref=e163]:
                - /url: read.html#categories
            - listitem [ref=e164]:
              - link "Decision Clarity" [ref=e165]:
                - /url: read.html#categories
            - listitem [ref=e166]:
              - link "Attention & Recovery" [ref=e167]:
                - /url: read.html#categories
        - generic [ref=e168]:
          - heading "FAQ" [level=5] [ref=e169]
          - list [ref=e170]:
            - listitem [ref=e171]:
              - link "Questions" [ref=e172]:
                - /url: faq.html
            - listitem [ref=e173]:
              - link "Glossary" [ref=e174]:
                - /url: faq.html#glossary
            - listitem [ref=e175]:
              - link "Sources" [ref=e176]:
                - /url: faq.html#sources
        - generic [ref=e177]:
          - heading "About" [level=5] [ref=e178]
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "About Avi" [ref=e181]:
                - /url: about.html
            - listitem [ref=e182]:
              - link "Substack" [ref=e183]:
                - /url: https://thedeliberatepause.substack.com/
      - generic [ref=e185]: © 2026 The Deliberate Pause · Founded by Avi Agarwal
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | const pages = [
  4  |   { path: '/', name: 'home' },
  5  |   { path: '/newsletter.html', name: 'newsletter' },
  6  |   { path: '/read.html', name: 'read' },
  7  |   { path: '/faq.html', name: 'faq' },
  8  |   { path: '/about.html', name: 'about' },
  9  | ];
  10 | 
  11 | test.describe('core layout QA', () => {
  12 |   for (const pageMeta of pages) {
  13 |     test(`${pageMeta.name} keeps nav, footer, and type stable`, async ({ page }) => {
  14 |       await page.goto(pageMeta.path);
  15 |       await page.waitForLoadState('networkidle');
  16 | 
  17 |       const bodyText = await page.locator('body').innerText();
  18 |       expect(bodyText).not.toContain('Substack archive');
  19 |       expect(bodyText).not.toContain('Built in [location]');
  20 | 
  21 |       const overflow = await page.evaluate(() => {
  22 |         const root = document.documentElement;
  23 |         return Math.max(root.scrollWidth, document.body.scrollWidth) - window.innerWidth;
  24 |       });
> 25 |       expect(overflow).toBeLessThanOrEqual(1);
     |                        ^ Error: expect(received).toBeLessThanOrEqual(expected)
  26 | 
  27 |       await expect(page.locator('footer .footer-cols > div')).toHaveCount(4);
  28 |       await expect(page.locator('footer .footer-newsletter .btn')).toBeVisible();
  29 | 
  30 |       const alignment = await page.evaluate(() => {
  31 |         const nav = document.querySelector('.nav-inner')?.getBoundingClientRect();
  32 |         const footer = document.querySelector('footer .wrap')?.getBoundingClientRect();
  33 |         if (!nav || !footer) return null;
  34 |         return {
  35 |           left: Math.abs(nav.left - footer.left),
  36 |           right: Math.abs(nav.right - footer.right),
  37 |         };
  38 |       });
  39 |       expect(alignment).not.toBeNull();
  40 |       expect(alignment!.left).toBeLessThanOrEqual(2);
  41 |       expect(alignment!.right).toBeLessThanOrEqual(2);
  42 | 
  43 |       const overflowingText = await page.locator('h1, h2, h3, .btn, .footer-cols a').evaluateAll((nodes) =>
  44 |         nodes
  45 |           .filter((node) => node.scrollWidth > node.clientWidth + 1)
  46 |           .map((node) => node.textContent?.trim())
  47 |           .filter(Boolean)
  48 |       );
  49 |       expect(overflowingText).toEqual([]);
  50 |     });
  51 |   }
  52 | });
  53 | 
```