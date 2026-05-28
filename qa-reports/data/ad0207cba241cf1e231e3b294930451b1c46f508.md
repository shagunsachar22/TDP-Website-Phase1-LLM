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
Received:    7
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "The Deliberate Pause" [ref=e4]:
        - /url: /
        - generic [ref=e5]: The Deliberate Pause
      - navigation "Primary" [ref=e6]:
        - list [ref=e7]:
          - listitem [ref=e8]:
            - link "Read" [ref=e9]:
              - /url: read.html
          - listitem [ref=e10]:
            - link "FAQ" [ref=e11]:
              - /url: faq.html
          - listitem [ref=e12]:
            - link "About" [ref=e13]:
              - /url: about.html
      - link "Subscribe →" [ref=e14]:
        - /url: newsletter.html
        - generic [ref=e15]: Subscribe
        - generic [ref=e16]: →
  - main [ref=e17]:
    - generic [ref=e18]:
      - img "Avi Agarwal portrait — cinematic, environmental" [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]: Avi's Story
        - heading "Ambition and spirituality are not opposites." [level=1] [ref=e23]
        - generic [ref=e24]: Scroll ↓
    - region "Entrepreneur. Writer. Practitioner." [ref=e25]:
      - generic [ref=e26]:
        - generic [ref=e27]: 03 / Identity
        - generic [ref=e28]:
          - heading "Entrepreneur. Writer. Practitioner." [level=2] [ref=e29]:
            - generic [ref=e30]: Entrepreneur.
            - generic [ref=e31]: Writer.
            - generic [ref=e32]: Practitioner.
          - generic [ref=e33]:
            - paragraph [ref=e34]: "From selling shoes on the streets of Kathmandu to Wall Street to building CreditVidya in India and selling it to CRED, I learned one thing the hard way: ambition and spirituality are not opposites."
            - paragraph [ref=e35]: The Yoga Sutras gave me the practice. Elite sport gave me the proof. The founder's day gave me the arena.
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic [ref=e40]: 740people
        - generic [ref=e41]: CreditVidya, scaled from zero
      - generic [ref=e42]:
        - generic [ref=e43]: 1exit
        - generic [ref=e44]: Acquired by CRED
      - generic [ref=e45]:
        - generic [ref=e46]: 2breaks
        - generic [ref=e47]: Slipped disc. Stroke.
      - generic [ref=e48]:
        - generic [ref=e49]: 11rings
        - generic [ref=e50]: The playbook I rebuilt on
    - generic [ref=e53]:
      - generic [ref=e54]:
        - text: press article — TechCrunch / YourStory
        - text: CreditVidya acquired by CRED
      - generic [ref=e55]:
        - paragraph [ref=e56]: "\"From humble beginnings.\""
        - generic [ref=e57]: Primary-source credential
    - region "04 / Journey" [ref=e58]:
      - generic [ref=e59]:
        - generic [ref=e60]: 04 / Journey
        - article [ref=e61]:
          - generic [ref=e62]:
            - generic [ref=e63]: Chapter
            - text: "01"
          - generic [ref=e64]:
            - generic [ref=e65]: Building
            - heading "Kathmandu street kid. Wall Street. Then CreditVidya." [level=3] [ref=e66]
            - paragraph [ref=e67]: I sold shoes on the streets of Kathmandu as a kid. Worked Wall Street as a young man. Then co-founded CreditVidya in India and scaled it to 740 people over a decade. CRED acquired us. Twenty years of climbing.
            - blockquote [ref=e68]: The version of me from those years didn't pause. He sprinted.
            - paragraph [ref=e69]: That version got the company built. He also got me broken. I just didn't know it yet.
          - generic [ref=e70]:
            - text: building photo · 800×600
            - text: "drop:"
            - code [ref=e71]: images/avi-building.jpg
        - article [ref=e72]:
          - generic [ref=e73]:
            - generic [ref=e74]: Chapter
            - text: "02"
          - generic [ref=e75]:
            - generic [ref=e76]: Breaking
            - heading "The body had been keeping score." [level=3] [ref=e77]
            - paragraph [ref=e78]: The slipped disc came first. Then the stroke. The body had been keeping score the entire time. I just hadn't been reading the ledger.
            - blockquote [ref=e79]: Some founders break in the boardroom. I broke in the body. The company kept running. I didn't.
            - paragraph [ref=e80]: Building the company had been visible. What it was costing me hadn't been — until it suddenly was. And then nothing else mattered.
          - generic [ref=e81]:
            - text: hospital bed photo · proof "build without breaking" isn't a metaphor
            - text: "drop:"
            - code [ref=e82]: images/avi-breaking.jpg
        - article [ref=e83]:
          - generic [ref=e84]:
            - generic [ref=e85]: Chapter
            - text: "03"
          - generic [ref=e86]:
            - generic [ref=e87]: Re-building
            - heading "The integration was the actual work." [level=3] [ref=e88]
            - paragraph [ref=e89]: Vipassana. Patanjali's Yoga Sutras, read and re-read. Studying what Phil Jackson did with the Bulls — and what George Mumford did with Kobe and Jordan. Federer's pre-serve breath. Annika Sörenstam's line in the grass.
            - blockquote [ref=e90]: The integration was the actual work. Not the side project. Not the retreat. Not "after the company."
            - paragraph [ref=e91]: The Deliberate Pause is what I built once I knew that. The principles behind championship composure, translated for an entrepreneur's day. I'm bringing both to you.
          - generic [ref=e92]:
            - text: contemporary Avi at desk · Yoga Sutras nearby · post-recovery
            - text: "drop:"
            - code [ref=e93]: images/avi-rebuilding.jpg
    - generic [ref=e95]:
      - generic [ref=e96]: Featured in
      - generic [ref=e97]:
        - generic [ref=e98]: Logo 1
        - generic [ref=e99]: Logo 2
        - generic [ref=e100]: Logo 3
        - generic [ref=e101]: Logo 4
        - generic [ref=e102]: Logo 5
        - generic [ref=e103]: Logo 6
      - paragraph [ref=e104]: "Honesty rule: only ship real logos. If <5 exist, this band waits to Phase 1."
    - region "How can I help you?" [ref=e105]:
      - generic [ref=e107]:
        - img "Avi Agarwal — peer-direct portrait, warm, settled" [ref=e109]
        - generic [ref=e110]:
          - generic [ref=e111]: 05 / Reader Pivot
          - heading "How can I help you?" [level=2] [ref=e112]
          - paragraph [ref=e113]: I can't help with everything. Here's what I can help with.
          - list [ref=e114]:
            - listitem [ref=e115]: ✓ Name the pressure before the meeting that matters
            - listitem [ref=e116]: ✓ Stop confusing exhaustion for commitment
            - listitem [ref=e117]: ✓ Recover from setbacks without grinding through them
            - listitem [ref=e118]: ✓ Decide from clarity, not from fear
            - listitem [ref=e119]: ✓ Build the company without losing yourself
    - region "Where to start." [ref=e120]:
      - generic [ref=e121]:
        - generic [ref=e122]: 06 / Where to start
        - heading "Where to start." [level=2] [ref=e123]
        - generic [ref=e124]:
          - article [ref=e125]:
            - generic [ref=e126]: Start here
            - heading "The FAQ." [level=3] [ref=e127]
            - paragraph [ref=e128]: Clear answers on burnout, self-doubt, validation, failure, and the identity cost of building.
            - link "Subscribe →" [ref=e129]:
              - /url: newsletter.html
              - text: Subscribe
              - generic [ref=e130]: →
          - article [ref=e131]:
            - generic [ref=e132]: Newsletter
            - heading "The Essays." [level=3] [ref=e133]
            - paragraph [ref=e134]: One pause every Monday at 11:11. Plus everything I've already written.
            - generic [ref=e135]:
              - generic [ref=e136]: Email address
              - textbox "Email address" [ref=e137]:
                - /placeholder: your@email.com
              - button "Subscribe →" [ref=e138] [cursor=pointer]:
                - text: Subscribe
                - generic [ref=e139]: →
            - paragraph [ref=e140]: No spam ever. Unsubscribe in one click.
  - contentinfo [ref=e141]:
    - generic [ref=e142]:
      - generic [ref=e143]:
        - generic [ref=e144]:
          - generic [ref=e145]: The Deliberate Pause
          - generic [ref=e146]: Mental training for Indian entrepreneurs.
          - paragraph [ref=e147]: Essays on founder psychology, yogic philosophy, and better decisions under pressure.
        - generic [ref=e148]:
          - heading "Get the Monday letter." [level=4] [ref=e149]
          - paragraph [ref=e150]: One essay every Monday at 11:11.
          - link "Subscribe →" [ref=e151]:
            - /url: newsletter.html
            - text: Subscribe
            - generic [ref=e152]: →
      - generic [ref=e153]:
        - generic [ref=e154]:
          - heading "Read" [level=5] [ref=e155]
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Essays on Substack" [ref=e158]:
                - /url: read.html
            - listitem [ref=e159]:
              - link "Subscribe" [ref=e160]:
                - /url: newsletter.html
            - listitem [ref=e161]:
              - link "Essay paths" [ref=e162]:
                - /url: read.html#categories
        - generic [ref=e163]:
          - heading "Essay paths" [level=5] [ref=e164]
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "Burnout & Identity" [ref=e167]:
                - /url: read.html#categories
            - listitem [ref=e168]:
              - link "Failure & Rejection" [ref=e169]:
                - /url: read.html#categories
            - listitem [ref=e170]:
              - link "Ambition & Success" [ref=e171]:
                - /url: read.html#categories
            - listitem [ref=e172]:
              - link "Decision Clarity" [ref=e173]:
                - /url: read.html#categories
            - listitem [ref=e174]:
              - link "Attention & Recovery" [ref=e175]:
                - /url: read.html#categories
        - generic [ref=e176]:
          - heading "FAQ" [level=5] [ref=e177]
          - list [ref=e178]:
            - listitem [ref=e179]:
              - link "Questions" [ref=e180]:
                - /url: faq.html
            - listitem [ref=e181]:
              - link "Glossary" [ref=e182]:
                - /url: faq.html#glossary
            - listitem [ref=e183]:
              - link "Sources" [ref=e184]:
                - /url: faq.html#sources
        - generic [ref=e185]:
          - heading "About" [level=5] [ref=e186]
          - list [ref=e187]:
            - listitem [ref=e188]:
              - link "About Avi" [ref=e189]:
                - /url: about.html
            - listitem [ref=e190]:
              - link "Substack" [ref=e191]:
                - /url: https://thedeliberatepause.substack.com/
      - generic [ref=e193]: © 2026 The Deliberate Pause · Founded by Avi Agarwal
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