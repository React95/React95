import type { Meta } from '@storybook/react';
import * as React from 'react';

import {
  RadioButton,
  RadioButtonProps,
} from '../components/RadioButton/RadioButton';
import { Frame } from '../components';

export default {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
} as Meta<RadioButtonProps>;

export const Simple = {
  render: () => {
    const [selectedOption, setSelectedOption] = React.useState('one');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setSelectedOption(e.target.value);

    return (
      <Frame display="flex" flexDirection="column">
        <RadioButton
          name="working"
          value="one"
          checked={selectedOption === 'one'}
          onChange={handleChange}
        >
          Working
        </RadioButton>
        <RadioButton
          name="working"
          value="two"
          checked={selectedOption === 'two'}
          onChange={handleChange}
        >
          Working
        </RadioButton>
        <RadioButton readOnly checked value="three">
          Checked
        </RadioButton>
        <RadioButton readOnly disabled value="four">
          Disabled
        </RadioButton>
        <RadioButton readOnly checked disabled value="five">
          Checked & Disabled
        </RadioButton>
      </Frame>
    );
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14',
    },
  },
};
