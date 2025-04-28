import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, mergeConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig as defineVitestConfig } from 'vitest/config'

const viteConfig = defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
})

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setup-tests.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      all: true,
      exclude: ['**/node_modules/**', '**/__tests__/**', '**/vite.config.ts'],
    },
  },
})

export default mergeConfig(viteConfig, vitestConfig)
