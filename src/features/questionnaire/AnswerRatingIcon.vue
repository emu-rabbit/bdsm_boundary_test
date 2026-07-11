<script setup lang="ts">
defineProps<{
  kind: 'experience' | 'preference' | 'special';
  value: string;
}>();

const experienceLevels: Record<string, number> = {
  none: 0,
  little: 1,
  some: 2,
  extensive: 4,
  veryExtensive: 5,
};
</script>

<template>
  <svg
    v-if="kind === 'experience'"
    class="answer-rating-icon"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <path d="M5 26.5h22" stroke="currentColor" stroke-linecap="round" stroke-width="2" opacity=".55" />
    <rect
      v-for="(height, index) in [6, 9, 12, 16, 20]"
      :key="height"
      :x="5 + index * 4.7"
      :y="25 - height"
      width="3.1"
      :height="height"
      rx="1.55"
      :fill="index < (experienceLevels[value] ?? 0) ? 'currentColor' : 'none'"
      stroke="currentColor"
      stroke-width="1.65"
      :opacity="index < (experienceLevels[value] ?? 0) ? 1 : .45"
    />
  </svg>

  <svg
    v-else-if="kind === 'preference' && value === 'hardNo'"
    class="answer-rating-icon"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="10.5" stroke="currentColor" stroke-width="2.4" />
    <path d="M8.6 23.4 23.4 8.6" stroke="currentColor" stroke-linecap="round" stroke-width="2.8" />
  </svg>

  <svg
    v-else-if="kind === 'preference' && value === 'reluctant'"
    class="answer-rating-icon"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <path d="M16 6 7.4 14.2a6 6 0 0 0 8.4 8.6l.2-.2.2.2a6 6 0 0 0 8.4-8.6L16 6Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2.2" />
  </svg>

  <svg
    v-else-if="kind === 'preference' && value === 'neutral'"
    class="answer-rating-icon"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="10.5" stroke="currentColor" stroke-width="2.2" />
    <path d="M10.5 16h11" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" />
  </svg>

  <svg
    v-else-if="kind === 'preference' && value === 'like'"
    class="answer-rating-icon"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <path d="M16 26 7.4 17.8a6 6 0 0 1 8.4-8.6l.2.2.2-.2a6 6 0 0 1 8.4 8.6L16 26Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2.3" />
  </svg>

  <svg
    v-else-if="kind === 'preference'"
    class="answer-rating-icon"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <path d="M15 27 6.8 19.1a6.1 6.1 0 0 1 8.5-8.8l.2.2.2-.2a6.1 6.1 0 0 1 8.5 8.8L16 27Z" fill="currentColor" />
    <path d="M24.5 4.5v5M22 7h5" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
  </svg>

  <svg v-else class="answer-rating-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path v-if="value === 'unsure'" d="M12.2 11.9a4.2 4.2 0 1 1 6.9 3.2c-1.5 1.3-3.1 2.2-3.1 4.6M16 24.6h.01" stroke="currentColor" stroke-linecap="round" stroke-width="2.5" />
    <path v-else d="M7 9.5h18M7 16h18M7 22.5h12" stroke="currentColor" stroke-linecap="round" stroke-width="2.4" />
  </svg>
</template>
