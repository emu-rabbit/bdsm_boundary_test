import type { LocaleMessages } from './i18n';

export type AppRouteId =
  | 'story'
  | 'home'
  | 'create'
  | 'files'
  | 'timeMachine'
  | 'about'
  | 'settings';

export interface AppRouteDefinition {
  id: AppRouteId;
  hashPath: string;
  state: 'ready' | 'planned';
}

export type LocalizedAppRouteDefinition = AppRouteDefinition & {
  label: string;
  summary: string;
};

export const defaultRouteId: AppRouteId = 'story';
export const fallbackRouteId: AppRouteId = 'home';

export const appRoutes: AppRouteDefinition[] = [
  {
    id: 'story',
    hashPath: '/',
    state: 'ready',
  },
  {
    id: 'home',
    hashPath: '/home',
    state: 'ready',
  },
  {
    id: 'create',
    hashPath: '/create',
    state: 'planned',
  },
  {
    id: 'files',
    hashPath: '/files',
    state: 'planned',
  },
  {
    id: 'timeMachine',
    hashPath: '/time-machine',
    state: 'planned',
  },
  {
    id: 'about',
    hashPath: '/about',
    state: 'ready',
  },
  {
    id: 'settings',
    hashPath: '/settings',
    state: 'ready',
  },
];

export const appRouteById = new Map(appRoutes.map((route) => [route.id, route]));

export const homeEntrances = appRoutes.filter(
  (route) => route.id !== 'story' && route.id !== 'home',
);

export function localizeRoutes(messages: LocaleMessages): LocalizedAppRouteDefinition[] {
  return appRoutes.map((route) => ({
    ...route,
    ...messages.routes[route.id],
  }));
}

function normalizeHashPath(rawHash: string): string {
  const path = rawHash.replace(/^#/, '') || '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.replace(/\/+$/, '') || '/';
}

export function routeFromLocation(
  location: Location,
  defaultRoute: AppRouteId = defaultRouteId,
): AppRouteId {
  const hasExplicitHash = location.hash.length > 0;
  const hashPath = normalizeHashPath(location.hash);
  const matchedHashRoute = appRoutes.find((route) => route.hashPath === hashPath);

  if (matchedHashRoute) {
    if (matchedHashRoute.id === defaultRouteId && !hasExplicitHash) {
      return defaultRoute;
    }

    return matchedHashRoute.id;
  }

  return defaultRoute;
}

export function urlForRoute(
  routeId: AppRouteId,
  basePath: string,
  defaultRoute: AppRouteId = defaultRouteId,
): string {
  const route = appRouteById.get(routeId) ?? appRouteById.get(defaultRouteId);
  const hashPath = route?.hashPath ?? '/';

  if (routeId === defaultRoute) {
    return basePath;
  }

  return `${basePath}#${hashPath}`;
}
