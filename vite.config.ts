import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-task/',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
