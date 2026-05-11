# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> 90-Second timer · starts, counts down, can reset
- Location: tests/visual.spec.ts:110:5

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not "1:30"
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
        - /url: pause.html
        - generic [ref=e7]: →
      - button "Open menu" [ref=e8] [cursor=pointer]: ≡
  - generic [ref=e10]:
    - link "← All Practices" [ref=e11]:
      - /url: pause.html
    - generic [ref=e12]: /
    - generic [ref=e13]: The 90-Second Recovery
  - main [ref=e14]:
    - generic [ref=e16]:
      - generic [ref=e17]: Practice 03 · The 90-Second Recovery
      - 'heading "Djokovic''s rule: ninety seconds between any two points." [level=1] [ref=e18]':
        - text: "Djokovic's rule:"
        - emphasis [ref=e19]:
          - text: ninety seconds
          - text: between any two points.
      - paragraph [ref=e20]: Between the bad meeting and the next one — start the timer. Don't open Slack until it hits zero.
      - generic [ref=e21]:
        - generic [ref=e22]:
          - img [ref=e23]
          - generic [ref=e26]:
            - generic [ref=e27]: 1:30
            - generic [ref=e28]: Ready
        - generic [ref=e29]:
          - button "Start" [ref=e30] [cursor=pointer]:
            - text: Start
            - generic [ref=e31]: →
          - button "Reset" [ref=e32] [cursor=pointer]
    - generic [ref=e35]:
      - generic [ref=e36]:
        - generic [ref=e37]: Origin
        - heading "Novak Djokovic" [level=2] [ref=e38]
        - generic [ref=e39]: ATP · Tennis · 24 Grand Slams
      - generic [ref=e40]:
        - blockquote [ref=e41]: “The point that just happened is over. The next one hasn't started yet. Ninety seconds belong to neither.”
        - paragraph [ref=e42]: "Djokovic doesn't just reset between points — he treats the 90 seconds as sacred. No replay. No projection. Towel, breath, look at the strings, walk to the line. The body regulates and the next point starts clean. Founders don't get this gap by default. The bad meeting bleeds straight into the next one. The rejection email opens while the previous call is still live. The protocol is: insert the gap, on purpose, and don't fill it with input."
    - generic [ref=e44]:
      - generic [ref=e45]: When to use
      - heading "The founder situations this protocol was built for." [level=2] [ref=e46]:
        - text: The founder situations this protocol was
        - emphasis [ref=e47]: built for.
      - separator [ref=e48]
      - generic [ref=e49]:
        - article [ref=e50]:
          - generic [ref=e51]: "01"
          - generic [ref=e52]:
            - heading "Between back-to-back meetings" [level=3] [ref=e53]
            - paragraph [ref=e54]: Stand up. Walk to a window. Don't open Slack. The previous meeting has to die before the next one is born.
        - article [ref=e55]:
          - generic [ref=e56]: "02"
          - generic [ref=e57]:
            - heading "After a hard rejection" [level=3] [ref=e58]
            - paragraph [ref=e59]: Investor passes. Customer churns. Big hire says no. Ninety seconds before you reply, post, or pivot.
        - article [ref=e60]:
          - generic [ref=e61]: "03"
          - generic [ref=e62]:
            - heading "Mid-fundraise" [level=3] [ref=e63]
            - paragraph [ref=e64]: The day of multiple pitches. Each one needs its own clean start. The previous one is a different match.
        - article [ref=e65]:
          - generic [ref=e66]: "04"
          - generic [ref=e67]:
            - heading "After difficult feedback" [level=3] [ref=e68]
            - paragraph [ref=e69]: Cofounder, board member, employee — anyone tells you something hard. Don't respond inside the first 90.
        - article [ref=e70]:
          - generic [ref=e71]: "05"
          - generic [ref=e72]:
            - heading "When the body says \"stop\"" [level=3] [ref=e73]
            - paragraph [ref=e74]: You notice the jaw, the chest, the breath getting short. Don't push through. 90 seconds, then continue.
        - article [ref=e75]:
          - generic [ref=e76]: "06"
          - generic [ref=e77]:
            - heading "Before the high-stakes one" [level=3] [ref=e78]
            - paragraph [ref=e79]: Final-round interview, board update, all-hands. 90 seconds before you walk in. No phone in your hand.
    - generic [ref=e81]:
      - generic [ref=e82]: Then resume.
      - heading "When the timer hits zero, the next point has started." [level=2] [ref=e83]:
        - text: When the timer hits zero, the next point has
        - emphasis [ref=e84]: started.
      - paragraph [ref=e85]: Walk in clean. Don't bring the last point with you.
    - generic [ref=e87]:
      - generic [ref=e88]:
        - heading "Essays · about this practice." [level=2] [ref=e89]
        - link "All essays →" [ref=e90]:
          - /url: read.html
          - text: All essays
          - generic [ref=e91]: →
      - generic [ref=e92]:
        - article [ref=e93]:
          - generic [ref=e94]: Apr 18
          - heading "The 90 seconds you don't take after the bad call." [level=3] [ref=e95]:
            - link "The 90 seconds you don't take after the bad call." [ref=e96]:
              - /url: read-essay.html
          - generic [ref=e97]: Practice
        - article [ref=e98]:
          - generic [ref=e99]: Mar 30
          - heading "Djokovic's strings and the founder's laptop." [level=3] [ref=e100]:
            - link "Djokovic's strings and the founder's laptop." [ref=e101]:
              - /url: read-essay.html
          - generic [ref=e102]: Story
        - article [ref=e103]:
          - generic [ref=e104]: Feb 22
          - heading "Why the body files an objection before you do." [level=3] [ref=e105]:
            - link "Why the body files an objection before you do." [ref=e106]:
              - /url: read-essay.html
          - generic [ref=e107]: Essay
    - generic [ref=e109]:
      - generic [ref=e110]: Three down. One to go.
      - heading "Get the rest in the Pause Playbook." [level=2] [ref=e111]:
        - text: Get the rest in the
        - emphasis [ref=e112]: Pause Playbook.
      - paragraph [ref=e113]: Free PDF. Twelve protocols. In your inbox in sixty seconds.
      - generic [ref=e114]:
        - generic [ref=e115]: Email address
        - textbox "Email address" [ref=e116]:
          - /placeholder: your@email.com
        - button "Send me the Playbook →" [ref=e117] [cursor=pointer]:
          - text: Send me the Playbook
          - generic [ref=e118]: →
      - paragraph [ref=e119]: No spam ever. Unsubscribe in one click.
  - contentinfo [ref=e120]:
    - generic [ref=e121]:
      - generic [ref=e122]:
        - generic [ref=e123]:
          - generic [ref=e124]: The Deliberate Pause
          - generic [ref=e125]: The mental game for founders.
          - paragraph [ref=e126]: Tools and essays for startup founders on building companies without breaking themselves. Sourced from spiritual practice. Proven by sport.
        - generic [ref=e127]:
          - heading "Pause for 5 minutes." [level=4] [ref=e128]
          - paragraph [ref=e129]: Every Monday, 11:11 am.
          - generic [ref=e130]:
            - generic [ref=e131]: Email address
            - textbox "Email address" [ref=e132]:
              - /placeholder: your@email.com
            - button "Subscribe →" [ref=e133] [cursor=pointer]:
              - text: Subscribe
              - generic [ref=e134]: →
      - generic [ref=e135]:
        - generic [ref=e136]:
          - heading "Read" [level=5] [ref=e137]
          - list [ref=e138]:
            - listitem [ref=e139]:
              - link "All essays" [ref=e140]:
                - /url: read.html
        - generic [ref=e141]:
          - heading "Practice" [level=5] [ref=e142]
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "The Pause Playbook" [ref=e145]:
                - /url: pause.html
            - listitem [ref=e146]:
              - link "Federer Reset" [ref=e147]:
                - /url: practice-federer-reset.html
            - listitem [ref=e148]:
              - link "Jackson Triangle" [ref=e149]:
                - /url: practice-jackson-triangle.html
            - listitem [ref=e150]:
              - link "Think Box · Play Box" [ref=e151]:
                - /url: practice-think-box-play-box.html
            - listitem [ref=e152]:
              - link "90-Second Recovery" [ref=e153]:
                - /url: practice-90-second-recovery.html
        - generic [ref=e154]:
          - heading "About" [level=5] [ref=e155]
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "About Avi" [ref=e158]:
                - /url: about.html
            - listitem [ref=e159]:
              - link "Contact" [ref=e160]:
                - /url: /contact
        - generic [ref=e161]:
          - heading "Follow" [level=5] [ref=e162]
          - list [ref=e163]:
            - listitem [ref=e164]:
              - link "Instagram" [ref=e165]:
                - /url: https://instagram.com/
            - listitem [ref=e166]:
              - link "LinkedIn" [ref=e167]:
                - /url: https://linkedin.com/
            - listitem [ref=e168]:
              - link "X" [ref=e169]:
                - /url: https://twitter.com/
      - generic [ref=e170]:
        - generic [ref=e171]: © 2026 The Deliberate Pause · Founded by Avi (Abhishek Agarwal) · Built in [location]
        - list [ref=e172]:
          - listitem [ref=e173]:
            - link "Privacy" [ref=e174]:
              - /url: /privacy
          - listitem [ref=e175]:
            - link "Terms" [ref=e176]:
              - /url: /terms
          - listitem [ref=e177]:
            - link "Contact" [ref=e178]:
              - /url: /contact
```

# Test source

```ts
  16  |   { path: '/practice-90-second-recovery.html',    name: 'ninety' },
  17  | ];
  18  | 
  19  | for (const { path, name } of pages) {
  20  |   test.describe(name, () => {
  21  |     test('renders without errors', async ({ page }) => {
  22  |       const errors: string[] = [];
  23  |       // pageerror = real JS exceptions only
  24  |       page.on('pageerror', (err) => errors.push(err.message));
  25  |       // console.error = filter out expected resource 404s (images Shagun hasn't dropped in yet).
  26  |       // Those use <img onerror=> to fall back gracefully, so they're benign.
  27  |       page.on('console', (msg) => {
  28  |         if (msg.type() !== 'error') return;
  29  |         const text = msg.text();
  30  |         if (text.startsWith('Failed to load resource')) return;
  31  |         if (text.includes('ERR_EMPTY_RESPONSE')) return;
  32  |         errors.push(text);
  33  |       });
  34  | 
  35  |       await page.goto(path);
  36  |       await page.waitForLoadState('networkidle');
  37  | 
  38  |       expect(errors, `${name} had real JS errors: ${errors.join('; ')}`).toEqual([]);
  39  |     });
  40  | 
  41  |     test('no broken images', async ({ page }) => {
  42  |       await page.goto(path);
  43  |       await page.waitForLoadState('networkidle');
  44  |       // Allow placeholders (paths that don't exist yet) — only flag real navigation failures
  45  |       const broken = await page.$$eval('img', (imgs) =>
  46  |         imgs
  47  |           .filter((i) => i.complete && i.naturalWidth === 0 && i.src && !i.hasAttribute('onerror'))
  48  |           .map((i) => i.src)
  49  |       );
  50  |       expect(broken, `${name} has unhandled broken images`).toEqual([]);
  51  |     });
  52  | 
  53  |     test('tap targets ≥ 44px on mobile', async ({ page }, testInfo) => {
  54  |       const vp = page.viewportSize();
  55  |       if (!vp || vp.width > 768) test.skip(true, 'desktop viewport');
  56  |       await page.goto(path);
  57  |       await page.waitForLoadState('networkidle');
  58  |       const small = await page.$$eval('a, button', (els) =>
  59  |         els
  60  |           .filter((el) => {
  61  |             const rect = el.getBoundingClientRect();
  62  |             const visible = rect.width > 0 && rect.height > 0;
  63  |             return visible && (rect.width < 44 || rect.height < 44);
  64  |           })
  65  |           .map((el) => ({
  66  |             tag: el.tagName,
  67  |             text: (el.textContent || '').trim().slice(0, 40),
  68  |             cls: el.className,
  69  |           }))
  70  |       );
  71  |       // Warn rather than fail — some inline links inside body text are intentionally small
  72  |       if (small.length) {
  73  |         console.warn(`${name} · small tap targets:`, small);
  74  |       }
  75  |     });
  76  | 
  77  |     test('full-page screenshot baseline', async ({ page }) => {
  78  |       await page.goto(path);
  79  |       await page.waitForLoadState('networkidle');
  80  |       // Wait for fonts + scroll-fx reveals to settle
  81  |       await page.evaluate(() => document.fonts ? document.fonts.ready : null);
  82  |       await page.waitForTimeout(800);
  83  |       await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true, animations: 'disabled' });
  84  |     });
  85  |   });
  86  | }
  87  | 
  88  | /* ============================================================
  89  |    Interactive widget tests
  90  |    ============================================================ */
  91  | 
  92  | test('Jackson Triangle · tap counter goes 0→3 and reveals done state', async ({ page }) => {
  93  |   await page.goto('/practice-jackson-triangle.html');
  94  |   await expect(page.locator('.jt-counter span')).toHaveText('0');
  95  |   await page.locator('[data-corner="ego"]').click();
  96  |   await page.locator('[data-corner="other"]').click();
  97  |   await page.locator('[data-corner="intent"]').click();
  98  |   await expect(page.locator('.jt-counter span')).toHaveText('3');
  99  |   await expect(page.locator('.jt-done')).toHaveClass(/is-visible/);
  100 | });
  101 | 
  102 | test('Think Box / Play Box · toggle swaps active pane', async ({ page }) => {
  103 |   await page.goto('/practice-think-box-play-box.html');
  104 |   await expect(page.locator('.tbpb-pane[data-pane-id="think"]')).toHaveClass(/is-active/);
  105 |   await page.locator('[data-pane="play"]').click();
  106 |   await expect(page.locator('.tbpb-pane[data-pane-id="play"]')).toHaveClass(/is-active/);
  107 |   await expect(page.locator('.tbpb-pane[data-pane-id="think"]')).not.toHaveClass(/is-active/);
  108 | });
  109 | 
  110 | test('90-Second timer · starts, counts down, can reset', async ({ page }) => {
  111 |   await page.goto('/practice-90-second-recovery.html');
  112 |   await expect(page.locator('.nw-time')).toHaveText('1:30');
  113 |   await page.locator('.nw-start').click();
  114 |   await page.waitForTimeout(2200);
  115 |   const mid = await page.locator('.nw-time').textContent();
> 116 |   expect(mid).not.toBe('1:30');
      |                   ^ Error: expect(received).not.toBe(expected) // Object.is equality
  117 |   await page.locator('.nw-reset').click();
  118 |   await expect(page.locator('.nw-time')).toHaveText('1:30');
  119 | });
  120 | 
  121 | test('Mobile menu · hamburger opens panel + Esc closes', async ({ page }, testInfo) => {
  122 |   const vp = page.viewportSize();
  123 |   if (!vp || vp.width > 768) test.skip(true, 'mobile only');
  124 |   await page.goto('/index.html');
  125 |   await page.locator('.nav-mobile-toggle').click();
  126 |   await expect(page.locator('.mobile-menu')).toHaveClass(/is-open/);
  127 |   await page.keyboard.press('Escape');
  128 |   await expect(page.locator('.mobile-menu')).not.toHaveClass(/is-open/);
  129 | });
  130 | 
  131 | test('Homepage hero · 2-line headline never breaks to 3 lines', async ({ page }) => {
  132 |   await page.goto('/index.html');
  133 |   await page.waitForLoadState('networkidle');
  134 |   // CRITICAL on Firefox: must wait for Fraunces to finish loading. The Georgia fallback
  135 |   // renders ~12% wider, which causes "running a startup?" to wrap to a third line
  136 |   // when measured pre-font-load. Without this, every Firefox/WebKit run fails spuriously.
  137 |   await page.evaluate(() => document.fonts && document.fonts.ready);
  138 |   await page.waitForTimeout(400);
  139 |   const lineCount = await page.locator('.hero-headline').evaluate((el) => {
  140 |     const range = document.createRange();
  141 |     range.selectNodeContents(el);
  142 |     const rects = range.getClientRects();
  143 |     const lines = new Set();
  144 |     for (const r of rects) lines.add(Math.round(r.top / 4) * 4);
  145 |     return lines.size;
  146 |   });
  147 |   expect(lineCount, 'hero headline should be 2 lines, not more').toBeLessThanOrEqual(2);
  148 | });
  149 | 
  150 | test('Forms · all email inputs are ≥ 16px (prevents iOS zoom-on-focus)', async ({ page }) => {
  151 |   for (const { path, name } of pages) {
  152 |     await page.goto(path);
  153 |     const sizes = await page.$$eval('input[type="email"]', (inputs) =>
  154 |       inputs.map((i) => parseFloat(window.getComputedStyle(i).fontSize))
  155 |     );
  156 |     for (const size of sizes) {
  157 |       expect(size, `${name} has an email input below 16px font-size`).toBeGreaterThanOrEqual(16);
  158 |     }
  159 |   }
  160 | });
  161 | 
```