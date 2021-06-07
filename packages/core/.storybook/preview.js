import { addDecorator, addParameters } from '@storybook/react';
import { addons } from '@storybook/addons';

import theme from './theme';
import Frame from './decorators/Frame';

import { withThemes } from './src/theme-changer/withThemes';

export const globals = {
  selectedTheme: 'win95',
};

addParameters({
  options: {
    name: 'React95',
    url: 'https://github.com/React95/React95',
  },
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});

addDecorator(Frame);
addDecorator(withThemes);
