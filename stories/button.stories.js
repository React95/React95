import React from 'react';
import Button from '../components/Button';

import { storiesOf } from '@storybook/react';
import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';

storiesOf('Button', module).add('default', () => (
  <WithClippy component="Button">
    <Button>Open</Button>
  </WithClippy>
));
