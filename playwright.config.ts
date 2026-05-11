import { defineConfig, devices } from '@playwright/test';

/**
 * Visual QA for The Deliberate Pause.
 * Runs every page across 9 device profiles + 3 engines (Chromium / WebKit / Firefox).
 *
 * Daily use:
 *   npm run qa            # full suite
 *   npm run qa:mobile     # phones only
 *   npm run qa:desktop    # desktops only
 *   npm run qa:safari     # WebKit + iPhone (the Safari engine — catches iOS bugs)
 *   npm run qa:update     # re-approve baselines after intentional changes
 *   npm run qa:report     # open the HTML diff report
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'qa-reports', open: 'never' }],
  ],
  use: {
    baseURL: 'http://localhost:8000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npx http-server -p 8000 -s -c-1',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01 },
  },
  projects: [
    { name: 'iphone-se',     use: { ...devices['iPhone SE'] } },
    { name: 'iphone-14',     use: { ...devices['iPhone 14 Pro'] } },
    { name: 'pixel-7',       use: { ...devices['Pixel 7'] } },
    { name: 'ipad',          use: { ...devices['iPad Mini'] } },
    { name: 'desktop-1280',  use: { viewport: { width: 1280, height: 800 },  ...devices['Desktop Chrome'] } },
    { name: 'desktop-1440',  use: { viewport: { width: 1440, height: 900 },  ...devices['Desktop Chrome'] } },
    { name: 'desktop-1920',  use: { viewport: { width: 1920, height: 1080 }, ...devices['Desktop Chrome'] } },
    { name: 'webkit-mac',    use: { ...devices['Desktop Safari'] } },
    { name: 'firefox-mac',   use: { ...devices['Desktop Firefox'] } },
  ],
});
