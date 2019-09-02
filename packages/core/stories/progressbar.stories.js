import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import ProgressBar from '../components/ProgressBar';

const code = '<ProgressBar width={200} percent={49} />';

storiesOf('ProgressBar', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <ProgressBar width={200} percent={49} />);
