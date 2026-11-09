import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative paths, so the site works on iq.design and on the temporary github.io address.
  base: './',
  plugins: [react()],
  build: {
    target: 'es2019',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
  },
});
