import Frame from './decorators/Frame';

import './preview.css';
import { withModal } from './src/theme-changer/decorators';

export const globalTypes = {
  selectedTheme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'win95',
  },
};

export const decorators = [Frame, withModal];
