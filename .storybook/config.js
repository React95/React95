import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import Frame from './decorators/Frame';

setOptions({
  name: 'React95',
  url: 'https://github.com/React95/React95',
  showAddonPanel: false,
});

addDecorator(Frame);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
