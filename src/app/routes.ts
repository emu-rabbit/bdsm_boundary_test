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
  label: string;
  summary: string;
  state: 'ready' | 'planned';
}

export const defaultRouteId: AppRouteId = 'story';
export const fallbackRouteId: AppRouteId = 'home';

export const appRoutes: AppRouteDefinition[] = [
  {
    id: 'story',
    hashPath: '/',
    label: '前導劇情',
    summary: '讓兔子帶使用者進入秘密檔案的第一段互動。',
    state: 'ready',
  },
  {
    id: 'home',
    hashPath: '/home',
    label: '主頁',
    summary: '彙整後續主要流程入口，作為多頁功能的導覽起點。',
    state: 'ready',
  },
  {
    id: 'create',
    hashPath: '/create',
    label: '創建新檔案',
    summary: '從測驗開始，整理目前的經驗、興趣與備註。',
    state: 'planned',
  },
  {
    id: 'files',
    hashPath: '/files',
    label: '查看舊檔案',
    summary: '檢閱本地保存的檔案，或用 ID、連結載入雲端檔案。',
    state: 'planned',
  },
  {
    id: 'timeMachine',
    hashPath: '/time-machine',
    label: '搭乘時光機',
    summary: '比對不同檔案之間的變化，看看界線與感覺如何移動。',
    state: 'planned',
  },
  {
    id: 'about',
    hashPath: '/about',
    label: '關於這隻兔子',
    summary: '了解這個專案如何陪你整理界線與溝通起點。',
    state: 'ready',
  },
  {
    id: 'settings',
    hashPath: '/settings',
    label: '設定',
    summary: '調整語言、偏好與和本機資料相關的選項。',
    state: 'planned',
  },
];

export const appRouteById = new Map(appRoutes.map((route) => [route.id, route]));

export const homeEntrances = appRoutes.filter(
  (route) => route.id !== 'story' && route.id !== 'home',
);

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
