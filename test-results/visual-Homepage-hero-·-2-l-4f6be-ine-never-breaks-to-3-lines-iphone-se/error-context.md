# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> Homepage hero · 2-line headline never breaks to 3 lines
- Location: tests/visual.spec.ts:131:5

# Error details

```
Error: hero headline should be 2 lines

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 2
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
        - /url: "#hero-form"
        - generic [ref=e7]: →
      - button "Open menu" [ref=e8] [cursor=pointer]: ≡
  - main [ref=e9]:
    - region "Overwhelmed running a startup?" [ref=e10]:
      - img "Looping hero video — Higgs stills + Seedance motion (placeholder)" [ref=e11]:
        - generic: ▶ looping video — Higgs stills + Seedance motion
      - generic [ref=e12]:
        - heading "Overwhelmed running a startup?" [level=1] [ref=e13]:
          - text: Overwhelmed
          - text: running a startup?
        - paragraph [ref=e14]: You're not alone. Running a startup is hard. The playbook — rooted in spiritual practice, proven by athletes — is how you stay present in the moments that decide the company.
        - generic [ref=e15]:
          - generic [ref=e16]: Email address
          - textbox "Email address" [ref=e17]:
            - /placeholder: your@email.com
          - button "Send me the Pause Playbook — Free →" [ref=e18] [cursor=pointer]:
            - text: Send me the Pause Playbook — Free
            - generic [ref=e19]: →
        - paragraph [ref=e20]: No spam ever. Unsubscribe in one click.
      - generic: Scroll ↓
    - region "Press and supporters" [ref=e21]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - text: Read by founders
          - text: Backed by
        - generic [ref=e26]:
          - generic [ref=e27]: Logo 1
          - generic [ref=e28]: Logo 2
          - generic [ref=e29]: Logo 3
          - generic [ref=e30]: Logo 4
          - generic [ref=e31]: Logo 5
          - generic [ref=e32]: Logo 6
          - generic [ref=e33]: Logo 7
          - generic [ref=e34]: Logo 8
          - generic [ref=e35]: Logo 1
          - generic [ref=e36]: Logo 2
          - generic [ref=e37]: Logo 3
          - generic [ref=e38]: Logo 4
          - generic [ref=e39]: Logo 5
          - generic [ref=e40]: Logo 6
          - generic [ref=e41]: Logo 7
          - generic [ref=e42]: Logo 8
    - region "The cost" [ref=e43]:
      - heading "The years founders are losing — health, family, self, peace — were never the price of winning." [level=2] [ref=e45]:
        - text: The years founders are losing —
        - emphasis [ref=e46]: health, family, self, peace
        - text: — were never the price of winning.
    - region "What founders are juggling" [ref=e47]:
      - list [ref=e49]:
        - listitem [ref=e50]:
          - text: ✓
          - generic [ref=e51]: Juggling everything. Hiring, operations, and fundraising at the same time.
        - listitem [ref=e52]:
          - text: ✓
          - generic [ref=e53]: Body breaking. Sleep gone. Nutrition gone. Running on fumes.
        - listitem [ref=e54]:
          - text: ✓
          - generic [ref=e55]: No long view. Holding the future while running today's standup.
        - listitem [ref=e56]:
          - text: ✓
          - generic [ref=e57]: Decision overload. Choices stacking faster than you can think.
        - listitem [ref=e58]:
          - text: ✓
          - generic [ref=e59]: Resource-starved. Building without enough capital, without enough team.
        - listitem [ref=e60]:
          - text: ✓
          - generic [ref=e61]: Founder loneliness. A path no one around you walks.
    - region "A note from Avi" [ref=e62]:
      - paragraph [ref=e64]: I built CreditVidya to 740 people and sold it to CRED. The body broke first. A slipped disc, then a stroke. I rebuilt myself on the philosophy Phil Jackson used to win 11 NBA championships. Presence. Stillness. Dropping the ego.
    - region "But yours doesn't have to." [ref=e65]:
      - generic [ref=e66]:
        - paragraph [ref=e67]: 0 out of 10 startups fail.
        - heading "But yours doesn't have to." [level=2] [ref=e68]:
          - generic [ref=e69]: But
          - generic [ref=e70]: yours
          - generic [ref=e71]: doesn't
          - generic [ref=e72]: have
          - generic [ref=e73]: to.
        - paragraph [ref=e74]: The Pause is the highest-leverage move in a founder's day.
        - generic [ref=e75]:
          - generic [ref=e76]: Email address
          - textbox "Email address" [ref=e77]:
            - /placeholder: your@email.com
          - button "Build without breaking →" [ref=e78] [cursor=pointer]:
            - text: Build without breaking
            - generic [ref=e79]: →
        - paragraph [ref=e80]: No spam ever. Unsubscribe in one click.
    - region "What other founders are reading" [ref=e81]:
      - generic [ref=e82]:
        - generic [ref=e83]: What other founders are reading
        - generic [ref=e84]:
          - article [ref=e85]:
            - link "Featured essay cover (placeholder)" [ref=e86]:
              - /url: read-essay.html
              - img "Featured essay cover (placeholder)" [ref=e87]
            - generic [ref=e88]: Essay
            - heading "The Unicorn Trap." [level=3] [ref=e89]:
              - link "The Unicorn Trap." [ref=e90]:
                - /url: read-essay.html
            - paragraph [ref=e91]: The story you tell yourself about scale — and why the body files an objection long before the cap table does.
            - generic [ref=e92]:
              - text: 6 min ·
              - link "Read more →" [ref=e93]:
                - /url: read-essay.html
          - generic [ref=e94]:
            - article [ref=e95]:
              - img "Story thumbnail" [ref=e96]
              - generic [ref=e97]:
                - generic [ref=e98]: Story
                - heading "Low Status Moat." [level=4] [ref=e99]:
                  - link "Low Status Moat." [ref=e100]:
                    - /url: read-essay.html
                - paragraph [ref=e101]: Mar 17 · The work nobody photographs is the work that compounds.
            - article [ref=e102]:
              - img "Essay thumbnail" [ref=e103]
              - generic [ref=e104]:
                - generic [ref=e105]: Essay
                - heading "Does happiness feel 'different'?" [level=4] [ref=e106]:
                  - link "Does happiness feel 'different'?" [ref=e107]:
                    - /url: read-essay.html
                - paragraph [ref=e108]: Apr 14 · Notes on contentment vs. winning — and which one is durable.
            - article [ref=e109]:
              - img "Story thumbnail" [ref=e110]
              - generic [ref=e111]:
                - generic [ref=e112]: Story
                - heading "When success still feels empty." [level=4] [ref=e113]:
                  - link "When success still feels empty." [ref=e114]:
                    - /url: read-essay.html
                - paragraph [ref=e115]: Apr 28 · The hollow feeling after the exit no one warns founders about.
    - region "Tools the top 1% already use." [ref=e116]:
      - generic [ref=e118]:
        - generic [ref=e119]:
          - generic [ref=e120]: 05 / The Pause
          - heading "Tools the top 1% already use." [level=2] [ref=e121]
          - paragraph [ref=e122]: Four protocols, translated from elite sport into the founder's workday. Get them free.
          - generic [ref=e123]:
            - generic [ref=e124]: Email address
            - textbox "Email address" [ref=e125]:
              - /placeholder: your@email.com
            - button "Get the Playbook →" [ref=e126] [cursor=pointer]:
              - text: Get the Playbook
              - generic [ref=e127]: →
          - paragraph [ref=e128]: No spam ever. Unsubscribe in one click.
          - paragraph [ref=e129]: Four plays. One PDF. You'll run them this week.
        - generic [ref=e130]:
          - link "Improve Focus Hold one thing when ten are pulling. Phil Jackson · NBA Basketball" [ref=e131]:
            - /url: practice-jackson-triangle.html
            - heading "Improve Focus" [level=4] [ref=e132]:
              - text: Improve
              - text: Focus
            - paragraph [ref=e133]: Hold one thing when ten are pulling.
            - generic [ref=e134]: Phil Jackson · NBA Basketball
          - link "Build Resilience Recover in seconds, not days, after the hit. Novak Djokovic · Grand Slam Tennis" [ref=e135]:
            - /url: practice-90-second-recovery.html
            - heading "Build Resilience" [level=4] [ref=e136]:
              - text: Build
              - text: Resilience
            - paragraph [ref=e137]: Recover in seconds, not days, after the hit.
            - generic [ref=e138]: Novak Djokovic · Grand Slam Tennis
          - link "Build Confidence Walk into the meeting that matters, ready. Annika Sörenstam · LPGA Golf" [ref=e139]:
            - /url: practice-think-box-play-box.html
            - heading "Build Confidence" [level=4] [ref=e140]:
              - text: Build
              - text: Confidence
            - paragraph [ref=e141]: Walk into the meeting that matters, ready.
            - generic [ref=e142]: Annika Sörenstam · LPGA Golf
          - link "Manage Stress Drop your heart rate before the next decision. Roger Federer · Grand Slam Tennis" [ref=e143]:
            - /url: practice-federer-reset.html
            - heading "Manage Stress" [level=4] [ref=e144]:
              - text: Manage
              - text: Stress
            - paragraph [ref=e145]: Drop your heart rate before the next decision.
            - generic [ref=e146]: Roger Federer · Grand Slam Tennis
        - generic [ref=e147]:
          - heading "What the Pause gives you." [level=3] [ref=e148]
          - list [ref=e149]:
            - listitem [ref=e150]: Catch yourself before the spiral
            - listitem [ref=e151]: Think clearly under pressure
            - listitem [ref=e152]: Decide from clarity, not fear
            - listitem [ref=e153]: Recover faster from setbacks
            - listitem [ref=e154]: Stay ambitious without breaking
    - region "What founders are saying" [ref=e155]:
      - generic [ref=e156]:
        - generic [ref=e157]: What founders are saying
        - generic [ref=e158]:
          - article [ref=e159]:
            - blockquote [ref=e160]: "\"Watching Avi rebuild — Vipassana, the Sutras, Phil Jackson's pages — showed me the way back. His story gave me permission to fix myself.\""
            - generic [ref=e161]:
              - img "Rahul Mehta" [ref=e163]
              - generic [ref=e164]:
                - generic [ref=e165]: Rahul Mehta
                - generic [ref=e166]: Founder
          - article [ref=e167]:
            - blockquote [ref=e168]: "\"Five minutes before the board meeting. Three corners, one breath. The decisions land different now.\""
            - generic [ref=e169]:
              - img "Raghav Kumar" [ref=e171]
              - generic [ref=e172]:
                - generic [ref=e173]: Raghav Kumar
                - generic [ref=e174]: SVP
          - article [ref=e175]:
            - blockquote [ref=e176]: "\"I needed recovery, not intensity. Working with the rhythm — instead of forcing through it — changed everything.\""
            - generic [ref=e177]:
              - img "Riya Mittal" [ref=e179]
              - generic [ref=e180]:
                - generic [ref=e181]: Riya Mittal
                - generic [ref=e182]: Associate Director
          - article [ref=e183]:
            - blockquote [ref=e184]: "\"I stopped checking the phone after 9pm. The world keeps spinning. I sleep. Mornings finally belong to me.\""
            - generic [ref=e185]:
              - img "Pravesh Saraf" [ref=e187]
              - generic [ref=e188]:
                - generic [ref=e189]: Pravesh Saraf
                - generic [ref=e190]: Director, Barmy Wines
          - article [ref=e191]:
            - blockquote [ref=e192]: "\"Finally founders who actually get it. Taking care of yourself isn't being soft — it's being smart. People who want to win for years, not months.\""
            - generic [ref=e193]:
              - img "Ankita Rao" [ref=e195]
              - generic [ref=e196]:
                - generic [ref=e197]: Ankita Rao
                - generic [ref=e198]: Director
          - article [ref=e199]:
            - blockquote [ref=e200]: "\"I now see failure as a data point, not a personal judgment. The pause taught me that. It's the difference between collapsing and adjusting.\""
            - generic [ref=e201]:
              - img "Esha Arora" [ref=e203]
              - generic [ref=e204]:
                - generic [ref=e205]: Esha Arora
                - generic [ref=e206]: Product Lead
    - region "What is the Deliberate Pause?" [ref=e207]:
      - generic [ref=e209]:
        - generic [ref=e210]:
          - heading "What is the Deliberate Pause?" [level=2] [ref=e211]
          - paragraph [ref=e212]: The pause is the deliberate act of creating space — between trigger and response, between the world hitting you and the way you react to it.
          - paragraph [ref=e213]: Jordan, Federer, Annika — they've used tools rooted in spiritual practice to win under pressure for thirty years. Founders have been left out.
          - paragraph [ref=e214]: We're closing that gap.
        - 'img "Mechanism illustration: brain · breath · body (placeholder)" [ref=e215]':
          - text: figure / mechanism illustration
          - text: (brain · breath · body — placeholder)
    - region "I'm Avi." [ref=e216]:
      - generic [ref=e218]:
        - img "Avi Agarwal — environmental, peer-coded portrait" [ref=e220]
        - generic [ref=e221]:
          - heading "I'm Avi." [level=2] [ref=e222]
          - paragraph [ref=e223]: "From selling shoes on the streets of Kathmandu to working on Wall Street to co-founding CreditVidya in India and selling it to CRED — I came to believe this: ambition and spirituality aren't opposites."
          - paragraph [ref=e224]: Spirituality isn't found in the mountains. It's found in the daily work. Presence, stillness, dropping the ego — they're how excellence gets built. Better decisions. Better leaders. Better humans.
          - paragraph [ref=e225]: I built The Deliberate Pause because I needed it first. Now I'm handing it to you.
          - link "More of the story →" [ref=e226]:
            - /url: /about.html
    - region "Pause for 5 minutes." [ref=e227]:
      - generic [ref=e228]:
        - heading "Pause for 5 minutes." [level=2] [ref=e229]
        - heading "Every Monday, 11:11 am." [level=3] [ref=e230]
        - paragraph [ref=e231]: Start your week with a tool, not a feeling.
        - generic [ref=e232]:
          - generic [ref=e233]: Email address
          - textbox "Email address" [ref=e234]:
            - /placeholder: your@email.com
          - button "Build without breaking →" [ref=e235] [cursor=pointer]:
            - text: Build without breaking
            - generic [ref=e236]: →
        - paragraph [ref=e237]: No spam ever. Unsubscribe in one click.
  - contentinfo [ref=e238]:
    - generic [ref=e239]:
      - generic [ref=e240]:
        - generic [ref=e241]:
          - generic [ref=e242]: The Deliberate Pause
          - generic [ref=e243]: The mental game for founders.
          - paragraph [ref=e244]: Tools and essays for startup founders on building companies without breaking themselves. Sourced from spiritual practice. Proven by sport.
        - generic [ref=e245]:
          - heading "Pause for 5 minutes." [level=4] [ref=e246]
          - paragraph [ref=e247]: Every Monday, 11:11 am.
          - generic [ref=e248]:
            - generic [ref=e249]: Email address
            - textbox "Email address" [ref=e250]:
              - /placeholder: your@email.com
            - button "Subscribe →" [ref=e251] [cursor=pointer]:
              - text: Subscribe
              - generic [ref=e252]: →
      - generic [ref=e253]:
        - generic [ref=e254]:
          - heading "Read" [level=5] [ref=e255]
          - list [ref=e256]:
            - listitem [ref=e257]:
              - link "All essays" [ref=e258]:
                - /url: read.html
        - generic [ref=e259]:
          - heading "Practice" [level=5] [ref=e260]
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link "The Pause Playbook" [ref=e263]:
                - /url: pause.html
            - listitem [ref=e264]:
              - link "Federer Reset" [ref=e265]:
                - /url: practice-federer-reset.html
            - listitem [ref=e266]:
              - link "Jackson Triangle" [ref=e267]:
                - /url: practice-jackson-triangle.html
            - listitem [ref=e268]:
              - link "Think Box · Play Box" [ref=e269]:
                - /url: practice-think-box-play-box.html
            - listitem [ref=e270]:
              - link "90-Second Recovery" [ref=e271]:
                - /url: practice-90-second-recovery.html
        - generic [ref=e272]:
          - heading "About" [level=5] [ref=e273]
          - list [ref=e274]:
            - listitem [ref=e275]:
              - link "About Avi" [ref=e276]:
                - /url: about.html
            - listitem [ref=e277]:
              - link "Contact" [ref=e278]:
                - /url: /contact
        - generic [ref=e279]:
          - heading "Follow" [level=5] [ref=e280]
          - list [ref=e281]:
            - listitem [ref=e282]:
              - link "Instagram" [ref=e283]:
                - /url: https://instagram.com/
            - listitem [ref=e284]:
              - link "LinkedIn" [ref=e285]:
                - /url: https://linkedin.com/
            - listitem [ref=e286]:
              - link "X" [ref=e287]:
                - /url: https://twitter.com/
      - generic [ref=e288]:
        - generic [ref=e289]: © 2026 The Deliberate Pause · Founded by Avi (Abhishek Agarwal) · Built in [location]
        - list [ref=e290]:
          - listitem [ref=e291]:
            - link "Privacy" [ref=e292]:
              - /url: /privacy
          - listitem [ref=e293]:
            - link "Terms" [ref=e294]:
              - /url: /terms
          - listitem [ref=e295]:
            - link "Contact" [ref=e296]:
              - /url: /contact
```

# Test source

```ts
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
  116 |   expect(mid).not.toBe('1:30');
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
  133 |   const lineCount = await page.locator('.hero-headline').evaluate((el) => {
  134 |     const range = document.createRange();
  135 |     range.selectNodeContents(el);
  136 |     const rects = range.getClientRects();
  137 |     // Group rects by approx vertical position (line breaks)
  138 |     const lines = new Set();
  139 |     for (const r of rects) lines.add(Math.round(r.top / 4) * 4);
  140 |     return lines.size;
  141 |   });
> 142 |   expect(lineCount, 'hero headline should be 2 lines').toBeLessThanOrEqual(2);
      |                                                        ^ Error: hero headline should be 2 lines
  143 | });
  144 | 
  145 | test('Forms · all email inputs are ≥ 16px (prevents iOS zoom-on-focus)', async ({ page }) => {
  146 |   for (const { path, name } of pages) {
  147 |     await page.goto(path);
  148 |     const sizes = await page.$$eval('input[type="email"]', (inputs) =>
  149 |       inputs.map((i) => parseFloat(window.getComputedStyle(i).fontSize))
  150 |     );
  151 |     for (const size of sizes) {
  152 |       expect(size, `${name} has an email input below 16px font-size`).toBeGreaterThanOrEqual(16);
  153 |     }
  154 |   }
  155 | });
  156 | 
```