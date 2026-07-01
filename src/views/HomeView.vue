<script setup lang="ts">
import { computed } from 'vue';
import type { LocaleMessages } from '../app/i18n';
import type { AppRouteId, LocalizedAppRouteDefinition } from '../app/routes';
import type { SecretFileTitleParts } from '../app/useSecretFileTitle';
import SecretFileTitle from '../components/SecretFileTitle.vue';
import { homeRabbitUrl } from '../features/story/rabbitAssets';

const props = defineProps<{
  entrances: LocalizedAppRouteDefinition[];
  messages: LocaleMessages;
  titleParts: SecretFileTitleParts;
}>();

const emit = defineEmits<{
  navigate: [routeId: AppRouteId];
}>();

const routeById = computed(() => new Map(props.entrances.map((entrance) => [entrance.id, entrance])));
const primaryEntrances = computed(() =>
  props.entrances.filter(
    (entrance) =>
      entrance.id === 'create' || entrance.id === 'files' || entrance.id === 'timeMachine',
  ),
);
const aboutEntrance = computed(() => routeById.value.get('about'));
const settingsEntrance = computed(() => routeById.value.get('settings'));
</script>

<template>
  <section class="home-route">
    <div class="home-ambient" aria-hidden="true" />

    <div class="home-stage">
      <img
        :src="homeRabbitUrl"
        :alt="messages.assets.homeRabbitAlt"
        class="home-rabbit"
        width="1024"
        height="1536"
        decoding="async"
      />
      <div class="home-copy">
        <p class="home-kicker">{{ messages.home.kicker }}</p>
        <SecretFileTitle :parts="titleParts" variant="home" />
        <p>
          {{ messages.home.copy }}
        </p>
      </div>
    </div>

    <nav class="home-entrances" :aria-label="messages.home.navAria">
      <button
        v-for="entrance in primaryEntrances"
        :key="entrance.id"
        class="entrance-card"
        :data-route="entrance.id"
        type="button"
        @click="emit('navigate', entrance.id)"
      >
        <span class="entrance-state">
          {{ entrance.state === 'ready' ? messages.common.ready : messages.common.planned }}
        </span>
        <span class="entrance-title">{{ entrance.label }}</span>
        <span class="entrance-summary">{{ entrance.summary }}</span>
      </button>
    </nav>

    <div class="home-footer-actions">
      <button
        v-if="settingsEntrance"
        class="soft-link-action"
        type="button"
        @click="emit('navigate', settingsEntrance.id)"
      >
        {{ settingsEntrance.label }}
      </button>
      <button
        v-if="aboutEntrance"
        class="soft-link-action"
        type="button"
        @click="emit('navigate', aboutEntrance.id)"
      >
        {{ aboutEntrance.label }}
      </button>
    </div>
  </section>
</template>
