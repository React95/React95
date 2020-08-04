import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import withClippy from '../.storybook/src/clippy-addon/clippy-addon';
import RadioButton from '../components/RadioButton';

const RadioButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioButtonStory = () => {
  const [selectedOption, setSelectedOption] = useState('one');

  const handleChange = e => setSelectedOption(e.target.value);

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
      <RadioButton readOnly checked value="example">
        Checked
      </RadioButton>
      <RadioButton readOnly disabled value="example">
        Disabled
      </RadioButton>
      <RadioButton readOnly checked disabled value="example">
        Checked & Disabled
      </RadioButton>
    </RadioButtonList>
  );
};

const code = `<RadioButton checked>
  Checked
</RadioButton>

<RadioButton disabled>
  Disabled
</RadioButton>

<RadioButton checked disabled>
  Checked & Disabled
</RadioButton>
`;

storiesOf('RadioButton', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <RadioButtonStory />);
