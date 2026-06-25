<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import rabbitLandingUrl from './assets/rabbit-landing.png';

type SceneId = 'entrance' | 'promise' | 'ready';

interface Scene {
  id: SceneId;
  eyebrow: string;
  title: string;
  body: string;
  note: string;
  action: string;
}

const scenes: Scene[] = [
  {
    id: 'entrance',
    eyebrow: '兔子的祕密檔案',
    title: '先把界線，好好放進一個安靜的地方。',
    body:
      '這是一份協助你整理興趣、經驗與保留態度的工具。它不替任何人下判斷，也不催促你變成某種樣子。',
    note: '不確定本身就是很重要的答案。',
    action: '靠近檔案',
  },
  {
    id: 'promise',
    eyebrow: '知情同意',
    title: '祕密檔案是溝通起點，不是同意書。',
    body:
      '分享出去的內容只代表填寫當下的自我描述。任何界線、興趣與狀態，都可以因對象、時間與身心狀態改變。',
    note: '所有分享都應該回到現實中的再次確認。',
    action: '查看提醒',
  },
  {
    id: 'ready',
    eyebrow: '開始前',
    title: '兔子會陪你慢慢核對，不需要急著回答。',
    body:
      '正式測驗會把互動方向、強度與備註拆開記錄。低分、空白、拒絕與保留，都會被當成需要尊重的訊號。',
    note: '下一步會進入測驗流程；目前先停在第一版入口。',
    action: '先停在這裡',
  },
];

const sceneId = ref<SceneId>(readSceneFromPath());
const activeIndex = computed(() => scenes.findIndex((scene) => scene.id === sceneId.value));
const activeScene = computed(() => scenes[activeIndex.value] ?? scenes[0]);
const canGoBack = computed(() => activeIndex.value > 0);
const canGoNext = computed(() => activeIndex.value < scenes.length - 1);

function readSceneFromPath(): SceneId {
  const slug = window.location.pathname.replace(/^\/+/, '').split('/')[0];
  return scenes.some((scene) => scene.id === slug) ? (slug as SceneId) : 'entrance';
}

function pushScene(id: SceneId): void {
  sceneId.value = id;
  const nextUrl = id === 'entrance' ? '/' : `/${id}`;
  window.history.pushState({ scene: id }, '', nextUrl);
}

function goNext(): void {
  const next = scenes[activeIndex.value + 1];
  if (next) {
    pushScene(next.id);
  }
}

function goBack(): void {
  const previous = scenes[activeIndex.value - 1];
  if (previous) {
    pushScene(previous.id);
  }
}

function warmRabbitAsset(): void {
  const preload = new Image();
  preload.decoding = 'async';
  preload.src = rabbitLandingUrl;
}

function syncSceneFromHistory(): void {
  sceneId.value = readSceneFromPath();
}

onMounted(() => {
  warmRabbitAsset();
  window.addEventListener('popstate', syncSceneFromHistory);
});

onUnmounted(() => {
  window.removeEventListener('popstate', syncSceneFromHistory);
});
</script>

<template>
  <main class="min-h-dvh overflow-hidden bg-ink-950 text-paper">
    <section class="relative isolate flex min-h-dvh items-center justify-center px-5 py-5 sm:px-8">
      <div class="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_26%,rgba(242,223,168,0.2),transparent_23rem),linear-gradient(135deg,#070706_0%,#10100e_48%,#1b1a17_100%)]" />
      <div class="night-grain absolute inset-0 -z-20 opacity-70" />
      <div class="absolute bottom-0 left-1/2 -z-10 h-48 w-[34rem] max-w-[92vw] -translate-x-1/2 rounded-[50%] bg-candle/10 blur-3xl" />

      <div class="grid h-[min(820px,calc(100dvh-2.5rem))] w-full max-w-6xl grid-rows-[auto_1fr_auto] gap-4">
        <header class="flex items-center justify-between">
          <a href="/" class="inline-flex items-center gap-3 text-sm text-paper/82" @click.prevent="pushScene('entrance')">
            <span class="grid size-8 place-items-center rounded-full border border-candle/35 bg-paper/7 shadow-candle">
              <span class="size-2 rounded-full bg-candle" />
            </span>
            <span>兔子的祕密檔案</span>
          </a>
          <nav aria-label="場景進度" class="flex items-center gap-2">
            <a
              v-for="(scene, index) in scenes"
              :key="scene.id"
              :href="scene.id === 'entrance' ? '/' : `/${scene.id}`"
              class="progress-dot"
              :class="{ 'progress-dot-active': index === activeIndex }"
              :aria-label="`前往第 ${index + 1} 個畫面`"
              @click.prevent="pushScene(scene.id)"
            />
          </nav>
        </header>

        <Transition name="scene" mode="out-in">
          <div :key="activeScene.id" class="grid min-h-0 items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div class="order-2 flex min-h-0 flex-col justify-center lg:order-1">
              <p class="mb-4 text-sm font-medium text-candle/80">
                {{ activeScene.eyebrow }}
              </p>
              <h1 class="max-w-3xl text-balance text-[clamp(2.25rem,8vw,6.75rem)] font-semibold leading-[0.96]">
                {{ activeScene.title }}
              </h1>
              <p class="mt-6 max-w-2xl text-pretty text-base leading-8 text-paper/76 sm:text-lg">
                {{ activeScene.body }}
              </p>
              <p class="mt-5 max-w-xl border-l border-candle/45 pl-4 text-sm leading-7 text-candle/86 sm:text-base">
                {{ activeScene.note }}
              </p>
            </div>

            <aside class="order-1 flex min-h-0 items-center justify-center lg:order-2">
              <div class="rabbit-stage">
                <img
                  :src="rabbitLandingUrl"
                  alt="白色插畫兔子拿著筆記本，作為祕密檔案的陪伴角色。"
                  class="rabbit-image"
                  width="348"
                  height="572"
                  decoding="async"
                  fetchpriority="high"
                />
              </div>
            </aside>
          </div>
        </Transition>

        <footer class="flex items-center justify-between gap-3">
          <button class="ghost-button" type="button" :disabled="!canGoBack" @click="goBack">
            返回
          </button>
          <div class="hidden text-center text-xs leading-6 text-paper/55 sm:block">
            第 {{ activeIndex + 1 }} / {{ scenes.length }} 幕
          </div>
          <button class="primary-button" type="button" :disabled="!canGoNext" @click="goNext">
            {{ activeScene.action }}
          </button>
        </footer>
      </div>
    </section>
  </main>
</template>
