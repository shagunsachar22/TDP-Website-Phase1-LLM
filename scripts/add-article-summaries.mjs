import { promises as fs } from "node:fs";
import path from "node:path";

const root = new URL("../", import.meta.url);
const readDir = new URL("read/", root);

function decodeAttr(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const summaryCss = `    .article-summary { max-width: 720px; margin: -32px auto 72px; padding: 28px 32px; border-top: 1px solid var(--border-on-cream); border-bottom: 1px solid var(--border-on-cream); }
    .article-summary .label { display: block; margin-bottom: 12px; font-family: var(--font-sans); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent-amber); font-weight: 600; }
    .article-summary p { margin: 0; font-family: var(--font-serif); font-size: clamp(18px, 1.5vw, 21px); line-height: 1.55; color: var(--text-dark); letter-spacing: -0.006em; }
`;

const entries = await fs.readdir(readDir, { withFileTypes: true });
let changed = 0;

for (const entry of entries) {
  if (!entry.isDirectory()) continue;

  const file = path.join(readDir.pathname, entry.name, "index.html");
  let html;
  try {
    html = await fs.readFile(file, "utf8");
  } catch {
    continue;
  }

  const original = html;
  const descriptionMatch = html.match(/<meta name="description" content="([^"]*)"/i);
  if (!descriptionMatch) continue;

  const summary = escapeHtml(decodeAttr(descriptionMatch[1]));

  if (!html.includes('"abstract":')) {
    html = html.replace(
      /("description":\s*"[^"]*",\n)/,
      `$1    "abstract": ${JSON.stringify(decodeAttr(descriptionMatch[1]))},\n`,
    );
  }

  if (!html.includes(".article-summary {")) {
    html = html.replace(/(    \.cover-img \{[^\n]*\}\n)/, `$1${summaryCss}`);
  }

  html = html.replace(/<aside class="article-summary" aria-label="Essay summary"/g, '<aside id="summary" class="article-summary" aria-label="Essay summary"');

  if (!html.includes('class="article-summary"')) {
    const summaryHtml = `    <aside id="summary" class="article-summary" aria-label="Essay summary" data-scroll-fx>
      <span class="label">In short</span>
      <p>${summary}</p>
    </aside>
`;

    if (/<div class="cover">[\s\S]*?<\/div>\n    <article class="article-body">/.test(html)) {
      html = html.replace(
        /(<div class="cover">[\s\S]*?<\/div>\n)(    <article class="article-body">)/,
        `$1${summaryHtml}$2`,
      );
    } else {
      html = html.replace(/(    <article class="article-body">)/, `${summaryHtml}$1`);
    }
  }

  if (html !== original) {
    await fs.writeFile(file, html, "utf8");
    changed += 1;
  }
}

console.log(`Updated ${changed} article pages with summary blocks.`);
