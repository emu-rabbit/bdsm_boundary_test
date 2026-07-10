import { createApp } from 'vue';
import App from './App.vue';
import { createAppRouter } from './app/router';
import { loadStoredProfileName } from './app/useProfileNameStorage';
import './styles.css';
import './styles/foundation.css';
import './styles/route-shell.css';
import './styles/story-stage.css';
import './styles/story-dialogue.css';
import './styles/home-page.css';
import './styles/secondary-pages.css';
import './styles/responsive.css';

const initialProfileName = loadStoredProfileName();
const router = createAppRouter(
  import.meta.env.BASE_URL,
  initialProfileName ? 'home' : 'story',
);
const app = createApp(App, { initialProfileName });

app.use(router);
void router.isReady().then(() => {
  app.mount('#app');
});

window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});
