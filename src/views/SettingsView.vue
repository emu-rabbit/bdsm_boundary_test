<script setup lang="ts">
import type { AppLocale, LocaleMessages, LocaleOption } from '../app/i18n';
import type { AppRouteId } from '../app/routes';
import { homeRabbitUrl } from '../features/story/rabbitAssets';

defineProps<{
  activeLocale: AppLocale;
  appTitle: string;
  localeOptions: LocaleOption[];
  messages: LocaleMessages;
}>();

const emit = defineEmits<{
  navigate: [routeId: AppRouteId];
  'update:locale': [locale: AppLocale];
}>();
</script>

<template>
  <section class="settings-route">
    <div class="home-ambient" aria-hidden="true" />
    <div class="settings-stage">
      <img
        :src="homeRabbitUrl"
        :alt="messages.assets.homeRabbitAlt"
        class="planned-rabbit"
        width="1024"
        height="1536"
        decoding="async"
      />
      <div class="settings-copy">
        <p class="home-kicker">{{ appTitle }}</p>
        <h1>{{ messages.settings.title }}</h1>
        <p>{{ messages.settings.body }}</p>

        <section class="settings-panel" :aria-label="messages.settings.languageLabel">
          <div class="settings-panel__heading">
            <span>{{ messages.settings.languageLabel }}</span>
            <small>{{ messages.settings.languageHint }}</small>
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
