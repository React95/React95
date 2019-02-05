import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import RadioButton from '../components/RadioButton';

const code = '<RadioButton />';

storiesOf('RadioButton', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <RadioButton />);
