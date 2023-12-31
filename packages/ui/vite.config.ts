/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/test.setup.ts',
    coverage: {
      provider: 'v8', // or 'v8'
      reporter: ['text', 'lcov', 'json-summary'],
      lines: 60,
      functions: 60,
      branches: 60,
      statements: 60,
      exclude: ['src/index.tsx', 'test'],
    },
  },
})
