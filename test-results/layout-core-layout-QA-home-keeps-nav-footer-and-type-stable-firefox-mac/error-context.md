# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: layout.spec.ts >> core layout QA >> home keeps nav, footer, and type stable
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
    - region "Mental training rooted in yogic philosophy." [ref=e18]:
      - generic [ref=e20]:
        - heading "Mental training rooted in yogic philosophy." [level=1] [ref=e21]:
          - generic [ref=e22]: Mental training
          - generic [ref=e23]: rooted in yogic philosophy.
        - paragraph [ref=e24]: Join 1,000+ founders learning how to train the mind for pressure, clarity, and better decisions.
        - link "Subscribe →" [ref=e26] [cursor=pointer]:
          - /url: newsletter.html
          - text: Subscribe
          - generic [ref=e27]: →
        - paragraph [ref=e28]: No spam. Ever.
      - generic: Scroll ↓
    - region "Press and supporters" [ref=e29]:
      - generic [ref=e31]:
        - generic [ref=e32]:
          - text: READ BY FOUNDERS
          - text: BACKED BY
        - generic [ref=e34]:
          - generic [ref=e35]: Logo 1
          - generic [ref=e36]: Logo 2
          - generic [ref=e37]: Logo 3
          - generic [ref=e38]: Logo 4
          - generic [ref=e39]: Logo 5
          - generic [ref=e40]: Logo 6
          - generic [ref=e41]: Logo 7
          - generic [ref=e42]: Logo 8
          - generic [ref=e43]: Logo 1
          - generic [ref=e44]: Logo 2
          - generic [ref=e45]: Logo 3
          - generic [ref=e46]: Logo 4
          - generic [ref=e47]: Logo 5
          - generic [ref=e48]: Logo 6
          - generic [ref=e49]: Logo 7
          - generic [ref=e50]: Logo 8
    - region "Pain enumeration and Avi credential" [ref=e51]:
      - generic [ref=e52]:
        - generic [ref=e53]:
          - paragraph [ref=e54]: 0 out of 10 startups fail.
          - heading "But yours doesn't have to." [level=2] [ref=e55]:
            - generic [ref=e56]: But yours
            - generic [ref=e57]: doesn't have to.
          - paragraph [ref=e58]:
            - text: Your physical and mental health were never the price of winning.
            - emphasis [ref=e59]: They are how you win.
        - list [ref=e60]:
          - listitem [ref=e61]:
            - text: ✓
            - generic [ref=e62]: Pressure. The week starts deciding who you are before you do.
          - listitem [ref=e63]:
            - text: ✓
            - generic [ref=e64]: Clarity. Too many inputs, not enough space to hear the signal.
          - listitem [ref=e65]:
            - text: ✓
            - generic [ref=e66]: Better decisions. Fear is fast. The Pause makes you faster than fear.
          - listitem [ref=e67]:
            - text: ✓
            - generic [ref=e68]: Self-worth. Output is useful. It was never meant to become identity.
          - listitem [ref=e69]:
            - text: ✓
            - generic [ref=e70]: Recovery. The best reflect sooner, learn faster, and recover sooner.
          - listitem [ref=e71]:
            - text: ✓
            - generic [ref=e72]: Courage. The pause helps you decide before fear decides for you.
        - paragraph [ref=e73]: "I built CreditVidya to 740 people and sold it to CRED. The company looked like proof. The body told another story: a slipped disc, then a stroke. I rebuilt myself on presence, stillness, and dropping the ego."
        - generic [ref=e74]:
          - link "Subscribe →" [ref=e75] [cursor=pointer]:
            - /url: newsletter.html
            - text: Subscribe
            - generic [ref=e76]: →
          - paragraph [ref=e77]: The Pause is the highest leverage performance move in a founder's day.
    - region "What other founders are reading." [ref=e78]:
      - generic [ref=e79]:
        - generic [ref=e80]: Read
        - heading "What other founders are reading." [level=2] [ref=e81]
        - generic [ref=e82]:
          - article [ref=e83]:
            - link "The Unicorn Trap essay cover" [ref=e84] [cursor=pointer]:
              - /url: read/the-unicorn-trap-and-the-road-to-enlightenment/
              - img "The Unicorn Trap essay cover" [ref=e85]
            - generic [ref=e86]: Essay
            - heading "The Unicorn Trap." [level=3] [ref=e87]:
              - link "The Unicorn Trap." [ref=e88] [cursor=pointer]:
                - /url: read/the-unicorn-trap-and-the-road-to-enlightenment/
            - paragraph [ref=e89]: The story you tell yourself about scale — and why the body files an objection long before the cap table does.
            - generic [ref=e90]:
              - text: 8 min ·
              - link "Read full essay →" [ref=e91] [cursor=pointer]:
                - /url: https://thedeliberatepause.substack.com/
          - generic [ref=e92]:
            - article [ref=e93]:
              - img "The Low Status Moat Matters thumbnail" [ref=e94] [cursor=pointer]
              - generic [ref=e95]:
                - generic [ref=e96]: Essay
                - heading "Low Status Moat." [level=4] [ref=e97]:
                  - link "Low Status Moat." [ref=e98] [cursor=pointer]:
                    - /url: read/the-low-status-moat-matters/
                - paragraph [ref=e99]: Jan 12 · The work nobody photographs is the work that compounds.
            - article [ref=e100]:
              - img "Does happiness feel different thumbnail" [ref=e101] [cursor=pointer]
              - generic [ref=e102]:
                - generic [ref=e103]: Essay
                - heading "Does happiness feel 'different'?" [level=4] [ref=e104]:
                  - link "Does happiness feel 'different'?" [ref=e105] [cursor=pointer]:
                    - /url: read/does-happiness-feel-different/
                - paragraph [ref=e106]: Apr 13 · Notes on contentment vs. winning — and which one is durable.
            - article [ref=e107]:
              - img "When Success Still Feels Empty thumbnail" [ref=e108] [cursor=pointer]
              - generic [ref=e109]:
                - generic [ref=e110]: Essay
                - heading "When success still feels empty." [level=4] [ref=e111]:
                  - link "When success still feels empty." [ref=e112] [cursor=pointer]:
                    - /url: read/when-success-still-feels-empty/
                - paragraph [ref=e113]: Apr 27 · The hollow feeling after the exit no one warns founders about.
        - link "More from TDP →" [ref=e114] [cursor=pointer]:
          - /url: read.html
    - region "Tools the top 1% already use." [ref=e115]:
      - generic [ref=e117]:
        - generic [ref=e118]:
          - generic [ref=e119]: 05 / The Pause
          - heading "Tools the top 1% already use." [level=2] [ref=e120]
          - paragraph [ref=e121]: Presence, stillness, and dropping the ego. These are not soft ideas. They are performance skills.
          - link "Subscribe →" [ref=e123] [cursor=pointer]:
            - /url: newsletter.html
            - text: Subscribe
            - generic [ref=e124]: →
        - generic [ref=e125]:
          - link "Detach failure from identity Turn failure into feedback without turning it into a verdict on the person building. Identity · Failure" [ref=e126] [cursor=pointer]:
            - /url: faq.html
            - heading "Detach failure from identity" [level=4] [ref=e127]:
              - text: Detach failure
              - text: from identity
            - paragraph [ref=e128]: Turn failure into feedback without turning it into a verdict on the person building.
            - generic [ref=e129]: Identity · Failure
          - link "Untangle self-worth from output Use ambition without letting every result decide who you are. Worth · Output" [ref=e130] [cursor=pointer]:
            - /url: faq.html
            - heading "Untangle self-worth from output" [level=4] [ref=e131]:
              - text: Untangle self-worth
              - text: from output
            - paragraph [ref=e132]: Use ambition without letting every result decide who you are.
            - generic [ref=e133]: Worth · Output
          - link "Find social courage to be vulnerable Say the harder thing earlier, before silence starts making the decision. Courage · Truth" [ref=e134] [cursor=pointer]:
            - /url: read.html
            - heading "Find social courage to be vulnerable" [level=4] [ref=e135]:
              - text: Find social courage
              - text: to be vulnerable
            - paragraph [ref=e136]: Say the harder thing earlier, before silence starts making the decision.
            - generic [ref=e137]: Courage · Truth
          - link "Build the life you choose Keep the work big without letting the work become the whole self. Agency · Choice" [ref=e138] [cursor=pointer]:
            - /url: faq.html#sources
            - heading "Build the life you choose" [level=4] [ref=e139]:
              - text: Build the life
              - text: you choose
            - paragraph [ref=e140]: Keep the work big without letting the work become the whole self.
            - generic [ref=e141]: Agency · Choice
        - generic [ref=e142]:
          - heading "Pause is not a productivity hack. It is identity work for entrepreneurs." [level=3] [ref=e143]
          - list [ref=e144]:
            - listitem [ref=e145]: Catch yourself before the spiral
            - listitem [ref=e146]: Think clearly under pressure
            - listitem [ref=e147]: Decide from clarity, not fear
            - listitem [ref=e148]: Recover faster from setbacks
            - listitem [ref=e149]: Stay ambitious without breaking
    - region "What founders are saying" [ref=e150]:
      - generic [ref=e151]:
        - generic [ref=e152]: What founders are saying
        - generic [ref=e153]:
          - article [ref=e154]:
            - blockquote [ref=e155]: "\"Watching Avi rebuild — Vipassana, the Sutras, Phil Jackson's pages — showed me the way back. His story gave me permission to fix myself.\""
            - generic [ref=e156]:
              - img "Rahul Mehta" [ref=e158]
              - generic [ref=e159]:
                - generic [ref=e160]: Rahul Mehta
                - generic [ref=e161]: Founder
          - article [ref=e162]:
            - blockquote [ref=e163]: "\"Five minutes before the board meeting. Three corners, one breath. The decisions land different now.\""
            - generic [ref=e164]:
              - img "Raghav Kumar" [ref=e166]
              - generic [ref=e167]:
                - generic [ref=e168]: Raghav Kumar
                - generic [ref=e169]: SVP
          - article [ref=e170]:
            - blockquote [ref=e171]: "\"I needed recovery, not intensity. Working with the rhythm — instead of forcing through it — changed everything.\""
            - generic [ref=e172]:
              - img "Riya Mittal" [ref=e174]
              - generic [ref=e175]:
                - generic [ref=e176]: Riya Mittal
                - generic [ref=e177]: Associate Director
          - article [ref=e178]:
            - blockquote [ref=e179]: "\"I stopped checking the phone after 9pm. The world keeps spinning. I sleep. Mornings finally belong to me.\""
            - generic [ref=e180]:
              - img "Pravesh Saraf" [ref=e182]
              - generic [ref=e183]:
                - generic [ref=e184]: Pravesh Saraf
                - generic [ref=e185]: Director, Barmy Wines
          - article [ref=e186]:
            - blockquote [ref=e187]: "\"Finally entrepreneurs who actually get it. Taking care of yourself isn't being soft. It's how people win for years, not months.\""
            - generic [ref=e188]:
              - img "Ankita Rao" [ref=e190]
              - generic [ref=e191]:
                - generic [ref=e192]: Ankita Rao
                - generic [ref=e193]: Director
          - article [ref=e194]:
            - blockquote [ref=e195]: "\"I now see failure as a data point, not a personal judgment. The pause taught me that. It's the difference between collapsing and adjusting.\""
            - generic [ref=e196]:
              - img "Esha Arora" [ref=e198]
              - generic [ref=e199]:
                - generic [ref=e200]: Esha Arora
                - generic [ref=e201]: Product Lead
    - region "What is The Deliberate Pause?" [ref=e202]:
      - generic [ref=e204]:
        - generic [ref=e205]:
          - heading "What is The Deliberate Pause?" [level=2] [ref=e206]
          - paragraph [ref=e207]: Something happens. You react. Most of life happens so fast there is no space between the two.
          - paragraph [ref=e208]: The Deliberate Pause is that space.
          - paragraph [ref=e209]: Ever wondered what separates the good from the great? The best reflect sooner. Learn faster. Recover sooner. Find courage earlier. Decide before fear decides for them.
          - paragraph [ref=e210]: "All of it begins with one skill: the ability to pause under pressure."
          - paragraph [ref=e211]: The pause is the founder psychology tool nobody built for you. So I'm writing it down.
        - 'img "Mechanism illustration: brain · breath · body (placeholder)" [ref=e212]':
          - text: figure / mechanism illustration
          - text: (brain · breath · body — placeholder)
    - region "I'm Avi." [ref=e213]:
      - generic [ref=e215]:
        - img "Avi Agarwal — environmental, peer-coded portrait" [ref=e217]
        - generic [ref=e218]:
          - heading "I'm Avi." [level=2] [ref=e219]
          - paragraph [ref=e220]: "From selling shoes on the streets of Kathmandu to Wall Street to building CreditVidya in India and selling it to CRED, I learned one thing the hard way: ambition and spirituality are not opposites."
          - paragraph [ref=e221]: "The Yoga Sutras of Patanjali gave me the practice: presence, stillness, and the ability to watch myself without becoming what I was watching. Elite sport gave me the proof: pause is not a retreat from pressure. It is how the best performers enter it."
          - paragraph [ref=e222]: It carried me through the slipped disc, the stroke scare, and the quiet moments where I realized ambition alone could not save me.
          - paragraph [ref=e223]: "The calmest people in the highest-pressure rooms are not calm by accident. They have trained for it. That is the bridge I am building for founders: ancient practice, elite performance, modern pressure."
          - paragraph [ref=e224]: Presence is not an escape from ambition. It is how excellence gets built.
          - paragraph [ref=e225]: Better decisions. Better leaders. Better humans.
          - paragraph [ref=e226]: I built The Deliberate Pause because I needed it first. Now I'm handing it to you, one essay at a time.
          - link "More of the story →" [ref=e227] [cursor=pointer]:
            - /url: /about.html
  - contentinfo [ref=e228]:
    - generic [ref=e229]:
      - generic [ref=e230]:
        - generic [ref=e231]:
          - generic [ref=e232]: The Deliberate Pause
          - generic [ref=e233]: Mental training for Indian entrepreneurs.
          - paragraph [ref=e234]: Essays on founder psychology, yogic philosophy, and better decisions under pressure.
        - generic [ref=e235]:
          - heading "Get the Monday letter." [level=4] [ref=e236]
          - paragraph [ref=e237]: One essay every Monday at 11:11.
          - link "Subscribe →" [ref=e238] [cursor=pointer]:
            - /url: newsletter.html
            - text: Subscribe
            - generic [ref=e239]: →
      - generic [ref=e240]:
        - generic [ref=e241]:
          - heading "Read" [level=5] [ref=e242]
          - list [ref=e243]:
            - listitem [ref=e244]:
              - link "Essays on Substack" [ref=e245] [cursor=pointer]:
                - /url: read.html
            - listitem [ref=e246]:
              - link "Subscribe" [ref=e247] [cursor=pointer]:
                - /url: newsletter.html
            - listitem [ref=e248]:
              - link "Essay paths" [ref=e249] [cursor=pointer]:
                - /url: read.html#categories
        - generic [ref=e250]:
          - heading "Essay paths" [level=5] [ref=e251]
          - list [ref=e252]:
            - listitem [ref=e253]:
              - link "Burnout & Identity" [ref=e254] [cursor=pointer]:
                - /url: read.html#categories
            - listitem [ref=e255]:
              - link "Failure & Rejection" [ref=e256] [cursor=pointer]:
                - /url: read.html#categories
            - listitem [ref=e257]:
              - link "Ambition & Success" [ref=e258] [cursor=pointer]:
                - /url: read.html#categories
            - listitem [ref=e259]:
              - link "Decision Clarity" [ref=e260] [cursor=pointer]:
                - /url: read.html#categories
            - listitem [ref=e261]:
              - link "Attention & Recovery" [ref=e262] [cursor=pointer]:
                - /url: read.html#categories
        - generic [ref=e263]:
          - heading "FAQ" [level=5] [ref=e264]
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link "Questions" [ref=e267] [cursor=pointer]:
                - /url: faq.html
            - listitem [ref=e268]:
              - link "Glossary" [ref=e269] [cursor=pointer]:
                - /url: faq.html#glossary
            - listitem [ref=e270]:
              - link "Sources" [ref=e271] [cursor=pointer]:
                - /url: faq.html#sources
        - generic [ref=e272]:
          - heading "About" [level=5] [ref=e273]
          - list [ref=e274]:
            - listitem [ref=e275]:
              - link "About Avi" [ref=e276] [cursor=pointer]:
                - /url: about.html
            - listitem [ref=e277]:
              - link "Substack" [ref=e278] [cursor=pointer]:
                - /url: https://thedeliberatepause.substack.com/
      - generic [ref=e280]: © 2026 The Deliberate Pause · Founded by Avi Agarwal
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