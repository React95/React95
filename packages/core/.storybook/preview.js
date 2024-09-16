import Frame from './decorators/Frame';

import './preview.css';
import { withModal } from './src/theme-changer/decorators';
import { withClippy } from './src/clippy-addon/clippy-addon';

export const globalTypes = {
  selectedTheme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'win95',
  },
};

export const decorators = [Frame, withModal, withClippy];
