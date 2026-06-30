import { onMounted, onUnmounted, ref } from 'vue';
import { type AppRouteId, defaultRouteId, routeFromLocation, urlForRoute } from './routes';

export function useHashRouter(basePath: string, landingRouteId: AppRouteId = defaultRouteId) {
  const currentRouteId = ref<AppRouteId>(landingRouteId);

  function replaceRoute(routeId: AppRouteId): void {
    currentRouteId.value = routeId;
    window.history.replaceState({ routeId }, '', urlForRoute(routeId, basePath, landingRouteId));
  }

  function pushRoute(routeId: AppRouteId): void {
    currentRouteId.value = routeId;
    window.history.pushState({ routeId }, '', urlForRoute(routeId, basePath, landingRouteId));
  }

  function syncFromLocation(): void {
    currentRouteId.value = routeFromLocation(window.location, landingRouteId);
  }

  onMounted(() => {
    const initialRoute = routeFromLocation(window.location, landingRouteId);
    replaceRoute(initialRoute);
    syncFromLocation();

    window.addEventListener('hashchange', syncFromLocation);
    window.addEventListener('popstate', syncFromLocation);
  });

  onUnmounted(() => {
    window.removeEventListener('hashchange', syncFromLocation);
    window.removeEventListener('popstate', syncFromLocation);
  });

  return {
    currentRouteId,
    pushRoute,
  };
}
