<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAppShell } from '../app/useAppShell';
import type { LegalDocumentMessage } from '../app/i18n/types';

defineProps<{ document: LegalDocumentMessage }>();

const { locale, localeOptions, messages, setLocale } = useAppShell();
const router = useRouter();
const termsHref = computed(() => router.resolve({ name: 'terms' }).href);
const privacyHref = computed(() => router.resolve({ name: 'privacy' }).href);
</script>

<template>
  <main class="legal-route">
    <div class="legal-ambient" aria-hidden="true" />
    <article class="legal-document">
      <header class="legal-header">
        <div class="legal-header__topline">
          <p class="home-kicker">{{ document.eyebrow }}</p>
          <div class="legal-language" role="group" :aria-label="messages.legal.languageLabel">
            <button
              v-for="option in localeOptions"
              :key="option.id"
              class="legal-language__choice"
              :class="{ 'legal-language__choice--active': option.id === locale }"
              :aria-pressed="option.id === locale"
              type="button"
              @click="setLocale(option.id)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
        <h1>{{ document.title }}</h1>
        <p class="legal-header__intro">{{ document.intro }}</p>
        <dl class="legal-meta">
          <div>
            <dt>{{ document.lastUpdatedLabel }}</dt>
            <dd>{{ document.lastUpdated }}</dd>
          </div>
          <div>
            <dt>{{ messages.legal.operatorLabel }}</dt>
            <dd>{{ messages.legal.operatorName }}</dd>
          </div>
        </dl>
        <p class="legal-controlling">{{ document.controllingLanguage }}</p>
      </header>

      <div class="legal-sections">
        <section v-for="section in document.sections" :key="section.title" class="legal-section">
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <ul v-if="section.items?.length">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>

      <footer class="legal-footer">
        <div>
          <strong>{{ messages.legal.contactLabel }}</strong>
          <a href="mailto:mausu2526@gmail.com">mausu2526@gmail.com</a>
        </div>
        <nav :aria-label="messages.legal.documentsLabel">
          <a :href="termsHref" target="_blank" rel="noopener noreferrer">{{ messages.legal.termsLink }}</a>
          <a :href="privacyHref" target="_blank" rel="noopener noreferrer">{{ messages.legal.privacyLink }}</a>
        </nav>
      </footer>
    </article>
  </main>
</template>
