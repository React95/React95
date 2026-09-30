import { readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { cssTsSideEffects } from './vite-plugin-css-ts-side-effects.js';

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

export default {
  staticDirs: ['../components/GlobalStyle'],
  stories: [
    '../stories/all.stories.tsx',
    ...readdirSync(join(import.meta.dirname, '../stories'))
      .filter(file => file !== 'all.stories.tsx')
      .filter(file => file.endsWith('.stories.tsx'))
      .map(file => `../stories/${file}`),
  ],
  logLevel: 'debug',
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-designs'),
    join(import.meta.dirname, 'src', 'theme-changer'),
    join(import.meta.dirname, 'src', 'clippy-addon'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  features: {
    actions: false,
  },
  viteFinal: config => ({
    ...config,
    plugins: [...(config.plugins ?? []), cssTsSideEffects()],
  }),
};
