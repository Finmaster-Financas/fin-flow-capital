import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Nome CORRETO do pacote
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/fin-flow-capital/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})