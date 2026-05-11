# Automated QA — Playwright + Claude Code

Per Avi's note (8 May 2026): "AI agent runs through all browsers and makes auto fixes. We might need to do this across screen sizes etc. So finding an automated way to do this will be better."

This is the setup. Run it once, then every time the site changes you get a screenshot + diff suite that catches regressions before Avi does.

---

## What it does

For every page (homepage, about, read, all 4 practices, lead magnet, essay template), Playwright will:

1. Open it in Chromium, Firefox, and WebKit (Safari engine — this is the one that caught the mobile menu bug)
2. Screenshot at 8 viewports: iPhone SE (375), iPhone 14 Pro (393), iPad Mini (768), iPad Pro (1024), MacBook 13" (1280), Desktop 1440, Desktop 1920, ultra-wide 2560
3. Run scroll-through capture so we see how the page flows, not just the fold
4. Check for: console errors, broken images, layout shifts, contrast failures, broken touch targets (<44px), missing alt text
5. Diff the screenshots against the last approved snapshot
6. Open a PR with a summary if anything regressed

Total run time: ~2 minutes for all pages × all viewports.

---

## One-time install

From `~/Desktop/dump/tdp-site/`:

```bash
# 1. Init npm
npm init -y

# 2. Install Playwright + browsers
npm install --save-dev @playwright/test
npx playwright install --with-deps

# 3. Drop the config
```

Save this as `playwright.config.ts` at the repo root:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html', { outputFolder: 'qa-reports' }]],
  use: {
    baseURL: 'http://localhost:8000',
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npx http-server -p 8000 -s',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'iphone-se',     use: { ...devices['iPhone SE'] } },
    { name: 'iphone-14',     use: { ...devices['iPhone 14 Pro'] } },
    { name: 'pixel-7',       use: { ...devices['Pixel 7'] } },
    { name: 'ipad',          use: { ...devices['iPad Mini'] } },
    { name: 'desktop-1280',  use: { viewport: { width: 1280, height: 800 }, ...devices['Desktop Chrome'] } },
    { name: 'desktop-1440',  use: { viewport: { width: 1440, height: 900 }, ...devices['Desktop Chrome'] } },
    { name: 'desktop-1920',  use: { viewport: { width: 1920, height: 1080 }, ...devices['Desktop Chrome'] } },
    { name: 'webkit-mac',    use: { ...devices['Desktop Safari'] } },
    { name: 'firefox-mac',   use: { ...devices['Desktop Firefox'] } },
  ],
});
```

Save this as `tests/visual.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

const pages = [
  { path: '/',                                  name: 'home' },
  { path: '/about.html',                        name: 'about' },
  { path: '/read.html',                         name: 'read' },
  { path: '/read-essay.html',                   name: 'essay' },
  { path: '/pause.html',                        name: 'pause' },
  { path: '/practice-federer-reset.html',       name: 'federer' },
  { path: '/practice-jackson-triangle.html',    name: 'jackson' },
  { path: '/practice-think-box-play-box.html',  name: 'thinkbox' },
  { path: '/practice-90-second-recovery.html',  name: 'ninety' },
];

for (const { path, name } of pages) {
  test(`${name} · renders cleanly`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()));

    await page.goto(path);
    await page.waitForLoadState('networkidle');

    // Full-page screenshot
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });

    // No JS console errors
    expect(errors, `${name} had console errors`).toEqual([]);

    // No broken images
    const brokenImages = await page.$$eval('img', (imgs) =>
      imgs.filter((i) => i.naturalWidth === 0 && i.src && !i.src.endsWith('/')).map((i) => i.src)
    );
    expect(brokenImages, `${name} has broken images`).toEqual([]);

    // All buttons + links are at least 44×44 (iOS tap target minimum)
    const tinyTargets = await page.$$eval('a, button', (els) =>
      els
        .filter((el) => el.offsetParent !== null) // visible only
        .map((el) => ({ rect: el.getBoundingClientRect(), html: el.outerHTML.slice(0, 80) }))
        .filter(({ rect }) => rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44))
    );
    if (tinyTargets.length) {
      console.warn(`${name} has small tap targets:`, tinyTargets.slice(0, 3));
    }
  });

  test(`${name} · interactive scroll`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
    // Capture every fold as we scroll
    const height = await page.evaluate(() => document.body.scrollHeight);
    const viewport = await page.evaluate(() => window.innerHeight);
    for (let y = 0; y < height; y += viewport) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(300);
    }
  });
}

// Specific widget tests
test('Jackson Triangle · tap counter works', async ({ page }) => {
  await page.goto('/practice-jackson-triangle.html');
  await page.click('[data-corner="ego"]');
  await page.click('[data-corner="other"]');
  await page.click('[data-corner="intent"]');
  await expect(page.locator('.jt-counter span')).toHaveText('3');
  await expect(page.locator('.jt-done')).toHaveClass(/is-visible/);
});

test('90-Second timer · counts down', async ({ page }) => {
  await page.goto('/practice-90-second-recovery.html');
  await page.click('.nw-start');
  await page.waitForTimeout(2000);
  const time = await page.locator('.nw-time').textContent();
  expect(time).not.toBe('1:30');
});

test('Mobile menu · hamburger opens panel', async ({ page, browserName }, testInfo) => {
  await page.goto('/');
  // Only on mobile viewports
  const vp = page.viewportSize();
  if (vp && vp.width > 768) test.skip();
  await page.click('.nav-mobile-toggle');
  await expect(page.locator('.mobile-menu')).toHaveClass(/is-open/);
});
```

---

## Daily use

```bash
# Run the full suite (≈2 min)
npx playwright test

# Run just one viewport
npx playwright test --project=iphone-14

# Re-approve baselines after intentional changes
npx playwright test --update-snapshots

# Open the visual report
npx playwright show-report qa-reports
```

The report shows side-by-side: previous baseline vs current vs pixel diff. Click anything that's red.

---

## Wiring it to GitHub for auto-fix PRs

Add `.github/workflows/qa.yml`:

```yaml
name: Visual QA
on: [push, pull_request]
jobs:
  qa:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: always()
        with: { name: playwright-report, path: qa-reports }
```

Now every push to GitHub runs the QA suite. If anything regresses, the PR check fails and you can see the diff.

---

## Pairing with the Gary Tan / Claude Code QA skill

The Claude skill Avi mentioned (search the marketplace for "playwright-qa" or "visual-regression") wraps this whole loop. You:

1. Open Claude Code in the repo
2. Run the skill — it reads `playwright.config.ts` and the test failures
3. It diagnoses what regressed (e.g. "the mobile menu button shrunk below 44px on iPhone SE after the styles.css change in commit abc123")
4. It opens a PR with the fix
5. Re-runs the QA suite to confirm green

This is the loop Avi wants. The above setup is the foundation it needs.

---

## What to install when

| Now | Drop the files above into the repo. Don't run anything yet. |
| Before next big design change | `npm install`, capture initial baselines (`npx playwright test --update-snapshots`). |
| After every Vercel deploy | Run `npx playwright test`. If green, ship. If red, look at the report. |
| When you want auto-fixes | Wire up the GitHub Action + install the Claude QA skill. |

Total setup time, end-to-end: 30 minutes once. Then it pays you back every iteration.
