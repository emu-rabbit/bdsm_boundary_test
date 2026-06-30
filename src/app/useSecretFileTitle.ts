import { computed, type Ref } from 'vue';
import { defaultProfileName } from './useProfileNameStorage';

export function useSecretFileTitle(profileName: Ref<string>) {
  const displayName = computed(() => profileName.value.trim() || defaultProfileName);
  const appTitle = computed(() => `${displayName.value}的祕密檔案`);

  return {
    appTitle,
    displayName,
  };
}
