import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');
  void command;
  const base = env.VITE_BASE_PATH || '/bdsm_boundary_test/';

  return {
    base,
    plugins: [vue()],
  };
});
