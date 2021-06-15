import { addParameters } from '@storybook/react';

import Frame from './decorators/Frame';
import { withThemes } from './src/theme-changer/withThemes';

export const globalTypes = {
  selectedTheme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'win95',
  },
};

addParameters({
  options: {
    name: 'React95',
    url: 'https://github.com/React95/React95',
  },
});

export const decorators = [Frame, withThemes];
