import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // '/api'로 시작하는 요청은 백엔드 서버(예: 8080포트)로 보냄
      '/api': {
        target: 'http://localhost:8080', // 백엔드 주소에 맞게 수정하세요
        changeOrigin: true,
      },
    },
  },
})