import { describe, expect, it } from 'vitest';
import { resolveInitialFileViewer } from './fileManagerState';

describe('resolveInitialFileViewer', () => {
  it('opens the only source that has files', () => {
    expect(resolveInitialFileViewer(2, 0)).toBe('local');
    expect(resolveInitialFileViewer(0, 2)).toBe('cloud');
  });

  it('prefers local when both or neither source has files', () => {
    expect(resolveInitialFileViewer(0, 0)).toBe('local');
    expect(resolveInitialFileViewer(2, 2)).toBe('local');
  });
});
