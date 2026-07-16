(function routeBoundaryNotesEntry() {
  'use strict';

  var script = document.currentScript;
  var base = script && script.getAttribute('data-base') || '/';
  var normalizedBase = base === '/' ? '' : '/' + base.replace(/^\/+|\/+$/g, '');
  var pathname = window.location.pathname;

  if (normalizedBase && !pathname.startsWith(normalizedBase + '/') && pathname !== normalizedBase) {
    return;
  }

  var relativePath = pathname.slice(normalizedBase.length) || '/';
  var localeSegments = {
    en: 'en',
    'zh-Hant': 'zh-hant',
    'zh-Hans': 'zh-hans',
    ja: 'ja'
  };
  var localizedEntry = relativePath.match(/^\/(en|zh-hant|zh-hans|ja)\/?$/);

  if (relativePath !== '/' && !localizedEntry) return;

  var profileName = '';
  var storedLocale = 'en';

  try {
    profileName = (window.localStorage.getItem('bdsm-boundary-test-profile-name') || '').trim();
    storedLocale = localeSegments[window.localStorage.getItem('bdsm-boundary-test-locale')] || 'en';
  } catch (_error) {
    // Storage may be unavailable. English is the safe language fallback.
  }

  var routeLocale = localizedEntry ? localizedEntry[1] : storedLocale;
  var target = normalizedBase + '/' + routeLocale + (profileName ? '/home' : '');

  if (target !== pathname) {
    window.location.replace(target + window.location.search + window.location.hash);
  }
}());
