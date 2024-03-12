import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { ImageLoader } from 'esbuild-vanilla-image-loader';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    lib: {
      entry: 'components',
      name: 'React95',
      formats: ['es', 'cjs'],
      fileName: format => (format === 'es' ? 'esm/index.js' : 'cjs/index.js'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        'react',
        'react/jsx-runtime',
        'rainbow-sprinkles',
        '@react95/icons',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
      },
    },
  },
  plugins: [
    dts({
      include: ['components'],
      tsconfigPath: './tsconfig.production.json',
      outDir: './dist/@types',
    }),
    vanillaExtractPlugin({
      identifiers: ({ filePath, hash }) => {
        if (
          filePath.startsWith('components/themes') &&
          !filePath.endsWith('contract.css.ts')
        ) {
          const file = path.basename(filePath, '.css.ts');

          return `r95_theme_${file}_${hash}`;
        }

        return `r95_${hash}`;
      },
      esbuildOptions: {
        plugins: [
          ImageLoader({
            filter: /\.(png|svg|ttf|eot|woff|woff2)$/,
          }),
        ],
      },
    }),
  ],
});
