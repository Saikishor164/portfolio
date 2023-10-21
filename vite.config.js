import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VueImages from 'vite-plugin-vue-images';

export default defineConfig({
  plugins: [react(), VueImages()],
});
