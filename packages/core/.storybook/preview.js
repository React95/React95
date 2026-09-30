import Frame from './decorators/Frame';

import './preview.css';
import { withClippy } from './decorators/withClippy';

export const globalTypes = {
  selectedTheme: {
    name: 'Theme',
    description: 'Global theme for components',
  },
};

export const initialGlobals = {
  selectedTheme: 'win95',
};

export const parameters = {
  docs: {
    // replaces @storybook/addon-storysource, removed in Storybook 9
    codePanel: true,
  },
};

export const decorators = [Frame, withClippy];
