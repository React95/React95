import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';

import Input from '../components/Input';

storiesOf('Input', module).add('default', () => (
  <WithClippy component="Input" code="<Input />">
    <Input />
  </WithClippy>
));
