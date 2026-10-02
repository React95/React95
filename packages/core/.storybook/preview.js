import Frame from './decorators/Frame';

import './preview.css';
import { markNonConfigurableProps } from './arg-types-enhancers';
import { organizeFrameStyleProps } from './frame-arg-types';
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
  a11y: {
    // violations show up as warnings in the story tests and the Accessibility
    // panel, without failing them. Switch to 'error' once they are fixed
    test: 'todo',
  },
};

export const decorators = [Frame, withClippy];

export const argTypesEnhancers = [
  organizeFrameStyleProps,
  markNonConfigurableProps,
];
