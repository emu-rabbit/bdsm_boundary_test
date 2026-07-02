<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import type { AppLocale, LocaleMessages, LocaleOption } from '../app/i18n';
import type { AppRouteId } from '../app/routes';
import { settingsRabbitUrl } from '../features/story/rabbitAssets';

const props = defineProps<{
  activeLocale: AppLocale;
  appTitle: string;
  localeOptions: LocaleOption[];
  messages: LocaleMessages;
  profileName: string;
}>();

const emit = defineEmits<{
  navigate: [routeId: AppRouteId];
  'update:locale': [locale: AppLocale];
  'update:profileName': [name: string];
}>();

const profileNameDraft = ref(props.profileName);
const profileSaveFeedbackVisible = ref(false);
const profileSaveFeedbackKey = ref(0);
let profileSaveFeedbackTimeout: ReturnType<typeof window.setTimeout> | null = null;

const isProfileNameSaved = computed(() => profileNameDraft.value === props.profileName);
const profileSaveButtonShowsSaved = computed(() => profileSaveFeedbackVisible.value || isProfileNameSaved.value);

function saveProfileName(): void {
  if (isProfileNameSaved.value) {
    return;
  }

  emit('update:profileName', profileNameDraft.value);
  profileSaveFeedbackVisible.value = true;
  profileSaveFeedbackKey.value += 1;

  if (profileSaveFeedbackTimeout) {
    window.clearTimeout(profileSaveFeedbackTimeout);
  }

  profileSaveFeedbackTimeout = window.setTimeout(() => {
    profileSaveFeedbackVisible.value = false;
    profileSaveFeedbackTimeout = null;
  }, 1800);
}

watch(
  () => props.profileName,
  (profileName) => {
    profileNameDraft.value = profileName;
  },
);

watch(profileNameDraft, (draft) => {
  if (draft !== props.profileName) {
    profileSaveFeedbackVisible.value = false;
    profileSaveFeedbackKey.value += 1;
  }
});

onBeforeUnmount(() => {
  if (profileSaveFeedbackTimeout) {
    window.clearTimeout(profileSaveFeedbackTimeout);
  }
});
</script>

<template>
  <section class="settings-route">
    <div class="home-ambient" aria-hidden="true" />
    <div class="settings-stage">
      <img
        :src="settingsRabbitUrl"
        :alt="messages.assets.settingsRabbitAlt"
        class="settings-rabbit"
        width="1024"
        height="1536"
        decoding="async"
      />
      <div class="settings-copy">
        <div class="settings-heading">
          <p class="home-kicker">{{ appTitle }}</p>
          <h1>{{ messages.settings.title }}</h1>
        </div>
        <p class="settings-device-note">{{ messages.settings.body }}</p>

        <form class="settings-panel" :aria-label="messages.settings.profileLabel" @submit.prevent="saveProfileName">
          <div class="settings-panel__heading">
            <span>{{ messages.settings.profileLabel }}</span>
          </div>
          <label class="settings-name-field">
            <span>{{ messages.settings.profileFieldLabel }}</span>
            <input
              v-model="profileNameDraft"
              :placeholder="messages.settings.profilePlaceholder"
              autocomplete="nickname"
              maxlength="32"
              type="text"
            />
          </label>
          <button
            class="primary-action settings-save-action"
            :class="{
              'settings-save-action--saved': profileSaveButtonShowsSaved,
              'settings-save-action--feedback': profileSaveFeedbackVisible,
            }"
            type="submit"
            :disabled="isProfileNameSaved"
            :aria-label="profileSaveButtonShowsSaved ? messages.settings.profileSaved : messages.settings.saveProfile"
            aria-live="polite"
          >
            <span :key="profileSaveFeedbackKey" class="settings-save-action__content">
              <span v-if="profileSaveButtonShowsSaved" aria-hidden="true">✓</span>
              {{ profileSaveButtonShowsSaved ? messages.settings.profileSaved : messages.settings.saveProfile }}
            </span>
          </button>
        </form>

        <section class="settings-panel" :aria-label="messages.settings.languageLabel">
          <div class="settings-panel__heading">
            <span>{{ messages.settings.languageLabel }}</span>
          </div>
          <div class="settings-language-grid" role="list">
            <button
              v-for="option in localeOptions"
              :key="option.id"
              class="language-choice"
              :class="{ 'language-choice--active': option.id === activeLocale }"
              :aria-pressed="option.id === activeLocale"
              type="button"
              @click="emit('update:locale', option.id)"
            >
              <span>{{ option.label }}</span>
            </button>
          </div>
        </section>

        <button class="quiet-action" type="button" @click="emit('navigate', 'home')">
          {{ messages.common.backHome }}
        </button>
      </div>
    </div>
  </section>
</template>
