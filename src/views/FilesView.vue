<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppShell } from '../app/useAppShell';
import { getFileManagerMessages } from '../features/secret-file/fileManagerMessages';
import { useSecretFileStore } from '../features/secret-file/application/useSecretFileStore';

const router = useRouter();
const store = useSecretFileStore();
const { locale, navigate } = useAppShell();
const messages = computed(() => getFileManagerMessages(locale.value));

function formatCreatedAt(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale.value, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function editFile(fileId: string): void {
  void router.push({ name: 'create', query: { file: fileId, view: 'results' } });
}

function deleteFile(fileId: string, profileName: string): void {
  if (window.confirm(messages.value.deleteConfirmation(profileName))) {
    store.deleteFile(fileId);
  }
}

onMounted(() => {
  store.refresh();
  window.scrollTo({ left: 0, top: 0 });
});
</script>

<template>
  <section class="files-route">
    <div class="files-stage">
      <header class="files-heading">
        <p class="home-kicker">{{ messages.title }}</p>
        <h1>{{ messages.title }}</h1>
      </header>

      <div v-if="store.files.length" class="file-list">
        <article v-for="file in store.files" :key="file.fileId" class="file-list-item">
          <div class="file-list-item__copy">
            <h2>{{ file.profileName }}</h2>
            <p>{{ messages.createdAt(formatCreatedAt(file.createdAt)) }}</p>
            <small>{{ messages.progress(file.answered, file.total) }}</small>
          </div>
          <div class="file-list-item__actions">
            <button class="quiet-action" type="button" @click="editFile(file.fileId)">
              {{ messages.edit }}
            </button>
            <button class="file-delete-action" type="button" @click="deleteFile(file.fileId, file.profileName)">
              {{ messages.delete }}
            </button>
          </div>
        </article>
      </div>

      <div v-else class="files-empty-state">
        <p>{{ messages.empty }}</p>
        <button class="quiet-action" type="button" @click="navigate('create')">
          {{ messages.emptyAction }}
        </button>
      </div>

      <button class="soft-link-action files-home-action" type="button" @click="navigate('home')">
        {{ messages.backHome }}
      </button>
    </div>
  </section>
</template>
