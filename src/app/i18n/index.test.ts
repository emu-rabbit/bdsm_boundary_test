import { describe, expect, it } from 'vitest';
import { resolveInitialLocale } from './index';

describe('initial locale resolution', () => {
  it('preserves an existing viewer locale for a cloud share entry', () => {
    expect(resolveInitialLocale('ja', 'zh-Hant', true)).toBe('zh-Hant');
  });

  it('uses the cloud share URL locale when the viewer has no stored locale', () => {
    expect(resolveInitialLocale('ja', null, true)).toBe('ja');
  });

  it('keeps URL locale priority for ordinary localized routes', () => {
    expect(resolveInitialLocale('ja', 'zh-Hant', false)).toBe('ja');
  });

  it('uses English when neither source can identify a locale', () => {
    expect(resolveInitialLocale(null, null, false)).toBe('en');
  });
});
