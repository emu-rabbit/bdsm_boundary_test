import { createRouter, createWebHashHistory } from 'vue-router';
import {
  createRouteRecords,
  defaultRouteId,
  type AppRouteId,
} from './routes';

export function createAppRouter(basePath: string, landingRouteId: AppRouteId) {
  const hadExplicitHash = typeof window !== 'undefined' && window.location.hash.length > 0;
  const router = createRouter({
    history: createWebHashHistory(basePath),
    routes: createRouteRecords(landingRouteId),
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });
  let isInitialNavigation = true;

  router.beforeEach((to) => {
    const shouldUseLandingRoute =
      isInitialNavigation &&
      !hadExplicitHash &&
      to.name === defaultRouteId &&
      landingRouteId !== defaultRouteId;

    isInitialNavigation = false;

    if (shouldUseLandingRoute) {
      return { name: landingRouteId, replace: true };
    }

    return true;
  });

  return router;
}
