import Frame from './decorators/Frame';
import { withThemes } from './src/theme-changer/withThemes';

import './preview.css';

export const globalTypes = {
  selectedTheme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'win95',
  },
};

export const decorators = [Frame, withThemes];
