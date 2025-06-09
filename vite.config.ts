// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// 👇 Solo el path del repo, con slashes
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
})

