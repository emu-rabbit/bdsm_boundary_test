<script setup lang="ts">
import type { LocaleMessages } from '../app/i18n';
import type { AppRouteId } from '../app/routes';
import { homeRabbitUrl } from '../features/story/rabbitAssets';

defineProps<{
  appTitle: string;
  messages: LocaleMessages;
}>();

const emit = defineEmits<{
  navigate: [routeId: AppRouteId];
}>();
</script>

<template>
  <section class="about-route">
    <div class="home-ambient" aria-hidden="true" />
    <div class="about-stage">
      <img
        :src="homeRabbitUrl"
        :alt="messages.assets.homeRabbitAlt"
        class="planned-rabbit"
        width="1024"
        height="1536"
        decoding="async"
      />
      <div class="about-copy">
        <p class="home-kicker">{{ appTitle }}</p>
        <h1>{{ messages.about.title }}</h1>
        <p>
          {{ messages.about.body }}
        </p>
        <div class="about-actions">
          <button class="quiet-action" type="button" @click="emit('navigate', 'story')">
            {{ messages.about.replayStory }}
          </button>
          <button class="soft-link-action" type="button" @click="emit('navigate', 'home')">
            {{ messages.common.backHome }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
