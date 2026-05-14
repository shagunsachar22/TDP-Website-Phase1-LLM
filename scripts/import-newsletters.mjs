import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const OLD_BASE = "https://www.thedeliberatepause.com/newsletter";
const NEW_BASE = "https://thedeliberatepause.com/read";

const issues = [
  "the-hidden-cost-of-not-choosing-yourself",
  "the-clauddiction-trap",
  "when-success-still-feels-empty",
  "angry-young-vijays-disappointment",
  "does-happiness-feel-different",
  "the-market-for-your-honest-opinion-is-bigger-than-you-think",
  "the-rehearsal-tax",
  "the-thermostat-effect",
  "the-aliveness-paradox",
  "the-calendar-is-killing-your-performance",
  "the-founders-olympics-of-suffering",
  "the-dark-side-of-self-love",
  "the-false-sense-of-agency",
  "the-cartoonist-monk-who-saved-my-life",
  "steve-jobs-wasnt-complete-neither-are-you",
  "the-low-status-moat-matters",
  "the-unicorn-trap-and-the-road-to-enlightenment",
  "fall-in-love-with-2026-sooner-than-later",
  "your-boring-routine-comes-with-the-power-of-compounding",
  "the-secret-inside-the-brown-box",
  "founders-are-lonely-but-theres-a-way-out",
  "how-david-goggins-helped-the-founder-in-me-survive-a-stroke",
  "mood-metrics-that-make-or-break-a-startup",
  "my-90-hour-fast-revealed-a-surprise-i-never-expected",
  "my-rejection-experiment-that-can-be-your-breakthrough",
  "no-means-no-to-hustle-culture",
  "rejection-hurts-but-dont-let-it-be-painful",
  "smart-but-stuck-when-intelligence-alone-falls-short-of-cracking-the-startup",
  "someone-is-stealing-your-lifetime-literally",
  "to-weave-your-startup-story-invoke-the-storyteller-in-you",
  "welcome-to-the-deliberate-pause",
];

const decodeEntities = (value = "") =>
  value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&mdash;/g, "-")
    .replace(/&ndash;/g, "-")
    .replace(/&hellip;/g, "...")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const stripTags = (html = "") =>
  decodeEntities(html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

const attr = (tag = "", name) => {
  const match = tag.match(new RegExp(`${name}=["']([^"']*)["']`, "i"));
  return match ? decodeEntities(match[1]) : "";
};

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const escapeAttr = escapeHtml;

function meta(html, selector) {
  const match = html.match(new RegExp(`<meta\\s+[^>]*${selector}[^>]*>`, "i"));
  if (match) return attr(match[0], "content");
  return "";
}

function findMatchingEnd(html, startIndex, tagName) {
  const token = new RegExp(`<\\/?${tagName}\\b[^>]*>`, "gi");
  token.lastIndex = startIndex;
  let depth = 0;
  let match;
  while ((match = token.exec(html))) {
    if (match[0][1] === "/") {
      depth -= 1;
      if (depth === 0) return token.lastIndex;
    } else if (!match[0].endsWith("/>")) {
      depth += 1;
    }
  }
  return -1;
}

function elementsWithClass(html, tagName, requiredClasses) {
  const startTag = new RegExp(`<${tagName}\\b[^>]*class=["'][^"']*["'][^>]*>`, "gi");
  const found = [];
  let match;
  while ((match = startTag.exec(html))) {
    const classes = attr(match[0], "class").split(/\s+/);
    if (!requiredClasses.every((className) => classes.includes(className))) continue;
    const end = findMatchingEnd(html, match.index, tagName);
    if (end < 0) continue;
    const outer = html.slice(match.index, end);
    const inner = outer.slice(match[0].length, outer.length - `</${tagName}>`.length);
    found.push({ outer, inner, classes });
  }
  return found;
}

function normalizeRichText(html) {
  const figures = [];
  let output = html
    .replace(/<figure[\s\S]*?<img\b([^>]*)>[\s\S]*?<\/figure>/gi, (_, attrs) => {
      const src = attr(`<img ${attrs}>`, "src");
      const alt = attr(`<img ${attrs}>`, "alt");
      if (!src || /Dividers\.png/i.test(src)) return "";
      const index = figures.length;
      figures.push(`<figure data-scroll-fx><img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" loading="lazy" /></figure>`);
      return `%%TDP_FIGURE_${index}%%`;
    })
    .replace(/<img\b([^>]*)>/gi, (_, attrs) => {
      const src = attr(`<img ${attrs}>`, "src");
      const alt = attr(`<img ${attrs}>`, "alt");
      if (!src || /Dividers\.png/i.test(src)) return "";
      return `<figure data-scroll-fx><img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" loading="lazy" /></figure>`;
    })
    .replace(/\sclass=["'][^"']*["']/gi, "")
    .replace(/\sstyle=["'][^"']*["']/gi, "")
    .replace(/\sid=["'][^"']*["']/gi, "")
    .replace(/\sloading=["'][^"']*["']/gi, "")
    .replace(/<strong>\s*<\/strong>/gi, "")
    .replace(/<h([1-6])>\s*<strong>([\s\S]*?)<\/strong>\s*<\/h\1>/gi, "<h2 data-scroll-fx>$2</h2>")
    .replace(/<h1>/gi, '<h2 data-scroll-fx>')
    .replace(/<\/h1>/gi, "</h2>")
    .replace(/<h[2-6]>/gi, '<h2 data-scroll-fx>')
    .replace(/<\/h[2-6]>/gi, "</h2>")
    .replace(/<p>/gi, '<p data-scroll-fx>')
    .replace(/<p data-scroll-fx>\s*(?:‍|&zwj;|&nbsp;|\s)*<\/p>/gi, "")
    .replace(/<blockquote>/gi, '<blockquote data-scroll-fx>')
    .replace(/<ul>/gi, '<ul data-scroll-fx>')
    .replace(/<ol>/gi, '<ol data-scroll-fx>')
    .replace(/\n\s*\n/g, "\n")
    .trim();
  output = output.replace(/%%TDP_FIGURE_(\d+)%%/g, (_, index) => figures[Number(index)] || "");
  return output;
}

function extractBody(html) {
  const candidates = [
    ...elementsWithClass(html, "div", ["blog_feature-content", "w-richtext"]),
    ...elementsWithClass(html, "div", ["layout_4", "w-richtext"]),
    ...elementsWithClass(html, "div", ["blog_section-text", "w-richtext"]),
    ...elementsWithClass(html, "div", ["item1-content", "w-richtext"]),
    ...elementsWithClass(html, "div", ["supporting_rich-text", "w-richtext"]),
    ...elementsWithClass(html, "div", ["detailed_content", "w-richtext"]),
    ...elementsWithClass(html, "div", ["newsletter-content", "w-richtext"]),
  ];

  const seen = new Set();
  const blocks = [];
  for (const candidate of candidates) {
    if (candidate.classes.includes("w-dyn-bind-empty")) continue;
    const text = stripTags(candidate.inner);
    if (text.length < 80) continue;
    if (/Subscribe to the Newsletter|Here are more articles|A small favor|Ready to elevate/i.test(text)) continue;
    const key = text.slice(0, 500);
    if (seen.has(key)) continue;
    seen.add(key);
    blocks.push(candidate.inner);
  }

  if (!blocks.length) {
    throw new Error("No rich-text article body found");
  }

  return normalizeRichText(blocks.join("\n"));
}

function firstMatch(html, pattern) {
  const match = html.match(pattern);
  return match ? decodeEntities(match[1]) : "";
}

function readingMinutes(html) {
  const words = stripTags(html).split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 230));
}

function excerptFrom(body, description) {
  if (description) return description;
  const firstParagraph = body.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const text = stripTags(firstParagraph ? firstParagraph[1] : body);
  return text.length > 170 ? `${text.slice(0, 167).replace(/\s+\S*$/, "")}...` : text;
}

function categoryFor(title, body) {
  const haystack = `${title} ${stripTags(body)}`.toLowerCase();
  if (/\b(breath|fasting|routine|calendar|phone|social media|rejection experiment|90-hour|hustle culture)\b/.test(haystack)) return "Practice";
  if (/goggins|jobs|vijay|cartoonist|creditvidya|brown box|welcome to the deliberate pause/.test(haystack)) return "Story";
  return "Essay";
}

function dateIso(dateText) {
  const date = new Date(`${dateText} 12:00:00 GMT+0530`);
  return Number.isNaN(date.valueOf()) ? "" : date.toISOString().slice(0, 10);
}

function formatDate(dateText) {
  const date = new Date(`${dateText} 12:00:00 GMT+0530`);
  if (Number.isNaN(date.valueOf())) return dateText;
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

function articlePage(issue, allIssues) {
  const related = allIssues.filter((item) => item.slug !== issue.slug).slice(0, 3);
  const relatedHtml = related
    .map(
      (item, index) => `<article class="keep-card" data-scroll-fx${index ? ` style="--fx-delay: ${index / 10}s;"` : ""}>
            <a href="/read/${item.slug}/"><div class="thumb"${item.cover ? ` style="background-image: linear-gradient(135deg, rgba(214,168,110,0.16), rgba(197,107,69,0.08)), url('${escapeAttr(item.cover)}');"` : ""}></div></a>
            <h3><a href="/read/${item.slug}/">${escapeHtml(item.title)}</a></h3>
            <p>${escapeHtml(item.excerpt)}</p>
            <div class="meta">${item.minutes} min read · ${escapeHtml(item.date)}</div>
          </article>`,
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(issue.title)} — The Deliberate Pause</title>
  <meta name="description" content="${escapeAttr(issue.excerpt)}" />
  <link rel="canonical" href="${NEW_BASE}/${issue.slug}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${escapeAttr(`${issue.title} — The Deliberate Pause`)}" />
  <meta property="og:description" content="${escapeAttr(issue.excerpt)}" />
  ${issue.ogImage ? `<meta property="og:image" content="${escapeAttr(issue.ogImage)}" />` : ""}

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="../../styles.css" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(issue.title)},
    "description": ${JSON.stringify(issue.excerpt)},
    "author": { "@type": "Person", "name": "Avi Agarwal" },
    "datePublished": ${JSON.stringify(issue.isoDate)},
    "publisher": { "@type": "Organization", "name": "The Deliberate Pause" }
  }
  </script>

  <style>
    .article-header { padding: 64px 0 56px; text-align: center; }
    .article-header .crumb { font-family: var(--font-sans); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-muted-light); margin: 0 0 32px; display: inline-block; }
    .article-header .crumb a { transition: color 0.2s var(--ease); }
    .article-header .crumb a:hover { color: var(--cta); }
    .article-header h1 { font-family: var(--font-serif); font-size: clamp(48px, 6.4vw, 96px); letter-spacing: -0.03em; line-height: 1; margin: 0 auto 24px; max-width: 16ch; }
    .article-header .dek { font-family: var(--font-serif); font-style: italic; font-size: clamp(18px, 1.6vw, 22px); line-height: 1.5; color: var(--text-muted-light); max-width: 680px; margin: 0 auto 32px; }
    .article-header .byline { font-family: var(--font-sans); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-muted-light); font-weight: 500; }
    .article-header .byline .dot { color: var(--accent-amber); margin: 0 8px; }
    .cover { max-width: 1080px; margin: 0 auto 80px; padding: 0 var(--gutter); }
    .cover-img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border: 1px solid var(--border-on-cream); border-radius: 8px; display: block; background: rgba(26, 26, 26, 0.06); }
    .article-body { padding: 0 0 96px; }
    .article-body .wrap { max-width: 720px; }
    .article-body p, .article-body h2, .article-body h3, .article-body blockquote, .article-body ul, .article-body ol, .article-body figure { max-width: 720px; }
    .article-body p, .article-body li { font-family: var(--font-serif); font-size: 19px; line-height: 1.7; color: var(--text-dark); letter-spacing: -0.005em; }
    .article-body p { margin: 0 0 24px; }
    .article-body ul, .article-body ol { margin: 0 0 28px 22px; padding: 0; }
    .article-body li { margin: 0 0 12px; padding-left: 4px; }
    .article-body p:first-of-type::first-letter { font-family: var(--font-serif); font-size: 5em; float: left; line-height: 0.85; padding: 6px 14px 0 0; color: var(--accent-amber); font-weight: 600; }
    .article-body h2 { font-family: var(--font-serif); font-size: clamp(26px, 2.8vw, 34px); letter-spacing: -0.02em; line-height: 1.15; color: var(--text-dark); margin: 56px 0 20px; }
    .article-body blockquote { font-family: var(--font-serif); font-style: italic; font-size: clamp(22px, 2.4vw, 28px); line-height: 1.4; color: var(--accent-amber); margin: 56px 0; padding: 0 0 0 32px; border-left: 2px solid var(--accent-amber); letter-spacing: -0.012em; max-width: 680px; }
    .article-body figure { margin: 56px 0; }
    .article-body figure img { width: 100%; height: auto; display: block; border: 1px solid var(--border-on-cream); border-radius: 8px; }
    .mid-subscribe { margin: 96px auto; padding: 56px 48px; background: var(--bg-dark); color: var(--text-cream); border-radius: 12px; text-align: center; max-width: 720px; }
    .mid-subscribe .label { font-family: var(--font-sans); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent-amber); font-weight: 600; display: block; margin-bottom: 20px; }
    .mid-subscribe h3 { font-family: var(--font-serif); font-size: clamp(28px, 3vw, 40px); color: var(--text-cream); margin: 0 0 8px; letter-spacing: -0.022em; line-height: 1.1; }
    .mid-subscribe p { font-family: var(--font-sans); font-size: 14px; color: var(--text-muted-dark); line-height: 1.55; margin: 0 0 28px; }
    .mid-subscribe .form-row { margin: 0 auto; max-width: 480px; }
    .mid-subscribe .form-disclaimer { color: var(--text-muted-dark); }
    .signature { max-width: 720px; margin: 56px auto 0; font-family: var(--font-serif); font-style: italic; font-size: 16px; color: var(--text-muted-light); }
    .share { max-width: 720px; margin: 80px auto 0; padding: 32px 0; border-top: 1px solid var(--border-on-cream); border-bottom: 1px solid var(--border-on-cream); display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
    .share p { font-size: 14px; color: var(--text-muted-light); margin: 0; max-width: 280px; line-height: 1.55; }
    .share-links { display: flex; gap: 8px; flex-wrap: wrap; }
    .share-link { font-family: var(--font-sans); font-size: 12px; letter-spacing: 0.06em; font-weight: 500; padding: 10px 18px; border: 1px solid var(--border-on-cream); border-radius: 999px; color: var(--text-dark); transition: background 0.25s var(--ease), color 0.25s var(--ease), border-color 0.25s var(--ease); display: inline-flex; align-items: center; gap: 6px; }
    .share-link:hover { background: var(--bg-dark); color: var(--text-cream); border-color: var(--bg-dark); }
    .keep-reading { padding: 96px 0 120px; }
    .keep-reading-header { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; margin-bottom: 48px; }
    .keep-reading h2 { font-size: clamp(28px, 3vw, 40px); letter-spacing: -0.025em; line-height: 1.05; margin: 0; }
    .keep-reading .all { font-family: var(--font-sans); font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-dark); font-weight: 600; display: inline-flex; align-items: center; gap: 8px; transition: gap 0.3s var(--ease), color 0.3s var(--ease); }
    .keep-reading .all:hover { gap: 14px; color: var(--cta); }
    .keep-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .keep-card .thumb { aspect-ratio: 4 / 3; background: linear-gradient(135deg, rgba(214,168,110,0.18), rgba(197,107,69,0.06)), rgba(26, 26, 26, 0.06); background-size: cover; background-position: center; border: 1px solid var(--border-on-cream); border-radius: 6px; margin-bottom: 20px; transition: transform 0.5s var(--ease-out); }
    .keep-card:hover .thumb { transform: translateY(-4px); }
    .keep-card h3 { font-size: 22px; letter-spacing: -0.015em; margin: 0 0 12px; line-height: 1.2; }
    .keep-card h3 a { transition: color 0.2s var(--ease); }
    .keep-card h3 a:hover { color: var(--cta); }
    .keep-card p { font-size: 14px; color: var(--text-muted-light); line-height: 1.55; margin: 0 0 12px; }
    .keep-card .meta { font-family: var(--font-sans); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-muted-light); font-weight: 600; }
    .toolkit-band { margin: 24px auto 96px; padding: 40px 48px; background: var(--bg-dark); color: var(--text-cream); border-radius: 12px; max-width: 1100px; display: grid; grid-template-columns: auto 1fr auto; gap: 32px; align-items: center; }
    .toolkit-band .label { font-family: var(--font-sans); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent-amber); font-weight: 600; }
    .toolkit-band h3 { font-family: var(--font-serif); color: var(--text-cream); font-size: clamp(20px, 2vw, 26px); margin: 0; letter-spacing: -0.015em; }
    .toolkit-band h3 .sub { font-family: var(--font-sans); font-size: 13px; color: var(--text-muted-dark); letter-spacing: 0; font-weight: 400; display: block; margin-top: 4px; }
    @media (max-width: 768px) { .keep-grid { grid-template-columns: 1fr; gap: 32px; } .toolkit-band { grid-template-columns: 1fr; text-align: center; gap: 16px; padding: 32px; } .mid-subscribe { padding: 40px 24px; } }
  </style>
</head>
<body>
  <div class="scroll-progress" aria-hidden="true"></div>
  ${navHtml("../../")}
  <main class="theme-cream">
    <header class="article-header">
      <div class="wrap">
        <span class="crumb"><a href="/read.html">← The Archive</a> / ${escapeHtml(issue.category)}</span>
        <h1 data-scroll-fx="fade-up-lg">${escapeHtml(issue.title)}</h1>
        <p class="dek" data-scroll-fx style="--fx-delay: 0.1s;">${escapeHtml(issue.dek)}</p>
        <div class="byline" data-scroll-fx style="--fx-delay: 0.2s;">Avi <span class="dot">·</span> ${issue.minutes} min read <span class="dot">·</span> ${escapeHtml(issue.date)}</div>
      </div>
    </header>
    ${issue.cover ? `<div class="cover"><img class="cover-img" data-scroll-fx="zoom" src="${escapeAttr(issue.cover)}" alt="${escapeAttr(issue.title)}" /></div>` : ""}
    <article class="article-body">
      <div class="wrap">
        ${issue.body}
        <aside class="mid-subscribe" data-scroll-fx>
          <span class="label">Newsletter · Primary</span>
          <h3>Read along on Mondays.</h3>
          <p>5 minutes of Deliberate Pause, every Monday at 11:11.</p>
          <form class="form-row" action="#" method="post" data-source="essay-mid">
            <label for="email-mid" class="visually-hidden">Email address</label>
            <input type="email" id="email-mid" name="email_address" placeholder="your email" required />
            <button type="submit" class="btn btn-magnetic">Build without breaking <span class="arrow">→</span></button>
          </form>
          <p class="form-disclaimer">No spam.</p>
        </aside>
        <p class="signature">— Avi</p>
        <div class="share">
          <p>Found this useful? Forward it to a founder who needs it.</p>
          <div class="share-links">
            <a class="share-link" href="https://twitter.com/intent/tweet?url=${encodeURIComponent(`${NEW_BASE}/${issue.slug}`)}&text=${encodeURIComponent(issue.title)}" target="_blank" rel="noopener">Share on X →</a>
            <a class="share-link" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${NEW_BASE}/${issue.slug}`)}" target="_blank" rel="noopener">LinkedIn →</a>
            <a class="share-link" href="#" onclick="navigator.clipboard.writeText(window.location.href);this.textContent='Link copied';return false;">Copy link →</a>
          </div>
        </div>
      </div>
    </article>
    <section class="keep-reading">
      <div class="wrap">
        <div class="keep-reading-header" data-scroll-fx>
          <h2>Keep reading.</h2>
          <a href="/read.html" class="all">All essays <span>→</span></a>
        </div>
        <div class="keep-grid">
          ${relatedHtml}
        </div>
      </div>
    </section>
    <aside class="toolkit-band" data-scroll-fx>
      <span class="label">Or get the toolkit</span>
      <h3>The Pause Playbook<span class="sub">Four sport-translated plays. Free PDF.</span></h3>
      <a href="/pause.html" class="btn btn-magnetic">Send me the Playbook <span class="arrow">→</span></a>
    </aside>
  </main>
  ${footerHtml("../../")}
  <script src="../../scroll-fx.js" defer></script>
</body>
</html>
`;
}

function navHtml(prefix = "") {
  return `<header class="nav" role="banner">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <img class="nav-logo-img" src="${prefix}images/logo.svg" alt="" onerror="this.style.display='none'" />
        <span class="nav-logo-text">The Deliberate Pause</span>
      </a>
      <nav aria-label="Primary">
        <ul class="nav-links">
          <li><a href="/read.html" aria-current="page">Read</a></li>
          <li><a href="/pause.html">Practice</a></li>
          <li><a href="/about.html">About</a></li>
        </ul>
      </nav>
      <a href="/pause.html" class="btn btn-magnetic nav-cta">
        <span class="label-long">Get the Playbook</span>
        <span class="label-short">Get the Playbook</span>
        <span class="arrow">→</span>
      </a>
      <button class="nav-mobile-toggle" aria-label="Open menu">≡</button>
    </div>
  </header>`;
}

function footerHtml(prefix = "") {
  return `<footer class="footer theme-dark" role="contentinfo">
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="logo">The Deliberate Pause</div>
          <div class="tagline">The mental game for founders.</div>
          <p>Tools and essays for startup founders on building companies without breaking themselves. Sourced from spiritual practice. Proven by sport.</p>
        </div>
        <div class="footer-newsletter">
          <h4>Pause for 5 minutes.</h4>
          <p class="sub">Every Monday, 11:11 am.</p>
          <form class="form-row" action="#" method="post" data-source="footer">
            <label for="email-footer" class="visually-hidden">Email address</label>
            <input type="email" id="email-footer" name="email_address" placeholder="your@email.com" required />
            <button type="submit" class="btn">Subscribe <span class="arrow">→</span></button>
          </form>
        </div>
      </div>
      <div class="footer-cols">
        <div><h5>Read</h5><ul><li><a href="/read.html">All essays</a></li></ul></div>
        <div><h5>Practice</h5><ul>
          <li><a href="/pause.html">The Pause Playbook</a></li>
          <li><a href="/practice-federer-reset.html">Federer Reset</a></li>
          <li><a href="/practice-jackson-triangle.html">Jackson Triangle</a></li>
          <li><a href="/practice-think-box-play-box.html">Think Box · Play Box</a></li>
          <li><a href="/practice-90-second-recovery.html">90-Second Recovery</a></li>
        </ul></div>
        <div><h5>About</h5><ul><li><a href="/about.html">About Avi</a></li><li><a href="/contact">Contact</a></li></ul></div>
        <div><h5>Follow</h5><ul><li><a href="https://instagram.com/" rel="noopener">Instagram</a></li><li><a href="https://linkedin.com/" rel="noopener">LinkedIn</a></li><li><a href="https://twitter.com/" rel="noopener">X</a></li></ul></div>
      </div>
      <div class="footer-bottom">
        <div>© <span id="year">2026</span> The Deliberate Pause · Founded by Avi (Abhishek Agarwal) · Built in [location]</div>
        <ul>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </footer>`;
}

function archiveRows(allIssues) {
  return allIssues
    .map(
      (issue, index) => `<article class="essay-row" data-scroll-fx${index ? ` style="--fx-delay: ${Math.min(index, 6) / 20}s;"` : ""}>
              <a href="/read/${issue.slug}/"><div class="thumb" role="img" aria-label="${escapeAttr(issue.title)} thumbnail"${issue.cover ? ` style="background-image: linear-gradient(135deg, rgba(214,168,110,0.16), rgba(197,107,69,0.08)), url('${escapeAttr(issue.cover)}');"` : ""}></div></a>
              <div>
                <div class="essay-tag">${escapeHtml(issue.category)}</div>
                <h3><a href="/read/${issue.slug}/">${escapeHtml(issue.title)}</a></h3>
                <p>${escapeHtml(issue.excerpt)}</p>
                <div class="meta">${issue.minutes} min · ${escapeHtml(issue.date)} · <a href="/read/${issue.slug}/">Read more →</a></div>
              </div>
            </article>`,
    )
    .join("\n\n            ");
}

function sitemap(allIssues) {
  const staticUrls = [
    ["https://thedeliberatepause.com/", "weekly", "1.0"],
    ["https://thedeliberatepause.com/read", "weekly", "0.9"],
    ["https://thedeliberatepause.com/pause", "monthly", "0.8"],
    ["https://thedeliberatepause.com/about", "monthly", "0.7"],
    ["https://thedeliberatepause.com/practice-federer-reset", "monthly", "0.6"],
    ["https://thedeliberatepause.com/practice-jackson-triangle", "monthly", "0.6"],
    ["https://thedeliberatepause.com/practice-think-box-play-box", "monthly", "0.6"],
    ["https://thedeliberatepause.com/practice-90-second-recovery", "monthly", "0.6"],
  ];
  const urls = [
    ...staticUrls.map(([loc, changefreq, priority]) => `  <url><loc>${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`),
    ...allIssues.map((issue) => `  <url><loc>${NEW_BASE}/${issue.slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

async function fetchIssue(slug) {
  const url = `${OLD_BASE}/${slug}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const html = await response.text();
  const body = extractBody(html);
  const title = firstMatch(html, /<h1[^>]*class=["'][^"']*(?:newsletter-template-title|recent-blogs_h3-title|title-h1)[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i)
    || meta(html, 'property="og:title')
    || firstMatch(html, /<title>([\s\S]*?)<\/title>/i)
    || slug.replace(/-/g, " ");
  const date = formatDate(firstMatch(html, /class=["']newsletter-date["'][^>]*>([^<]+)</i) || firstMatch(html, /recent-blogs_h3-para["'][^>]*>([A-Z][a-z]+\s+\d{1,2},\s+\d{4})</i));
  const description = meta(html, 'name="description') || meta(html, 'property="og:description');
  const cover = firstMatch(html, /class=["'][^"']*(?:blog_hero-image|featured-image)[^"']*["'][^>]*src=["']([^"']+)["']/i)
    || meta(html, 'property="og:image');
  const ogImage = meta(html, 'property="og:image') || cover;
  const h2 = stripTags(firstMatch(body, /<h2[^>]*>([\s\S]*?)<\/h2>/i));
  const dek = h2 || excerptFrom(body, description);
  const excerpt = excerptFrom(body, description);
  const minutes = readingMinutes(body);
  return {
    slug,
    oldUrl: url,
    title: stripTags(title).replace(/\s+—\s+The Deliberate Pause$/, ""),
    date,
    isoDate: dateIso(date),
    dek,
    excerpt,
    cover,
    ogImage,
    body,
    minutes,
    category: categoryFor(title, body),
  };
}

async function main() {
  await mkdir(path.join(ROOT, "read"), { recursive: true });
  const imported = [];
  for (const slug of issues) {
    process.stdout.write(`Importing ${slug}... `);
    const issue = await fetchIssue(slug);
    imported.push(issue);
    console.log(`${issue.title} (${issue.date})`);
  }

  imported.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));

  for (const issue of imported) {
    const dir = path.join(ROOT, "read", issue.slug);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, "index.html"), articlePage(issue, imported), "utf8");
  }

  const readPath = path.join(ROOT, "read.html");
  let read = await readFile(readPath, "utf8");
  const counts = imported.reduce((acc, issue) => {
    acc[issue.category] = (acc[issue.category] || 0) + 1;
    return acc;
  }, {});
  read = read.replace(/\n\s*<p class="meta">Every Monday, 11:11 am\.[\s\S]*?<\/p>/, "");
  read = read.replace(/data-counter="\d+"/, `data-counter="${imported.length}"`);
  read = read.replace(/<span class="counter"[^>]*>\d+<\/span> issues so far/, `<span class="counter" data-counter="${imported.length}">0</span> issues imported`);
  read = read.replace(/      background-size: cover;\n      background-position: center;\n/g, "");
  read = read.replace(/All <span class="count">\d+<\/span>/, `All <span class="count">${imported.length}</span>`);
  read = read.replace(/Stories <span class="count">\d+<\/span>/, `Stories <span class="count">${counts.Story || 0}</span>`);
  read = read.replace(/Essays <span class="count">\d+<\/span>/, `Essays <span class="count">${counts.Essay || 0}</span>`);
  read = read.replace(/Practice <span class="count">\d+<\/span>/, `Practice <span class="count">${counts.Practice || 0}</span>`);
  read = read.replace(/Notes <span class="count">\d+<\/span>/, `Notes <span class="count">0</span>`);
  read = read.replace(/(\.essay-row \.thumb \{[\s\S]*?background:[\s\S]*?;)([\s\S]*?border: 1px solid var\(--border-on-cream\);)/, "$1\n      background-size: cover;\n      background-position: center;$2");
  read = read.replace(
    /(<div class="filter-row"[\s\S]*?<\/div>\s*)[\s\S]*?(\s*<div class="end-of-archive">)/,
    `$1            ${archiveRows(imported)}$2`,
  );
  read = read.replace(/The full archive lands here as it is published\./, "The full Webflow newsletter archive is now imported here.");
  await writeFile(readPath, read, "utf8");
  await writeFile(path.join(ROOT, "sitemap.xml"), sitemap(imported), "utf8");
  console.log(`Imported ${imported.length} newsletter issues.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
