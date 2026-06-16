import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42038,
    proxy: {
      '/api': {
        target: 'http://localhost:42039',
        changeOrigin: true,
      },
    },
  },
});
