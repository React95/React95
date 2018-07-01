import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';

import ProgressBar from '../components/ProgressBar';

storiesOf('ProgressBar', module).add('default', () => (
  <WithClippy
    component="ProgressBar"
    code="<ProgressBar width={200} percent={49} />"
  >
    <ProgressBar width={200} percent={49} />
  </WithClippy>
));
