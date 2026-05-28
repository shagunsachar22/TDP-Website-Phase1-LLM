# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: layout.spec.ts >> core layout QA >> newsletter keeps nav, footer, and type stable
- Location: tests/layout.spec.ts:13:9

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 1
Received:    8
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "The Deliberate Pause home" [ref=e4] [cursor=pointer]:
        - /url: /
        - generic [ref=e5]: The Deliberate Pause
      - navigation "Primary" [ref=e6]:
        - list [ref=e7]:
          - listitem [ref=e8]:
            - link "Read" [ref=e9] [cursor=pointer]:
              - /url: read.html
          - listitem [ref=e10]:
            - link "FAQ" [ref=e11] [cursor=pointer]:
              - /url: faq.html
          - listitem [ref=e12]:
            - link "About" [ref=e13] [cursor=pointer]:
              - /url: about.html
      - link "Subscribe →" [ref=e14] [cursor=pointer]:
        - /url: newsletter.html
        - generic [ref=e15]: Subscribe
        - generic [ref=e16]: →
  - main [ref=e17]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e21]: Weekly letter
        - heading "Mental training rooted in yogic philosophy." [level=1] [ref=e22]
        - paragraph [ref=e23]: Join 1,000+ founders learning how to train the mind for pressure, clarity, and better decisions. One essay every Monday at 11:11.
        - generic [ref=e24]:
          - generic [ref=e25]: Every Monday
          - generic [ref=e26]: 11:11 am
          - generic [ref=e27]: 5 minutes
      - complementary "Newsletter signup" [ref=e28]:
        - heading "Subscribe." [level=2] [ref=e29]
        - paragraph [ref=e30]: One essay every Monday on pressure, clarity, better decisions, and the inner cost of building.
        - generic [ref=e31]:
          - generic [ref=e32]: Email address
          - textbox "Email address" [ref=e33]:
            - /placeholder: your@email.com
          - button "Subscribe →" [ref=e34] [cursor=pointer]:
            - text: Subscribe
            - generic [ref=e35]: →
        - generic [ref=e36]: No spam. Ever.
    - region "New reader orientation" [ref=e37]:
      - generic [ref=e38]:
        - paragraph [ref=e39]:
          - strong [ref=e40]: New here?
          - text: The Pause is the highest leverage performance move in a founder's day. This is a weekly letter on pressure, clarity, better decisions, and the inner cost of building.
        - generic "Quick orientation links" [ref=e41]:
          - link "Browse essays" [ref=e42] [cursor=pointer]:
            - /url: read.html
          - link "Read FAQ" [ref=e43] [cursor=pointer]:
            - /url: faq.html
    - region "Your physical and mental health were never the price of winning." [ref=e44]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - generic [ref=e47]:
            - generic [ref=e48]: What you get
            - heading "Your physical and mental health were never the price of winning." [level=2] [ref=e49]
          - paragraph [ref=e50]: They are how you win. This letter is about presence, stillness, dropping the ego, and learning how to pause under pressure.
        - generic [ref=e51]:
          - article [ref=e52]:
            - text: "01"
            - heading "Train the mind for pressure." [level=3] [ref=e53]
            - paragraph [ref=e54]: The best performers reflect sooner, learn faster, recover sooner, and decide before fear decides for them.
          - article [ref=e55]:
            - text: "02"
            - heading "Use ancient practice inside modern pressure." [level=3] [ref=e56]
            - paragraph [ref=e57]: The Yoga Sutras gave the practice. Elite sport gives the proof. The founder's day gives the arena.
          - article [ref=e58]:
            - text: "03"
            - heading "Build without making output your identity." [level=3] [ref=e59]
            - paragraph [ref=e60]: One short essay. One useful frame. One cleaner decision to carry into the work.
    - region "One pause, once a week." [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e63]:
          - generic [ref=e64]: How it works
          - heading "One pause, once a week." [level=2] [ref=e65]
          - paragraph [ref=e66]: Every Monday, one short letter lands in your inbox. Read it before the week takes over, or return to it when pressure starts making the decision for you.
          - paragraph [ref=e67]: Less scrolling. More signal. One useful frame for the work in front of you.
        - generic "How the newsletter flow works" [ref=e68]:
          - generic [ref=e69]:
            - strong [ref=e70]: 1. Start with the Monday letter.
            - text: Read one essay on pressure, identity, ambition, recovery, or decision-making.
          - generic [ref=e71]:
            - strong [ref=e72]: 2. Keep the useful ones.
            - text: The best pieces are written to be reread before a hard conversation, a rejection, or a big week.
          - generic [ref=e73]:
            - strong [ref=e74]: 3. Return when the pressure changes.
            - text: Essays are organized around burnout, failure, ambition, clarity, attention, and recovery.
    - region "Read by the pressure you are carrying." [ref=e75]:
      - generic [ref=e76]:
        - generic [ref=e77]:
          - generic [ref=e78]:
            - generic [ref=e79]: Essay paths
            - heading "Read by the pressure you are carrying." [level=2] [ref=e80]
          - paragraph [ref=e81]: "Start where the week feels loudest: burnout, failure, ambition, decision clarity, attention, or recovery."
        - generic [ref=e82]:
          - article [ref=e83]:
            - heading "Burnout & Identity" [level=3] [ref=e84]
            - paragraph [ref=e85]: When output becomes proof of worth.
          - article [ref=e86]:
            - heading "Failure & Rejection" [level=3] [ref=e87]
            - paragraph [ref=e88]: When no starts feeling like a verdict.
          - article [ref=e89]:
            - heading "Ambition & Success" [level=3] [ref=e90]
            - paragraph [ref=e91]: When winning still does not settle the self.
          - article [ref=e92]:
            - heading "Decision Clarity" [level=3] [ref=e93]
            - paragraph [ref=e94]: When pressure starts making the choice for you.
          - article [ref=e95]:
            - heading "Attention & Recovery" [level=3] [ref=e96]
            - paragraph [ref=e97]: When the mind is always on, but rarely clear.
    - region "I'm Avi." [ref=e98]:
      - generic [ref=e99]:
        - generic [ref=e100]:
          - text: Avi portrait
          - text: "drop image later:"
          - code [ref=e101]: images/avi-peer.jpg
        - generic [ref=e102]:
          - generic [ref=e103]: About Avi
          - heading "I'm Avi." [level=2] [ref=e104]
          - paragraph [ref=e105]: "From selling shoes on the streets of Kathmandu to Wall Street to building CreditVidya in India and selling it to CRED, I learned one thing the hard way: ambition and spirituality are not opposites."
          - paragraph [ref=e106]: "The Yoga Sutras of Patanjali gave me the practice: presence, stillness, and the ability to watch myself without becoming what I was watching. Elite sport gave me the proof: pause is not a retreat from pressure. It is how the best performers enter it."
          - paragraph [ref=e107]: It carried me through the slipped disc, the stroke scare, and the quiet moments where I realized ambition alone could not save me.
          - paragraph [ref=e108]: "The calmest people in the highest-pressure rooms are not calm by accident. They have trained for it. That is the bridge I am building for founders: ancient practice, elite performance, modern pressure."
          - paragraph [ref=e109]: Presence is not an escape from ambition. It is how excellence gets built.
          - paragraph [ref=e110]:
            - text: Better decisions.
            - text: Better leaders.
            - text: Better humans.
          - paragraph [ref=e111]: I built The Deliberate Pause because I needed it first. Now I'm handing it to you, one essay at a time.
          - link "More of the story →" [ref=e112] [cursor=pointer]:
            - /url: about.html
    - region "Get the next Monday letter." [ref=e113]:
      - generic [ref=e115]:
        - generic [ref=e116]:
          - generic [ref=e117]: Subscribe
          - heading "Get the next Monday letter." [level=2] [ref=e118]
          - paragraph [ref=e119]: Five minutes on mental training rooted in yogic philosophy. Sent weekly. Built to be read before the week takes over.
        - generic [ref=e120]:
          - generic [ref=e121]: Email address
          - textbox "Email address" [ref=e122]:
            - /placeholder: your@email.com
          - button "Subscribe →" [ref=e123] [cursor=pointer]:
            - text: Subscribe
            - generic [ref=e124]: →
    - region "Before you subscribe." [ref=e125]:
      - generic [ref=e126]:
        - generic [ref=e127]:
          - generic [ref=e128]:
            - generic [ref=e129]: Quick answers
            - heading "Before you subscribe." [level=2] [ref=e130]
          - paragraph [ref=e131]: A quick sense of what this is, what you'll receive, and where to begin.
        - generic [ref=e132]:
          - article [ref=e133]:
            - heading "What will I get?" [level=3] [ref=e134]
            - paragraph [ref=e135]: One short Monday letter on mental training, founder psychology, yogic philosophy, and better decisions under pressure.
          - article [ref=e136]:
            - heading "Where should I begin?" [level=3] [ref=e137]
            - paragraph [ref=e138]: Start with the pressure you are carrying. The essay paths point you toward burnout, failure, ambition, clarity, attention, or recovery.
          - article [ref=e139]:
            - heading "Why subscribe?" [level=3] [ref=e140]
            - paragraph [ref=e141]: Because the best time to pause is before the week takes over.
  - contentinfo [ref=e142]:
    - generic [ref=e143]:
      - generic [ref=e144]:
        - generic [ref=e145]:
          - generic [ref=e146]: The Deliberate Pause
          - generic [ref=e147]: Mental training for Indian entrepreneurs.
          - paragraph [ref=e148]: Essays on founder psychology, yogic philosophy, and better decisions under pressure.
        - generic [ref=e149]:
          - heading "Get the Monday letter." [level=4] [ref=e150]
          - paragraph [ref=e151]: One essay every Monday at 11:11.
          - link "Subscribe →" [ref=e152] [cursor=pointer]:
            - /url: newsletter.html
            - text: Subscribe
            - generic [ref=e153]: →
      - generic [ref=e154]:
        - generic [ref=e155]:
          - heading "Read" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Essays on Substack" [ref=e159] [cursor=pointer]:
                - /url: read.html
            - listitem [ref=e160]:
              - link "Subscribe" [ref=e161] [cursor=pointer]:
                - /url: newsletter.html
            - listitem [ref=e162]:
              - link "Essay paths" [ref=e163] [cursor=pointer]:
                - /url: read.html#categories
        - generic [ref=e164]:
          - heading "Essay paths" [level=5] [ref=e165]
          - list [ref=e166]:
            - listitem [ref=e167]:
              - link "Burnout & Identity" [ref=e168] [cursor=pointer]:
                - /url: read.html#categories
            - listitem [ref=e169]:
              - link "Failure & Rejection" [ref=e170] [cursor=pointer]:
                - /url: read.html#categories
            - listitem [ref=e171]:
              - link "Ambition & Success" [ref=e172] [cursor=pointer]:
                - /url: read.html#categories
            - listitem [ref=e173]:
              - link "Decision Clarity" [ref=e174] [cursor=pointer]:
                - /url: read.html#categories
            - listitem [ref=e175]:
              - link "Attention & Recovery" [ref=e176] [cursor=pointer]:
                - /url: read.html#categories
        - generic [ref=e177]:
          - heading "FAQ" [level=5] [ref=e178]
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "Questions" [ref=e181] [cursor=pointer]:
                - /url: faq.html
            - listitem [ref=e182]:
              - link "Glossary" [ref=e183] [cursor=pointer]:
                - /url: faq.html#glossary
            - listitem [ref=e184]:
              - link "Sources" [ref=e185] [cursor=pointer]:
                - /url: faq.html#sources
        - generic [ref=e186]:
          - heading "About" [level=5] [ref=e187]
          - list [ref=e188]:
            - listitem [ref=e189]:
              - link "About Avi" [ref=e190] [cursor=pointer]:
                - /url: about.html
            - listitem [ref=e191]:
              - link "Substack" [ref=e192] [cursor=pointer]:
                - /url: https://thedeliberatepause.substack.com/
      - generic [ref=e194]: © 2026 The Deliberate Pause · Founded by Avi Agarwal
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