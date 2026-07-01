<script setup lang="ts">
import { ref, watch } from 'vue';
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

function saveProfileName(): void {
  emit('update:profileName', profileNameDraft.value);
}

watch(
  () => props.profileName,
  (profileName) => {
    profileNameDraft.value = profileName;
  },
);
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
          <button class="primary-action settings-save-action" type="submit">
            {{ messages.settings.saveProfile }}
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
