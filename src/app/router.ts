import { createRouter, createWebHistory, type RouterHistory } from 'vue-router';
import type { AppLocale } from './i18n';
import { fromLocalePathSegment, toLocalePathSegment } from './localeRouting';
import {
  createRouteRecords,
  type AppRouteId,
} from './routes';

export function createAppRouter(
  basePath: string,
  entryRouteId: AppRouteId,
  preferredLocale: AppLocale,
  history: RouterHistory = createWebHistory(basePath),
) {
  const router = createRouter({
    history,
    routes: createRouteRecords(preferredLocale),
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });
  let isInitialNavigation = true;

  router.beforeEach((to) => {
    const routeLocale = fromLocalePathSegment(to.params.locale) ?? preferredLocale;
    const shouldRedirectReturningEntry =
      isInitialNavigation &&
      to.name === 'entry' &&
      entryRouteId === 'home';

    isInitialNavigation = false;

    if (shouldRedirectReturningEntry) {
      return {
        name: entryRouteId,
        params: { locale: toLocalePathSegment(routeLocale) },
        replace: true,
      };
    }

    return true;
  });

  return router;
}
