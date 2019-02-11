import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import { Tab, Tabs } from '../components/Tabs';
import RadioButton from '../components/RadioButton';

const code = '<RadioButton />';

storiesOf('RadioButton', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => (
    <>
      <RadioButton name="working">Working</RadioButton>
      <RadioButton name="working">Working</RadioButton>
      <RadioButton checked>Checked</RadioButton>
      <RadioButton disabled>Disabled</RadioButton>
      <RadioButton checked disabled>
        Checked & Disabled
      </RadioButton>
    </>
  ));
