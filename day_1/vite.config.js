import { defineConfig } from 'vite'

export default defineConfig({
  base: '/hmac/day_1/', // GitHub 저장소 이름으로 변경하세요
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    host: true,
    port: 3000
  }
})
