import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  base: '/memorialWebsite/',
  plugins: [
    react(),
    ViteAliases({
      '@': '/src',
    }),
    eslintPlugin(),
  ],
  rollupOptions: {
    external: [
      'react',
      'nonid',
      'polished',
      'react-dom',
      'react-router-dom',
      'sytled-components',
      'vite-plugin-svgr',
    ],
  },
});
