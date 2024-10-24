import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Buzzvel2.0/',
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    svgr({
      include: `/src/assets/*.svg`,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
});
