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
Received:    3
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "The Deliberate Pause home" [ref=e4]:
        - /url: /
        - generic [ref=e5]: The Deliberate Pause
      - navigation "Primary"
      - link "→" [ref=e6]:
        - /url: newsletter.html
        - generic [ref=e7]: →
      - button "Open menu" [ref=e8] [cursor=pointer]: ≡
  - main [ref=e9]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13]: Weekly letter
        - heading "Mental training rooted in yogic philosophy." [level=1] [ref=e14]
        - paragraph [ref=e15]: Join 1,000+ founders learning how to train the mind for pressure, clarity, and better decisions. One essay every Monday at 11:11.
        - generic [ref=e16]:
          - generic [ref=e17]: Every Monday
          - generic [ref=e18]: 11:11 am
          - generic [ref=e19]: 5 minutes
      - complementary "Newsletter signup" [ref=e20]:
        - heading "Subscribe." [level=2] [ref=e21]
        - paragraph [ref=e22]: One essay every Monday on pressure, clarity, better decisions, and the inner cost of building.
        - generic [ref=e23]:
          - generic [ref=e24]: Email address
          - textbox "Email address" [ref=e25]:
            - /placeholder: your@email.com
          - button "Subscribe →" [ref=e26] [cursor=pointer]:
            - text: Subscribe
            - generic [ref=e27]: →
        - generic [ref=e28]: No spam. Ever.
    - region "New reader orientation" [ref=e29]:
      - generic [ref=e30]:
        - paragraph [ref=e31]:
          - strong [ref=e32]: New here?
          - text: The Pause is the highest leverage performance move in a founder's day. This is a weekly letter on pressure, clarity, better decisions, and the inner cost of building.
        - generic "Quick orientation links" [ref=e33]:
          - link "Browse essays" [ref=e34]:
            - /url: read.html
          - link "Read FAQ" [ref=e35]:
            - /url: faq.html
    - region "Your physical and mental health were never the price of winning." [ref=e36]:
      - generic [ref=e37]:
        - generic [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]: What you get
            - heading "Your physical and mental health were never the price of winning." [level=2] [ref=e41]
          - paragraph [ref=e42]: They are how you win. This letter is about presence, stillness, dropping the ego, and learning how to pause under pressure.
        - generic [ref=e43]:
          - article [ref=e44]:
            - text: "01"
            - heading "Train the mind for pressure." [level=3] [ref=e45]
            - paragraph [ref=e46]: The best performers reflect sooner, learn faster, recover sooner, and decide before fear decides for them.
          - article [ref=e47]:
            - text: "02"
            - heading "Use ancient practice inside modern pressure." [level=3] [ref=e48]
            - paragraph [ref=e49]: The Yoga Sutras gave the practice. Elite sport gives the proof. The founder's day gives the arena.
          - article [ref=e50]:
            - text: "03"
            - heading "Build without making output your identity." [level=3] [ref=e51]
            - paragraph [ref=e52]: One short essay. One useful frame. One cleaner decision to carry into the work.
    - region "One pause, once a week." [ref=e53]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]: How it works
          - heading "One pause, once a week." [level=2] [ref=e57]
          - paragraph [ref=e58]: Every Monday, one short letter lands in your inbox. Read it before the week takes over, or return to it when pressure starts making the decision for you.
          - paragraph [ref=e59]: Less scrolling. More signal. One useful frame for the work in front of you.
        - generic "How the newsletter flow works" [ref=e60]:
          - generic [ref=e61]:
            - strong [ref=e62]: 1. Start with the Monday letter.
            - text: Read one essay on pressure, identity, ambition, recovery, or decision-making.
          - generic [ref=e63]:
            - strong [ref=e64]: 2. Keep the useful ones.
            - text: The best pieces are written to be reread before a hard conversation, a rejection, or a big week.
          - generic [ref=e65]:
            - strong [ref=e66]: 3. Return when the pressure changes.
            - text: Essays are organized around burnout, failure, ambition, clarity, attention, and recovery.
    - region "Read by the pressure you are carrying." [ref=e67]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - generic [ref=e70]:
            - generic [ref=e71]: Essay paths
            - heading "Read by the pressure you are carrying." [level=2] [ref=e72]
          - paragraph [ref=e73]: "Start where the week feels loudest: burnout, failure, ambition, decision clarity, attention, or recovery."
        - generic [ref=e74]:
          - article [ref=e75]:
            - heading "Burnout & Identity" [level=3] [ref=e76]
            - paragraph [ref=e77]: When output becomes proof of worth.
          - article [ref=e78]:
            - heading "Failure & Rejection" [level=3] [ref=e79]
            - paragraph [ref=e80]: When no starts feeling like a verdict.
          - article [ref=e81]:
            - heading "Ambition & Success" [level=3] [ref=e82]
            - paragraph [ref=e83]: When winning still does not settle the self.
          - article [ref=e84]:
            - heading "Decision Clarity" [level=3] [ref=e85]
            - paragraph [ref=e86]: When pressure starts making the choice for you.
          - article [ref=e87]:
            - heading "Attention & Recovery" [level=3] [ref=e88]
            - paragraph [ref=e89]: When the mind is always on, but rarely clear.
    - region "I'm Avi." [ref=e90]:
      - generic [ref=e91]:
        - generic [ref=e92]:
          - text: Avi portrait
          - text: "drop image later:"
          - code [ref=e93]: images/avi-peer.jpg
        - generic [ref=e94]:
          - generic [ref=e95]: About Avi
          - heading "I'm Avi." [level=2] [ref=e96]
          - paragraph [ref=e97]: "From selling shoes on the streets of Kathmandu to Wall Street to building CreditVidya in India and selling it to CRED, I learned one thing the hard way: ambition and spirituality are not opposites."
          - paragraph [ref=e98]: "The Yoga Sutras of Patanjali gave me the practice: presence, stillness, and the ability to watch myself without becoming what I was watching. Elite sport gave me the proof: pause is not a retreat from pressure. It is how the best performers enter it."
          - paragraph [ref=e99]: It carried me through the slipped disc, the stroke scare, and the quiet moments where I realized ambition alone could not save me.
          - paragraph [ref=e100]: "The calmest people in the highest-pressure rooms are not calm by accident. They have trained for it. That is the bridge I am building for founders: ancient practice, elite performance, modern pressure."
          - paragraph [ref=e101]: Presence is not an escape from ambition. It is how excellence gets built.
          - paragraph [ref=e102]:
            - text: Better decisions.
            - text: Better leaders.
            - text: Better humans.
          - paragraph [ref=e103]: I built The Deliberate Pause because I needed it first. Now I'm handing it to you, one essay at a time.
          - link "More of the story →" [ref=e104]:
            - /url: about.html
    - region "Get the next Monday letter." [ref=e105]:
      - generic [ref=e107]:
        - generic [ref=e108]:
          - generic [ref=e109]: Subscribe
          - heading "Get the next Monday letter." [level=2] [ref=e110]
          - paragraph [ref=e111]: Five minutes on mental training rooted in yogic philosophy. Sent weekly. Built to be read before the week takes over.
        - generic [ref=e112]:
          - generic [ref=e113]: Email address
          - textbox "Email address" [ref=e114]:
            - /placeholder: your@email.com
          - button "Subscribe →" [ref=e115] [cursor=pointer]:
            - text: Subscribe
            - generic [ref=e116]: →
    - region "Before you subscribe." [ref=e117]:
      - generic [ref=e118]:
        - generic [ref=e119]:
          - generic [ref=e120]:
            - generic [ref=e121]: Quick answers
            - heading "Before you subscribe." [level=2] [ref=e122]
          - paragraph [ref=e123]: A quick sense of what this is, what you'll receive, and where to begin.
        - generic [ref=e124]:
          - article [ref=e125]:
            - heading "What will I get?" [level=3] [ref=e126]
            - paragraph [ref=e127]: One short Monday letter on mental training, founder psychology, yogic philosophy, and better decisions under pressure.
          - article [ref=e128]:
            - heading "Where should I begin?" [level=3] [ref=e129]
            - paragraph [ref=e130]: Start with the pressure you are carrying. The essay paths point you toward burnout, failure, ambition, clarity, attention, or recovery.
          - article [ref=e131]:
            - heading "Why subscribe?" [level=3] [ref=e132]
            - paragraph [ref=e133]: Because the best time to pause is before the week takes over.
  - contentinfo [ref=e134]:
    - generic [ref=e135]:
      - generic [ref=e136]:
        - generic [ref=e137]:
          - generic [ref=e138]: The Deliberate Pause
          - generic [ref=e139]: Mental training for Indian entrepreneurs.
          - paragraph [ref=e140]: Essays on founder psychology, yogic philosophy, and better decisions under pressure.
        - generic [ref=e141]:
          - heading "Get the Monday letter." [level=4] [ref=e142]
          - paragraph [ref=e143]: One essay every Monday at 11:11.
          - link "Subscribe →" [ref=e144]:
            - /url: newsletter.html
            - text: Subscribe
            - generic [ref=e145]: →
      - generic [ref=e146]:
        - generic [ref=e147]:
          - heading "Read" [level=5] [ref=e148]
          - list [ref=e149]:
            - listitem [ref=e150]:
              - link "Essays on Substack" [ref=e151]:
                - /url: read.html
            - listitem [ref=e152]:
              - link "Subscribe" [ref=e153]:
                - /url: newsletter.html
            - listitem [ref=e154]:
              - link "Essay paths" [ref=e155]:
                - /url: read.html#categories
        - generic [ref=e156]:
          - heading "Essay paths" [level=5] [ref=e157]
          - list [ref=e158]:
            - listitem [ref=e159]:
              - link "Burnout & Identity" [ref=e160]:
                - /url: read.html#categories
            - listitem [ref=e161]:
              - link "Failure & Rejection" [ref=e162]:
                - /url: read.html#categories
            - listitem [ref=e163]:
              - link "Ambition & Success" [ref=e164]:
                - /url: read.html#categories
            - listitem [ref=e165]:
              - link "Decision Clarity" [ref=e166]:
                - /url: read.html#categories
            - listitem [ref=e167]:
              - link "Attention & Recovery" [ref=e168]:
                - /url: read.html#categories
        - generic [ref=e169]:
          - heading "FAQ" [level=5] [ref=e170]
          - list [ref=e171]:
            - listitem [ref=e172]:
              - link "Questions" [ref=e173]:
                - /url: faq.html
            - listitem [ref=e174]:
              - link "Glossary" [ref=e175]:
                - /url: faq.html#glossary
            - listitem [ref=e176]:
              - link "Sources" [ref=e177]:
                - /url: faq.html#sources
        - generic [ref=e178]:
          - heading "About" [level=5] [ref=e179]
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "About Avi" [ref=e182]:
                - /url: about.html
            - listitem [ref=e183]:
              - link "Substack" [ref=e184]:
                - /url: https://thedeliberatepause.substack.com/
      - generic [ref=e186]: © 2026 The Deliberate Pause · Founded by Avi Agarwal
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