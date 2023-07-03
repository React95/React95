import { readdirSync } from 'fs';
import { mergeConfig } from 'vite';

export default {
  staticDirs: ['../components/GlobalStyle'],
  // stories: [, '../stories/(?!all)*.stories.tsx'],
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
        actions: false,
        controls: false,
      },
    },
    '@storybook/addon-storysource',
    // Incompatible with Storybook 7.0
    // implementation in progress
    // see https://github.com/storybookjs/addon-designs/pull/192
    // 'storybook-addon-designs',
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
    });
  },
};
