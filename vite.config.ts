import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/home/', // 👈 Altere para este valor exato!
  build: {
    outDir: 'dist' // Mantenha como 'dist' ou altere para 'docs' se necessário
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})