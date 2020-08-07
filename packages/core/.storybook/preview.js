import { configure, addDecorator, addParameters } from '@storybook/react';

import theme from './theme';
import Frame from './decorators/Frame';

addParameters({
  options: {
    name: 'React95',
    url: 'https://github.com/React95/React95',
    showAddonPanel: false,
    theme,
  },
});

addDecorator(Frame);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
