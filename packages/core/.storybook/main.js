import path from 'path';
import { readdirSync } from 'fs';
import { mergeConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { ImageLoader } from 'esbuild-vanilla-image-loader';

export default {
  stories: [
    '../stories/all.stories.tsx',
    ...readdirSync('./stories')
      .filter(file => file !== 'all.stories.tsx')
      .filter(file => file.endsWith('.stories.tsx'))
      .map(file => `../stories/${file}`),
  ],
  logLevel: 'debug',
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: true,
        actions: false,
      },
    },
    '@storybook/addon-storysource',
    './src/theme-changer',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async function viteFinal(config) {
    return mergeConfig(config, {
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
  },
};
