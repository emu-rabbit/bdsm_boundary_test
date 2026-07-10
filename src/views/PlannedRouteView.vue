<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { fallbackRouteId, isAppRouteId } from '../app/routes';
import { useAppShell } from '../app/useAppShell';
import { homeRabbitUrl } from '../features/story/rabbitAssets';

const currentRoute = useRoute();
const { appTitle, localizedRouteById, messages, navigate } = useAppShell();
const activeRoute = computed(() => {
  const routeId = isAppRouteId(currentRoute.name) ? currentRoute.name : fallbackRouteId;
  return localizedRouteById.value.get(routeId) ?? localizedRouteById.value.get(fallbackRouteId);
});
</script>

<template>
  <section v-if="activeRoute" class="planned-route">
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
        <h1>{{ activeRoute.label }}</h1>
        <p>{{ activeRoute.summary }}</p>
        <button class="quiet-action" type="button" @click="navigate('home')">
          {{ messages.common.backHome }}
        </button>
      </div>
    </div>
  </section>
</template>
