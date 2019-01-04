import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';

import { Range } from '../';

storiesOf('Range', module).add('default', () => (
  <WithClippy
    component="Range"
    code="<Range />"
  >
    <Range />
  </WithClippy>
));
