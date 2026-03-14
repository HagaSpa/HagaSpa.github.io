import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hagaspa.github.io',
  experimental: {
    rustCompiler: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
