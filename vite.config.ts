import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/cc-orchestrator-website/' : '/',
  build: {
    target: 'es2020',
    minify: 'esbuild',
  },
})
