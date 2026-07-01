<script setup lang="ts">
import type { LocaleMessages } from '../app/i18n';
import type { AppRouteId, LocalizedAppRouteDefinition } from '../app/routes';
import { homeRabbitUrl } from '../features/story/rabbitAssets';

defineProps<{
  appTitle: string;
  messages: LocaleMessages;
  route: LocalizedAppRouteDefinition;
}>();

const emit = defineEmits<{
  navigate: [routeId: AppRouteId];
}>();
</script>

<template>
  <section class="planned-route">
    <div class="home-ambient" aria-hidden="true" />
    <div class="planned-stage">
      <img
        :src="homeRabbitUrl"
        :alt="messages.assets.homeRabbitAlt"
        class="planned-rabbit"
        width="1024"
        height="1536"
        decoding="async"
      />
      <div class="planned-copy">
        <p class="home-kicker">{{ appTitle }}</p>
        <h1>{{ route.label }}</h1>
        <p>{{ route.summary }}</p>
        <button class="quiet-action" type="button" @click="emit('navigate', 'home')">
          {{ messages.common.backHome }}
        </button>
      </div>
    </div>
  </section>
</template>
