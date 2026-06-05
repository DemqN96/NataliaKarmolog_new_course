// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://demqn96.github.io',
  base: '/main',
  vite: {
    plugins: [tailwindcss()],
  },
});
