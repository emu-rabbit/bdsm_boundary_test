export const cloudShareIdPattern = /^sf_[A-Za-z0-9_-]{24}$/;

export function isCloudShareId(value: string): boolean {
  return cloudShareIdPattern.test(value);
}

export function parseCloudShareId(input: string, baseUrl = 'https://boundarynotes.com'): string | null {
  const candidate = input.trim();

  if (isCloudShareId(candidate)) {
    return candidate;
  }

  let url: URL;

  try {
    url = new URL(candidate, baseUrl);
  } catch {
    return null;
  }

  if (
    (url.protocol !== 'https:' && url.protocol !== 'http:') ||
    !url.pathname.replace(/\/$/, '').endsWith('/preview') ||
    url.searchParams.get('source') !== 'cloud'
  ) {
    return null;
  }

  const shareId = url.searchParams.get('file') ?? '';
  return isCloudShareId(shareId) ? shareId : null;
}
