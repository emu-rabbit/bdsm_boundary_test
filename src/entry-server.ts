import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import { createMemoryHistory } from 'vue-router';
import { renderToString } from '@vue/server-renderer';
import App from './App.vue';
import { createAppRouter } from './app/router';
import type { AppLocale } from './app/i18n';
import { fromLocalePathSegment } from './app/localeRouting';
import { createSeoHeadHtml, getSeoDocument } from './app/seo';

function localeFromUrl(url: string): AppLocale {
  const segment = url.split(/[?#]/u, 1)[0]?.split('/').filter(Boolean)[0];
  return fromLocalePathSegment(segment) ?? 'en';
}

export async function render(url: string, publicIndexing: boolean) {
  const locale = localeFromUrl(url);
  const router = createAppRouter(
    '/',
    'story',
    locale,
    createMemoryHistory('/'),
  );
  const app = createSSRApp(App, { initialProfileName: '' });
  const pinia = createPinia();

  app.use(pinia);
  app.use(router);
  await router.push(url);
  await router.isReady();

  const html = await renderToString(app);
  const route = router.currentRoute.value;
  const routeLocale = fromLocalePathSegment(route.params.locale) ?? locale;
  const seo = getSeoDocument(route.name, routeLocale, publicIndexing);

  return {
    headHtml: createSeoHeadHtml(seo),
    html,
    lang: routeLocale,
  };
}

export function renderSeo(routeName: string, locale: AppLocale, publicIndexing: boolean) {
  const seo = getSeoDocument(routeName, locale, publicIndexing);
  return {
    headHtml: createSeoHeadHtml(seo),
    lang: locale,
  };
}
