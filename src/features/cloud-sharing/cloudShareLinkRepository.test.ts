import { describe, expect, it } from 'vitest';
import {
  CloudShareLinkRepository,
  CloudShareLinkStorageError,
  type KeyValueStorage,
  type LinkedCloudShare,
} from './cloudShareLinkRepository';

class MemoryStorage implements KeyValueStorage {
  values = new Map<string, string>();
  getItem(key: string): string | null { return this.values.get(key) ?? null; }
  removeItem(key: string): void { this.values.delete(key); }
  setItem(key: string, value: string): void { this.values.set(key, value); }
}

function createShare(shareId: string, profileName: string, createdAt: string): LinkedCloudShare {
  return { createdAt, profileName, scope: 'all', shareId };
}

describe('CloudShareLinkRepository', () => {
  it('persists display metadata in newest-first order and replaces duplicates', () => {
    const storage = new MemoryStorage();
    const repository = new CloudShareLinkRepository(storage);
    const first = createShare(
      'sf_1234567890abcdefghijklmn',
      '兔子',
      '2026-07-14T00:00:00.000Z',
    );
    const second = createShare(
      'sf_abcdefghijklmnopqrstuvwx',
      '月兔',
      '2026-07-14T01:00:00.000Z',
    );

    repository.add(first);
    repository.add(second);
    repository.add({ ...first, profileName: '新兔子' });

    expect(new CloudShareLinkRepository(storage).list()).toEqual([
      { ...first, profileName: '新兔子' },
      second,
    ]);
  });

  it('loads the legacy ID-only index without requesting cloud data', () => {
    const storage = new MemoryStorage();
    const shareId = 'sf_1234567890abcdefghijklmn';
    storage.setItem('bdsm-boundary-test-cloud-share-ids:v1', JSON.stringify([shareId]));

    expect(new CloudShareLinkRepository(storage).list()).toEqual([
      { createdAt: null, profileName: null, scope: null, shareId },
    ]);
  });

  it('unlinks locally without deleting any remote data', () => {
    const repository = new CloudShareLinkRepository(new MemoryStorage());
    const share = createShare(
      'sf_1234567890abcdefghijklmn',
      '兔子',
      '2026-07-14T00:00:00.000Z',
    );

    repository.add(share);
    expect(repository.remove(share.shareId)).toEqual([]);
  });

  it('does not claim success or mutate memory when local persistence fails', () => {
    const storage = new MemoryStorage();
    const repository = new CloudShareLinkRepository(storage);
    const share = createShare(
      'sf_1234567890abcdefghijklmn',
      '兔子',
      '2026-07-14T00:00:00.000Z',
    );
    storage.setItem = () => { throw new Error('quota exceeded'); };

    expect(() => repository.add(share)).toThrow(CloudShareLinkStorageError);
    expect(repository.list()).toEqual([]);
  });

  it('recovers from a corrupt v2 index and persists later links', () => {
    const storage = new MemoryStorage();
    const share = createShare(
      'sf_abcdefghijklmnopqrstuvwx',
      '兔子',
      '2026-07-14T00:00:00.000Z',
    );
    storage.setItem('bdsm-boundary-test-cloud-shares:v2', '{not-json');

    const recoveredRepository = new CloudShareLinkRepository(storage);
    expect(recoveredRepository.list()).toEqual([]);
    recoveredRepository.add(share);

    expect(new CloudShareLinkRepository(storage).list()).toEqual([share]);
  });
});
