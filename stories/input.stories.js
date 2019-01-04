import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Input from '../components/Input';

const code = '<Input />';

storiesOf('Input', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <Input />);
