import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-gh-pages/',//Change this to your repository name Portfolio if portfolio-gh-pages isn't workking
  plugins: [svelte()],
})
