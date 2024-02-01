import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setupReactTesting.ts'],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
});