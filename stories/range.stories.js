import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Range from '../components/Range';

const code = '<Range />';

storiesOf('Range', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <Range style={{ width: 100 }} />);
