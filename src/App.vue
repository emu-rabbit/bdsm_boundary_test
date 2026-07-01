<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { fallbackRouteId, localizeRoutes, type AppRouteId } from './app/routes';
import { useI18n } from './app/i18n';
import { useHashRouter } from './app/useHashRouter';
import { loadStoredProfileName, saveStoredProfileName } from './app/useProfileNameStorage';
import { useSecretFileTitle } from './app/useSecretFileTitle';
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import PlannedRouteView from './views/PlannedRouteView.vue';
import SettingsView from './views/SettingsView.vue';
import StoryView from './views/StoryView.vue';

const storedProfileName = loadStoredProfileName();
const profileName = ref(storedProfileName);
const { locale, localeOptions, messages, setLocale } = useI18n();
const { appTitle, titleParts } = useSecretFileTitle(profileName, messages);
const { currentRouteId, pushRoute } = useHashRouter(
  import.meta.env.BASE_URL,
  storedProfileName ? 'home' : 'story',
);
const localizedRoutes = computed(() => localizeRoutes(messages.value));
const localizedRouteById = computed(() => new Map(localizedRoutes.value.map((route) => [route.id, route])));
const localizedHomeEntrances = computed(() =>
  localizedRoutes.value.filter((route) => route.id !== 'story' && route.id !== 'home'),
);
const activeRoute = computed(
  () => localizedRouteById.value.get(currentRouteId.value) ?? localizedRouteById.value.get(fallbackRouteId),
);

watch(
  appTitle,
  (title) => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  },
  { immediate: true },
);

function navigate(routeId: AppRouteId): void {
  pushRoute(routeId);
}

function completeStory(): void {
  profileName.value = saveStoredProfileName(
    profileName.value,
    messages.value.title.defaultProfileName,
  );
  navigate('home');
}

function updateProfileName(name: string): void {
  profileName.value = saveStoredProfileName(name, messages.value.title.defaultProfileName);
}
</script>

<template>
  <main class="app-shell min-h-dvh overflow-hidden text-ink-900">
    <StoryView
      v-if="currentRouteId === 'story'"
      :active-locale="locale"
      v-model:profile-name="profileName"
      :app-title="appTitle"
      :locale-options="localeOptions"
      :messages="messages"
      :title-parts="titleParts"
      @complete="completeStory"
      @restart="navigate('story')"
      @update:locale="setLocale"
    />

    <HomeView
      v-else-if="currentRouteId === 'home'"
      :entrances="localizedHomeEntrances"
      :messages="messages"
      :title-parts="titleParts"
      @navigate="navigate"
    />

    <AboutView
      v-else-if="currentRouteId === 'about'"
      :app-title="appTitle"
      :messages="messages"
      @navigate="navigate"
    />

    <SettingsView
      v-else-if="currentRouteId === 'settings'"
      :active-locale="locale"
      :app-title="appTitle"
      :locale-options="localeOptions"
      :messages="messages"
      :profile-name="profileName"
      @navigate="navigate"
      @update:locale="setLocale"
      @update:profile-name="updateProfileName"
    />

    <PlannedRouteView
      v-else-if="activeRoute"
      :app-title="appTitle"
      :messages="messages"
      :route="activeRoute"
      @navigate="navigate"
    />
  </main>
</template>
