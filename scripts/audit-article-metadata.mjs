import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articlesDir = path.join(root, 'articles');
const reportPath = path.join(root, 'ARTICLE_METADATA_AUDIT.md');
const siteOrigin = 'https://www.thedeliberatepause.com';

function decode(value = '') {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .trim();
}

function escapeCell(value = '') {
  return String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
}

function getTagContent(html, tag) {
  return decode(html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))?.[1] || '');
}

function getMeta(html, key, attribute = 'name') {
  const tags = html.match(/<meta\s+[^>]*>/gi) || [];
  for (const tag of tags) {
    const attrs = Object.fromEntries(
      [...tag.matchAll(/([:\w-]+)\s*=\s*(["'])(.*?)\2/g)].map((match) => [match[1].toLowerCase(), decode(match[3])])
    );
    if (attrs[attribute] === key) return attrs.content || '';
  }
  return '';
}

function getCanonical(html) {
  const links = html.match(/<link\s+[^>]*>/gi) || [];
  for (const tag of links) {
    const attrs = Object.fromEntries(
      [...tag.matchAll(/([:\w-]+)\s*=\s*(["'])(.*?)\2/g)].map((match) => [match[1].toLowerCase(), decode(match[3])])
    );
    if (attrs.rel === 'canonical') return attrs.href || '';
  }
  return '';
}

function getJsonLd(html) {
  return [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => {
      try {
        return { data: JSON.parse(match[1]), error: null };
      } catch (error) {
        return { data: null, error: error.message };
      }
    });
}

function add(checks, level, label, pass, detail = '') {
  if (!pass) checks.push({ level, label, detail });
}

const articleFiles = fs.readdirSync(articlesDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== 'category')
  .map((entry) => path.join(articlesDir, entry.name, 'index.html'))
  .filter((file) => fs.existsSync(file))
  .sort();

const sitemap = fs.existsSync(path.join(root, 'sitemap.xml'))
  ? fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8')
  : '';
const articleIndex = fs.readFileSync(path.join(root, 'articles.html'), 'utf8');

const results = articleFiles.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const slug = path.basename(path.dirname(file));
  const expectedUrl = `${siteOrigin}/articles/${slug}`;
  const title = getTagContent(html, 'title');
  const description = getMeta(html, 'description');
  const canonical = getCanonical(html);
  const ogTitle = getMeta(html, 'og:title', 'property');
  const ogDescription = getMeta(html, 'og:description', 'property');
  const ogImage = getMeta(html, 'og:image', 'property');
  const ogUrl = getMeta(html, 'og:url', 'property');
  const twitterTitle = getMeta(html, 'twitter:title');
  const twitterDescription = getMeta(html, 'twitter:description');
  const twitterImage = getMeta(html, 'twitter:image');
  const jsonBlocks = getJsonLd(html);
  const articleSchema = jsonBlocks.find(({ data }) => data?.['@type'] === 'Article')?.data;
  const breadcrumbSchema = jsonBlocks.find(({ data }) => data?.['@type'] === 'BreadcrumbList')?.data;
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => decode(match[1].replace(/<[^>]+>/g, '')));
  const categoryMatch = html.match(/<a\s+class=["']article-category["']\s+href=["']\/articles\/category\/([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
  const categorySlug = categoryMatch?.[1] || '';
  const categoryName = decode((categoryMatch?.[2] || '').replace(/<[^>]+>/g, ''));
  const categoryFile = categorySlug ? path.join(articlesDir, 'category', categorySlug, 'index.html') : '';
  const checks = [];

  add(checks, 'error', 'HTML title', Boolean(title), 'Missing <title>.');
  add(checks, 'warning', 'Title length', title.length >= 30 && title.length <= 65, `${title.length} characters; target 30–65.`);
  add(checks, 'error', 'Meta description', Boolean(description), 'Missing meta description.');
  add(checks, 'warning', 'Description length', description.length >= 120 && description.length <= 165, `${description.length} characters; target 120–165.`);
  add(checks, 'error', 'Canonical URL', canonical === expectedUrl, `Expected ${expectedUrl}; found ${canonical || 'missing'}.`);
  add(checks, 'error', 'Open Graph type', getMeta(html, 'og:type', 'property') === 'article', 'Expected og:type=article.');
  add(checks, 'error', 'Open Graph URL', ogUrl === expectedUrl, `Expected ${expectedUrl}; found ${ogUrl || 'missing'}.`);
  add(checks, 'error', 'Open Graph title', ogTitle === title, 'OG title should match the page title.');
  add(checks, 'error', 'Open Graph description', ogDescription === description, 'OG description should match the meta description.');
  add(checks, 'error', 'Open Graph image', /^https:\/\//.test(ogImage), 'Missing absolute HTTPS OG image.');
  add(checks, 'warning', 'Open Graph image alt', Boolean(getMeta(html, 'og:image:alt', 'property')), 'Recommended for accessible social previews.');
  add(checks, 'error', 'Twitter card', getMeta(html, 'twitter:card') === 'summary_large_image', 'Expected summary_large_image.');
  add(checks, 'error', 'Twitter title', twitterTitle === title, 'Twitter title should match the page title.');
  add(checks, 'error', 'Twitter description', twitterDescription === description, 'Twitter description should match the meta description.');
  add(checks, 'error', 'Twitter image', twitterImage === ogImage && Boolean(twitterImage), 'Twitter image should match the OG image.');
  add(checks, 'warning', 'Twitter image alt', Boolean(getMeta(html, 'twitter:image:alt')), 'Recommended for accessible social previews.');
  add(checks, 'error', 'JSON-LD syntax', jsonBlocks.every(({ error }) => !error), jsonBlocks.find(({ error }) => error)?.error || 'Invalid JSON-LD.');
  add(checks, 'error', 'Article schema', Boolean(articleSchema), 'Missing Article JSON-LD.');
  add(checks, 'error', 'Schema headline', articleSchema?.headline === h1s[0], 'Schema headline should match the H1.');
  add(checks, 'error', 'Schema description', articleSchema?.description === description, 'Schema description should match the meta description.');
  add(checks, 'error', 'Schema author', articleSchema?.author?.['@type'] === 'Person' && articleSchema?.author?.name === 'Avi Agarwal', 'Expected Avi Agarwal as Person author.');
  add(checks, 'error', 'Schema publisher', articleSchema?.publisher?.['@type'] === 'Organization' && articleSchema?.publisher?.name === 'The Deliberate Pause', 'Expected The Deliberate Pause as Organization publisher.');
  add(checks, 'error', 'Schema mainEntityOfPage', articleSchema?.mainEntityOfPage?.['@id'] === expectedUrl, 'mainEntityOfPage should match the canonical URL.');
  add(checks, 'error', 'Schema image', articleSchema?.image === ogImage && Boolean(articleSchema?.image), 'Schema image should match the OG image.');
  add(checks, 'error', 'Schema published date', /^\d{4}-\d{2}-\d{2}$/.test(articleSchema?.datePublished || ''), `Use ISO YYYY-MM-DD; found ${articleSchema?.datePublished || 'missing'}.`);
  add(checks, 'warning', 'Article published_time', Boolean(getMeta(html, 'article:published_time', 'property')), 'Recommended Open Graph article date.');
  add(checks, 'error', 'Single H1', h1s.length === 1, `Found ${h1s.length} H1 elements.`);
  add(checks, 'error', 'Breadcrumb schema', Boolean(breadcrumbSchema), 'Missing BreadcrumbList JSON-LD.');
  add(checks, 'error', 'Category link', Boolean(categorySlug && categoryName), 'Missing linked article category.');
  add(checks, 'error', 'Category page', Boolean(categoryFile && fs.existsSync(categoryFile)), `Missing category page for ${categorySlug || 'unknown category'}.`);
  add(checks, 'error', 'Listed under category', Boolean(categoryFile && fs.existsSync(categoryFile) && fs.readFileSync(categoryFile, 'utf8').includes(`/articles/${slug}`)), `Not listed on /articles/category/${categorySlug}.`);
  add(checks, 'error', 'Articles index membership', articleIndex.includes(`/articles/${slug}`), 'Missing from /articles grid.');
  add(checks, 'error', 'Sitemap membership', sitemap.includes(expectedUrl), 'Missing from sitemap.xml.');
  add(checks, 'error', 'Indexability', !/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html), 'Page contains a noindex directive.');

  return {
    slug,
    title,
    categoryName,
    expectedUrl,
    checks,
    errors: checks.filter((check) => check.level === 'error'),
    warnings: checks.filter((check) => check.level === 'warning')
  };
});

const errorCount = results.reduce((sum, result) => sum + result.errors.length, 0);
const warningCount = results.reduce((sum, result) => sum + result.warnings.length, 0);
const passing = results.filter((result) => result.errors.length === 0).length;
const generated = new Intl.DateTimeFormat('en-IN', { dateStyle: 'long', timeZone: 'Asia/Kolkata' }).format(new Date());

const lines = [
  '# Article Metadata Audit',
  '',
  `Generated: ${generated}`,
  '',
  '## Executive Summary',
  '',
  `- Standalone article pages audited: **${results.length}**`,
  `- Pages passing all required checks: **${passing}/${results.length}**`,
  `- Required metadata errors: **${errorCount}**`,
  `- Best-practice warnings: **${warningCount}**`,
  '',
  'An **error** means required metadata is absent, inconsistent, invalid, or disconnected from the site structure. A **warning** is a recommended improvement that does not prevent indexing.',
  '',
  '## Article Results',
  '',
  '| # | Article | Category | Errors | Warnings | Status |',
  '|---:|---|---|---:|---:|---|',
  ...results.map((result, index) => `| ${index + 1} | [${escapeCell(result.title)}](${result.expectedUrl}) | ${escapeCell(result.categoryName || 'Missing')} | ${result.errors.length} | ${result.warnings.length} | ${result.errors.length ? 'Needs fixes' : 'Pass'} |`),
  '',
  '## Findings',
  ''
];

for (const result of results) {
  if (!result.checks.length) continue;
  lines.push(`### ${result.title}`, '', `Path: \`/articles/${result.slug}\``, '');
  for (const check of result.checks) {
    lines.push(`- **${check.level === 'error' ? 'Error' : 'Warning'} — ${check.label}:** ${check.detail}`);
  }
  lines.push('');
}

if (!results.some((result) => result.checks.length)) {
  lines.push('No errors or warnings found.', '');
}

lines.push(
  '## What This Audit Checks',
  '',
  '- Unique HTML title and one H1 per article.',
  '- Meta description presence and search-friendly length.',
  '- Canonical URL, Open Graph URL, and schema URL consistency.',
  '- Complete Open Graph and Twitter large-image metadata.',
  '- Valid Article and BreadcrumbList JSON-LD.',
  '- Avi Agarwal author and The Deliberate Pause publisher identity.',
  '- ISO publication date, article image, headline, and description consistency.',
  '- Linked category, inclusion on the matching category page, and inclusion in the main article grid.',
  '- Sitemap inclusion and absence of accidental `noindex` directives.',
  '',
  '## How To Verify Again',
  '',
  'From the repository root, run:',
  '',
  '```bash',
  'node scripts/audit-article-metadata.mjs',
  '```',
  '',
  'The command regenerates this report and exits with a non-zero status when required errors remain, making it suitable for pre-launch QA or CI.',
  '',
  'After deployment, also test representative URLs with:',
  '',
  '- [Google Rich Results Test](https://search.google.com/test/rich-results)',
  '- [Schema.org Validator](https://validator.schema.org/)',
  '- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)',
  '- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)',
  '',
  'These external tools verify what live crawlers receive after Webflow or Vercel deployment.'
);

fs.writeFileSync(reportPath, `${lines.join('\n')}\n`);
console.log(`Audited ${results.length} articles: ${errorCount} errors, ${warningCount} warnings.`);
console.log(`Report: ${reportPath}`);
process.exitCode = errorCount ? 1 : 0;
