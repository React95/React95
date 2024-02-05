import { readdirSync } from 'fs';
import { mergeConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { ImageLoader } from 'esbuild-vanilla-image-loader';

export default {
  // stories: [, '../stories/(?!all)*.stories.tsx'],
  stories: [
    '../stories/fieldset.stories.tsx',
    '../stories/dropdown.stories.tsx',
    '../stories/checkbox.stories.tsx',
    '../stories/avatar.stories.tsx',
    '../stories/button.stories.tsx',
    '../stories/cursor.stories.tsx',
    '../stories/frame.stories.tsx',
  ],
  // stories: [
  //   '../stories/all.stories.tsx',
  //   ...readdirSync('./stories')
  //     .filter(file => file !== 'all.stories.tsx')
  //     .filter(file => file.endsWith('.stories.tsx'))
  //     .map(file => `../stories/${file}`),
  // ],
  logLevel: 'debug',
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: false,
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-designs',
    './src/theme-changer/register',
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
          identifiers: ({ hash }) => `r95_${hash}`,
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
