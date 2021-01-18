import { configure, addDecorator, addParameters } from '@storybook/react';

import theme from './theme';
import Frame from './decorators/Frame';

addParameters({
  options: {
    name: 'React95',
    url: 'https://github.com/React95/React95',
    theme,
  },
});

addDecorator(Frame);
