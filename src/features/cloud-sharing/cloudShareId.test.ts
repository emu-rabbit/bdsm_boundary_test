import { describe, expect, it } from 'vitest';
import { parseCloudShareId } from './cloudShareId';

const shareId = 'sf_1234567890abcdefghijklmn';

describe('parseCloudShareId', () => {
  it('accepts a share ID and the canonical cloud preview URL', () => {
    expect(parseCloudShareId(shareId)).toBe(shareId);
    expect(
      parseCloudShareId(`https://boundarynotes.com/preview?source=cloud&file=${shareId}`),
    ).toBe(shareId);
  });

  it('rejects local previews and unrelated URLs', () => {
    expect(parseCloudShareId(`https://boundarynotes.com/preview?source=local&file=${shareId}`)).toBeNull();
    expect(parseCloudShareId(`https://example.com/?file=${shareId}`)).toBeNull();
  });
});
