<script setup lang="ts">
import LegalDocumentPage from '../components/LegalDocumentPage.vue';
import { useAppShell } from '../app/useAppShell';

const { messages } = useAppShell();
</script>

<template>
  <LegalDocumentPage :document="messages.legal.terms" />
</template>
