import { defineConfig } from 'vite';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

import pkg from './package.json';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    lib: {
      entry: {
        index: './index.ts',
      },
      name: 'Clippy',
    },
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      external: [
        ...Object.keys(pkg.devDependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        'react',
        'react/jsx-runtime',
      ],
      output: [
        {
          dir: 'dist/esm',
          format: 'es',
        },
        {
          dir: 'dist/cjs',
          format: 'cjs',
        },
      ],
    },
  },
  plugins: [dynamicImportVars()],
});
