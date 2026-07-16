import { describe, expect, it } from 'vitest';
import { normalizeCloudSharingError } from './cloudSharingService';

describe('normalizeCloudSharingError', () => {
  it('identifies Firebase App Check errors', () => {
    expect(normalizeCloudSharingError({ code: 'appCheck/recaptcha-error' }).code).toBe('appCheck');
  });

  it('treats denied cloud reads as App Check failures', () => {
    expect(normalizeCloudSharingError({ code: 'firestore/permission-denied' }).code).toBe('appCheck');
  });

  it('keeps unrelated failures in the generic unavailable state', () => {
    expect(normalizeCloudSharingError({ code: 'firestore/unavailable' }).code).toBe('unavailable');
  });
});
