import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = join(root, 'dist');
const ssrOutput = join(root, 'dist-ssr');
const template = await readFile(join(dist, 'index.html'), 'utf8');
const { render, renderSeo } = await import(pathToFileURL(join(ssrOutput, 'entry-server.js')).href);
const publicIndexing = process.env.VITE_PUBLIC_INDEXING === 'true';
const origin = 'https://boundarynotes.com';
const locales = [
  { app: 'en', href: 'en', path: 'en' },
  { app: 'zh-Hant', href: 'zh-Hant', path: 'zh-hant' },
  { app: 'zh-Hans', href: 'zh-Hans', path: 'zh-hans' },
  { app: 'ja', href: 'ja', path: 'ja' },
];
const publicRoutes = [
  { id: 'entry', suffix: '' },
  { id: 'about', suffix: '/about' },
  { id: 'terms', suffix: '/terms' },
  { id: 'privacy', suffix: '/privacy' },
];
const privateRoutes = [
  { id: 'story', suffix: '/intro' },
  { id: 'home', suffix: '/home' },
  { id: 'create', suffix: '/create' },
  { id: 'preview', suffix: '/preview' },
  { id: 'files', suffix: '/files' },
  { id: 'timeMachine', suffix: '/time-machine' },
  { id: 'settings', suffix: '/settings' },
];

function outputPath(routePath) {
  const cleanPath = routePath.replace(/^\//u, '');
  return join(dist, `${cleanPath}.html`);
}

function renderDocument(headHtml, lang, appHtml = '', hydrated = false) {
  const headPattern = /<!--seo-start-->[\s\S]*?<!--seo-end-->/u;
  const appPattern = /<div id="app"><\/div>/u;
  const appElement = hydrated
    ? `<div id="app" data-prerendered="true">${appHtml}</div>`
    : '<div id="app"></div>';

  if (!headPattern.test(template) || !appPattern.test(template)) {
    throw new Error('The built HTML template is missing SEO or app replacement markers.');
  }

  return template
    .replace(
      /<html lang="[^"]+" data-public-indexing="[^"]+">/u,
      `<html lang="${lang}" data-public-indexing="${publicIndexing}">`,
    )
    .replace(headPattern, `<!--seo-start-->\n    ${headHtml}\n    <!--seo-end-->`)
    .replace(appPattern, appElement);
}

async function writeRoute(routePath, html) {
  const filePath = outputPath(routePath);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, html, 'utf8');
}

for (const locale of locales) {
  for (const route of publicRoutes) {
    const routePath = `/${locale.path}${route.suffix}`;
    const rendered = await render(routePath, publicIndexing);
    await writeRoute(
      routePath,
      renderDocument(rendered.headHtml, rendered.lang, rendered.html, true),
    );
  }

  for (const route of privateRoutes) {
    const routePath = `/${locale.path}${route.suffix}`;
    const rendered = renderSeo(route.id, locale.app, false);
    await writeRoute(routePath, renderDocument(rendered.headHtml, rendered.lang));
  }
}

const notFoundSeo = renderSeo('notFound', 'en', false);
await writeFile(
  join(dist, '404.html'),
  renderDocument(notFoundSeo.headHtml, notFoundSeo.lang),
  'utf8',
);

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

const sitemapUrls = publicRoutes.flatMap((route) => locales.map((locale) => {
  const loc = `${origin}/${locale.path}${route.suffix}`;
  const alternates = locales.map((alternate) =>
    `    <xhtml:link rel="alternate" hreflang="${alternate.href}" href="${escapeXml(`${origin}/${alternate.path}${route.suffix}`)}" />`,
  );
  alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${origin}/en${route.suffix}`)}" />`);
  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    ...alternates,
    '  </url>',
  ].join('\n');
}));
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...sitemapUrls,
  '</urlset>',
  '',
].join('\n');

await writeFile(join(dist, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(
  join(dist, 'robots.txt'),
  publicIndexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
    : 'User-agent: *\nAllow: /\n',
  'utf8',
);

await rm(ssrOutput, { recursive: true, force: true });
