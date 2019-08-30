import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';

import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

storiesOf('Button', module)
  .addDecorator(withClippy)
  .add('default', () => <Button>Open</Button>, {
    code: '<Button>Open</Button>',
  });
