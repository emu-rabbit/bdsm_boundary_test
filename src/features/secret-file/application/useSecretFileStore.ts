import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { SecretFile } from '../domain/types';
import {
  BrowserSecretFileRepository,
  type SecretFileStorageStatus,
  type SecretFileSummary,
} from '../storage/browserSecretFileRepository';
import { parseSecretFile } from '../validation/secretFileSchema';

const repository = new BrowserSecretFileRepository();

export const useSecretFileStore = defineStore('secret-file', () => {
  const activeSecretFile = ref<SecretFile | null>(null);
  const files = ref<SecretFileSummary[]>([]);
  const storageStatus = ref<SecretFileStorageStatus>(repository.getStatus());
  const hasActiveSecretFile = computed(() => activeSecretFile.value !== null);

  function close(): void {
    activeSecretFile.value = null;
  }

  function deleteFile(fileId: string): void {
    repository.delete(fileId);

    if (activeSecretFile.value?.fileId === fileId) {
      activeSecretFile.value = null;
    }

    refresh();
  }

  function importFile(input: unknown): SecretFile {
    const secretFile = repository.save(parseSecretFile(input));
    activeSecretFile.value = secretFile;
    refresh();

    return secretFile;
  }

  function open(fileId: string): SecretFile | null {
    const secretFile = repository.read(fileId);
    activeSecretFile.value = secretFile;
    refresh();

    return secretFile;
  }

  function persist(secretFile: SecretFile): SecretFile {
    const savedSecretFile = repository.save(secretFile);
    activeSecretFile.value = savedSecretFile;
    refresh();

    return savedSecretFile;
  }

  function refresh(): void {
    files.value = repository.list();
    storageStatus.value = repository.getStatus();
  }

  return {
    activeSecretFile,
    close,
    deleteFile,
    files,
    hasActiveSecretFile,
    importFile,
    open,
    persist,
    refresh,
    storageStatus,
  };
});
