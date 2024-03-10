import path from 'path';
import { defineConfig } from 'vite';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { ImageLoader } from 'esbuild-vanilla-image-loader';

// https://vitejs.dev/config/
export default defineConfig({
  build: { chunkSizeWarningLimit: 1600 },
  plugins: [
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
