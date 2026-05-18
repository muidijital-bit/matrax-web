import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'router';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
})