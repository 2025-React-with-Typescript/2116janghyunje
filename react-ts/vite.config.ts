import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // 프론트에서 /api 로 부르면 -> 백엔드 http://localhost:2114 로 우회
      '/api': {
        target: 'http://localhost:2114',
        changeOrigin: true,
        secure: false,
      },
      // (선택) /swagger-ui 도 열어보고 싶으면
      '/swagger-ui': {
        target: 'http://localhost:2114',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})