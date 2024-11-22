import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * @type {import('vite').UserConfig}
 */

export default defineConfig({
  resolve: {
    alias: {
      '@src/*': './src/',
      '@/*': './',
    },
  },
  plugins: [react(), tsconfigPaths()],
});
