<script setup lang="ts">
import { useAppShell } from '../app/useAppShell';

const { messages, navigate } = useAppShell();
</script>

<template>
  <main class="about-route version-history-route">
    <div class="home-ambient" aria-hidden="true" />
    <article class="version-history-stage">
      <button class="about-back-action" type="button" @click="navigate('about')">
        <span aria-hidden="true">←</span>{{ messages.versionHistory.backToAbout }}
      </button>

      <header class="version-history-heading">
        <p class="version-history-eyebrow">{{ messages.versionHistory.eyebrow }}</p>
        <h1>{{ messages.versionHistory.title }}</h1>
      </header>

      <section
        v-for="(entry, entryIndex) in messages.versionHistory.entries"
        :key="entry.version"
        class="version-history-entry"
        :class="{ 'version-history-entry--current': entryIndex === 0 }"
        :aria-labelledby="`version-${entry.version}`"
        :aria-current="entryIndex === 0 ? 'true' : undefined"
      >
        <h2 :id="`version-${entry.version}`">{{ entry.version }}</h2>
        <ul>
          <li v-for="item in entry.items" :key="item">{{ item }}</li>
        </ul>
      </section>
    </article>
  </main>
</template>
