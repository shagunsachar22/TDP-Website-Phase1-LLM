import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', name: 'home' },
  { path: '/newsletter.html', name: 'newsletter' },
  { path: '/read.html', name: 'read' },
  { path: '/faq.html', name: 'faq' },
  { path: '/about.html', name: 'about' },
];

test.describe('core layout QA', () => {
  for (const pageMeta of pages) {
    test(`${pageMeta.name} keeps nav, footer, and type stable`, async ({ page }) => {
      await page.goto(pageMeta.path);
      await page.waitForLoadState('networkidle');

      const bodyText = await page.locator('body').innerText();
      expect(bodyText).not.toContain('Substack archive');
      expect(bodyText).not.toContain('Built in [location]');

      const overflow = await page.evaluate(() => {
        const root = document.documentElement;
        return Math.max(root.scrollWidth, document.body.scrollWidth) - window.innerWidth;
      });
      expect(overflow).toBeLessThanOrEqual(1);

      await expect(page.locator('footer .footer-cols > div')).toHaveCount(4);
      await expect(page.locator('footer .footer-newsletter .btn')).toBeVisible();

      const alignment = await page.evaluate(() => {
        const nav = document.querySelector('.nav-inner')?.getBoundingClientRect();
        const footer = document.querySelector('footer .wrap')?.getBoundingClientRect();
        if (!nav || !footer) return null;
        return {
          left: Math.abs(nav.left - footer.left),
          right: Math.abs(nav.right - footer.right),
        };
      });
      expect(alignment).not.toBeNull();
      expect(alignment!.left).toBeLessThanOrEqual(2);
      expect(alignment!.right).toBeLessThanOrEqual(2);

      const overflowingText = await page.locator('h1, h2, h3, .btn, .footer-cols a').evaluateAll((nodes) =>
        nodes
          .filter((node) => node.scrollWidth > node.clientWidth + 1)
          .map((node) => node.textContent?.trim())
          .filter(Boolean)
      );
      expect(overflowingText).toEqual([]);
    });
  }
});
