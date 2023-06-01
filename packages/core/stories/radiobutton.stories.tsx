import type { Meta } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import RadioButton from '../components/RadioButton';

const RadioButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
} as Meta<typeof RadioButton>;

export const Simple = {
  render: () => {
    const [selectedOption, setSelectedOption] = React.useState('one');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setSelectedOption(e.target.value);

    return (
      <RadioButtonList>
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
      </RadioButtonList>
    );
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14',
    },
  },
};
