import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    ViteAliases({
      '@': '/src',
    }),
    eslintPlugin(),
  ],
});
