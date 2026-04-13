import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://silviacorpas.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    optimizeDeps: {
      exclude: ['shiki'],
    },
  },
});
