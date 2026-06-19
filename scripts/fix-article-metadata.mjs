import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articlesDir = path.join(root, 'articles');
const fixes = {
  'fall-in-love-with-2026-sooner-than-later': {
    date: '2025-12-29',
    description: 'A future-facing reset for founders who want to build from intention, recover their attention, and make clearer decisions before urgency takes over.'
  },
  'founders-are-lonely-but-theres-a-way-out': {
    date: '2025-10-06',
    description: 'Founder loneliness can distort resilience and decision-making. Explore how meditation, Sangha, and Vedanta can rebuild connection and purpose.'
  },
  'my-rejection-experiment-that-can-be-your-breakthrough': {
    date: '2025-11-03',
    description: 'A practical rejection experiment for founders learning to metabolize failure, build resilience, and keep moving without turning one no into destiny.'
  },
  'no-means-no-to-hustle-culture': {
    date: '2026-01-05',
    description: 'A founder-focused case against hustle culture, showing how exhaustion becomes identity and how clearer boundaries protect performance and health.'
  },
  'perfectionism-is-self-sabotage-in-disguise': {
    date: '2026-05-25',
    description: 'Learn how founder perfectionism becomes self-sabotage, analysis paralysis, and delayed action, and what it takes to ship before you feel ready.'
  },
  'rejection-hurts-but-dont-let-it-be-painful': {
    date: '2025-11-10',
    title: "Rejection Hurts: Don't Let It Become Pain | The Deliberate Pause",
    description: 'Rejection hurts, but founders do not have to turn it into suffering or self-definition. Learn how to recover without denying the sting.'
  },
  'smart-but-stuck-when-intelligence-alone-falls-short-of-cracking-the-startup': {
    date: '2025-10-27',
    description: 'Why intelligence alone falls short inside startup ambiguity, and how founders can build the judgment, action, and resilience needed to move forward.'
  },
  'the-cost-of-becoming-a-people-pleaser': {
    date: '2026-05-18'
  },
  'the-false-sense-of-agency': {
    date: '2026-02-02',
    description: 'When constant motion feels like agency, founders can mistake activity for control. Learn how to slow down, see clearly, and make cleaner decisions.'
  },
  'the-hidden-cost-of-not-choosing-yourself': {
    date: '2026-05-11',
    description: 'Explore the hidden cost of self-abandonment for founders, and how choosing yourself strengthens boundaries, self-worth, and clearer decisions.'
  },
  'the-low-status-moat-matters': {
    date: '2026-01-12',
    description: 'Why unglamorous, low-status work compounds into a founder advantage, strengthening learning, agency, execution, and resilience over time.'
  },
  'the-market-for-your-honest-opinion-is-bigger-than-you-think': {
    date: '2026-04-06',
    description: 'Why a founder’s honest opinion, taste, and willingness to disagree can become valuable signals for clearer positioning and stronger decisions.'
  },
  'the-unicorn-trap-and-the-road-to-enlightenment': {
    date: '2025-12-15',
    title: 'The Unicorn Trap and Enlightenment | The Deliberate Pause',
    description: 'Why startup scale, status, and the perfect exit do not guarantee founder happiness, autonomy, or a life that feels meaningful and enough.'
  },
  'welcome-to-the-deliberate-pause': {
    date: '2025-08-18',
    description: 'Start here: an introduction to The Deliberate Pause and the mental training founders need to build with clarity, resilience, and space under pressure.'
  },
  'your-attention-span-holds-a-secret': {
    date: '2025-12-01',
    description: 'What your attention span reveals about pressure, distraction, and recovery, and how founders can stay with what matters long enough to see clearly.'
  }
};

function replaceMeta(html, key, value, attribute = 'name') {
  const pattern = new RegExp(`<meta\\s+${attribute}=["']${key.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}["']\\s+content=["'][^"']*["']\\s*\\/>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${value.replaceAll('"', '&quot;')}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace(/(<meta\s+name=["']description["'][^>]*>)/i, `$1\n  ${tag}`);
}

function getMeta(html, key, attribute = 'name') {
  const pattern = new RegExp(`<meta\\s+${attribute}=["']${key.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}["']\\s+content=["']([^"']*)["']`, 'i');
  return (html.match(pattern)?.[1] || '').replaceAll('&quot;', '"').replaceAll('&amp;', '&');
}

for (const [slug, fix] of Object.entries(fixes)) {
  const file = path.join(articlesDir, slug, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const currentTitle = html.match(/<title>(.*?)<\/title>/i)?.[1] || '';
  const title = fix.title || currentTitle;

  if (fix.title) html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  if (fix.description) html = replaceMeta(html, 'description', fix.description);

  const description = fix.description || getMeta(html, 'description');
  const image = getMeta(html, 'og:image', 'property');
  html = replaceMeta(html, 'og:title', title, 'property');
  html = replaceMeta(html, 'og:description', description, 'property');
  html = replaceMeta(html, 'og:image:alt', `${title.replace(/ \| The Deliberate Pause$/, '')} article cover`, 'property');
  html = replaceMeta(html, 'article:published_time', fix.date, 'property');
  html = replaceMeta(html, 'twitter:title', title);
  html = replaceMeta(html, 'twitter:description', description);
  html = replaceMeta(html, 'twitter:image:alt', `${title.replace(/ \| The Deliberate Pause$/, '')} article cover`);

  if (!getMeta(html, 'twitter:card')) html = replaceMeta(html, 'twitter:card', 'summary_large_image');
  if (!getMeta(html, 'twitter:image') && image) html = replaceMeta(html, 'twitter:image', image);
  if (!getMeta(html, 'og:url', 'property')) {
    html = replaceMeta(html, 'og:url', `https://www.thedeliberatepause.com/articles/${slug}`, 'property');
  }

  html = html.replace(/(<script type="application\/ld\+json">)(\{[^\n]*"@type":"Article"[^\n]*\})(<\/script>)/, (match, open, json, close) => {
    const data = JSON.parse(json);
    data.description = description;
    data.datePublished = fix.date;
    return `${open}${JSON.stringify(data)}${close}`;
  });

  fs.writeFileSync(file, html);
}

console.log(`Updated shared metadata for ${Object.keys(fixes).length} articles.`);
