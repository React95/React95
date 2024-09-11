import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { ImageLoader } from 'esbuild-vanilla-image-loader';
import path from 'path';
import { defineConfig } from 'vite';

import pkg from './package.json';
import { cssImportInject } from './vite-plugin-css-import-inject';

const assetFileNames = format => info => {
  if (info.name.endsWith('.vanilla.css')) {
    const [component] = info.name.split('.');
    const firstLetter = component.at(0);

    if (
      firstLetter === firstLetter.toLowerCase() &&
      firstLetter !== firstLetter.toUpperCase()
    ) {
      return `${format}/themes/[name].[ext]`;
    }

    return `${format}/${component}/[name].[ext]`;
  }

  return `${format}/[name].[ext]`;
};

const entryFileNames = format => () => {
  const ext = format === `esm` ? 'mjs' : 'cjs';
  return `${format}/[name].${ext}`;
};

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    lib: {
      entry: {
        index: './components',
        themes: './components/themes/all.ts',
        GlobalStyle: './components/GlobalStyle',
      },
      name: 'React95',
      fileName: format => (format === 'es' ? 'esm/index.js' : 'cjs/index.js'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        '@react95/icons',
        '@vanilla-extract/dynamic',
        '@vanilla-extract/recipes/createRuntimeFn',
        'rainbow-sprinkles/createRuntimeFn',
        'react',
        'react/jsx-runtime',
      ],
      output: [
        {
          format: 'cjs',
          assetFileNames: assetFileNames('cjs'),
          entryFileNames: entryFileNames('cjs'),
          preserveModules: true,
        },
        {
          format: 'es',
          assetFileNames: assetFileNames('esm'),
          entryFileNames: entryFileNames('esm'),
          preserveModules: true,
        },
      ],
    },
    minify: false,
    cssCodeSplit: true,
  },
  plugins: [
    cssImportInject(),
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
