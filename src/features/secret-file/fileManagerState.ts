export const fileViewerSources = ['local', 'cloud'] as const;
export type FileViewerSource = (typeof fileViewerSources)[number];

export function resolveInitialFileViewer(
  localFileCount: number,
  cloudFileCount: number,
): FileViewerSource {
  if (localFileCount === 0 && cloudFileCount > 0) {
    return 'cloud';
  }

  return 'local';
}
