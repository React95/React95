import { dirname, join } from 'path';
import { readdirSync } from 'fs';

export default {
  staticDirs: ['../components/GlobalStyle'],
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
    getAbsolutePath('@storybook/addon-storysource'),
    getAbsolutePath(__dirname, './src/theme-changer'),
    // not ready yet
    // getAbsolutePath(__dirname, './src/clippy-addon'),
    getAbsolutePath('@storybook/addon-designs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

function getAbsolutePath(...value) {
  return dirname(require.resolve(join.apply(null, [...value, 'package.json'])));
}
