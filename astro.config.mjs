// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages (proyecto): sirve en https://vichoskt.github.io/vexa/
  // Al mover a dominio propio o Netlify, cambiar `site` y quitar `base`.
  site: 'https://vichoskt.github.io',
  base: '/vexa/',
  vite: {
    plugins: [tailwindcss()],
  },
});
