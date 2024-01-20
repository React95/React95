import { readdirSync } from 'fs';
import { mergeConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default {
  staticDirs: ['../components/GlobalStyle'],
  // stories: [, '../stories/(?!all)*.stories.tsx'],
  stories: ['../stories/button.stories.tsx'],
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
      plugins: [vanillaExtractPlugin()],
    });
  },
};
