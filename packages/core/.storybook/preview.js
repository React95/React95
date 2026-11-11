import Frame from './decorators/Frame';

import './preview.css';
import { markNonConfigurableProps } from './arg-types-enhancers';
import { organizeFrameStyleProps } from './frame-arg-types';
import { withClippy } from './decorators/withClippy';
import { title, titleBarBackground } from '../components/TitleBar/TitleBar.css';

// an inactive window's title is grey on grey, like in Windows 95. WCAG
// exempts inactive components from the contrast minimum
const inactiveTitle = `.${titleBarBackground.classNames.variants.active.false} .${title}`;

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
  options: {
    // the showcase of every component first, then the rest as they are
    storySort: { order: ['All'] },
  },
  docs: {
    // replaces @storybook/addon-storysource, removed in Storybook 9
    codePanel: true,
  },
  a11y: {
    // violations fail the story tests
    test: 'error',
    config: {
      rules: [{ id: 'color-contrast', selector: `*:not(${inactiveTitle})` }],
    },
  },
};

export const decorators = [Frame, withClippy];

export const argTypesEnhancers = [
  organizeFrameStyleProps,
  markNonConfigurableProps,
];
