import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$bg_color: #ff00aa; $font_color: #fff;`
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.173:3002',
        changeOrigin: true
      }
    }
  }
  
})
