import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',  // GitHub Pages reconhece esta pasta
    emptyOutDir: true
  }
})
