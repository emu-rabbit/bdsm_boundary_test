import type { AppLocale } from './i18n';

export const localePathSegments = ['en', 'zh-hant', 'zh-hans', 'ja'] as const;

export type LocalePathSegment = (typeof localePathSegments)[number];

export const localeParamPattern = localePathSegments.join('|');

const localeToPathSegment: Record<AppLocale, LocalePathSegment> = {
  en: 'en',
  'zh-Hant': 'zh-hant',
  'zh-Hans': 'zh-hans',
  ja: 'ja',
};

const pathSegmentToLocale: Record<LocalePathSegment, AppLocale> = {
  en: 'en',
  'zh-hant': 'zh-Hant',
  'zh-hans': 'zh-Hans',
  ja: 'ja',
};

export function toLocalePathSegment(locale: AppLocale): LocalePathSegment {
  return localeToPathSegment[locale];
}

export function fromLocalePathSegment(value: unknown): AppLocale | null {
  const segment = Array.isArray(value) ? value[0] : value;

  if (typeof segment !== 'string' || !localePathSegments.includes(segment as LocalePathSegment)) {
    return null;
  }

  return pathSegmentToLocale[segment as LocalePathSegment];
}
