export const defaultProfileName = '兔子';
export const profileNameStorageKey = 'bdsm-boundary-test-profile-name';

function storageAvailable(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage;
}

export function normalizeProfileName(name: string, fallback = ''): string {
  const normalizedName = name.trim().slice(0, 18);
  return normalizedName || fallback;
}

export function loadStoredProfileName(): string {
  try {
    return normalizeProfileName(storageAvailable()?.getItem(profileNameStorageKey) ?? '');
  } catch {
    return '';
  }
}

export function saveStoredProfileName(name: string): string {
  const normalizedName = normalizeProfileName(name, defaultProfileName);

  try {
    storageAvailable()?.setItem(profileNameStorageKey, normalizedName);
  } catch {
    // localStorage can be unavailable in restricted/private contexts; the in-memory name still works.
  }

  return normalizedName;
}
