<script setup lang="ts">
import { computed } from 'vue';
import type { AppRouteDefinition, AppRouteId } from '../app/routes';
import { homeRabbitUrl } from '../features/story/rabbitAssets';

const props = defineProps<{
  appTitle: string;
  entrances: AppRouteDefinition[];
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
    <header class="home-topbar">
      <p class="home-eyebrow">兔子的祕密檔案</p>
      <button
        v-if="settingsEntrance"
        class="settings-action"
        type="button"
        aria-label="開啟設定"
        :title="settingsEntrance.label"
        @click="emit('navigate', settingsEntrance.id)"
      >
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
          <path
            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.52a2 2 0 0 1-1 1.72l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.52a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"
          />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </header>

    <div class="home-stage">
      <img
        :src="homeRabbitUrl"
        alt="白色兔子抱著秘密檔案資料夾。"
        class="home-rabbit"
        width="1024"
        height="1536"
        decoding="async"
      />
      <div class="home-copy">
        <p class="home-kicker">歡迎回來</p>
        <h1>{{ appTitle }}</h1>
        <p>
          今天也可以慢慢來。先把目前的感覺放進檔案裡，或回頭看看以前留下的界線。
        </p>
      </div>
    </div>

    <nav class="home-entrances" aria-label="秘密檔案主要入口">
      <button
        v-for="entrance in primaryEntrances"
        :key="entrance.id"
        class="entrance-card"
        :data-route="entrance.id"
        type="button"
        @click="emit('navigate', entrance.id)"
      >
        <span class="entrance-state">
          {{ entrance.state === 'ready' ? '可使用' : '規劃中' }}
        </span>
        <span class="entrance-title">{{ entrance.label }}</span>
        <span class="entrance-summary">{{ entrance.summary }}</span>
      </button>
    </nav>

    <div class="home-footer-actions">
      <button
        v-if="aboutEntrance"
        class="soft-link-action"
        type="button"
        @click="emit('navigate', aboutEntrance.id)"
      >
        {{ aboutEntrance.label }}
      </button>
      <button class="soft-link-action" type="button" @click="emit('navigate', 'story')">
        再聽兔子說一次開場
      </button>
    </div>
  </section>
</template>
