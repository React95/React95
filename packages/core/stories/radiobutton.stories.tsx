import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import RadioButton from '../components/RadioButton';

const RadioButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: 'RadioButton',
  component: RadioButton,
} as Meta;

export const Simple = () => {
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
};
