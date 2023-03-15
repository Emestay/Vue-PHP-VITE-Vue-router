import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3030, // Change the port number here
    proxy: {
      '/api': 'http://localhost/vuePhp/api'
    }
  },
  build: {
    outDir: 'dist',
  }
})
