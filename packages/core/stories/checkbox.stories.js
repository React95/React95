import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Checkbox from '../components/Checkbox';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBoxStory = () => {
  const [checked, toggleChecked] = useState(true);

  const handleChange = () => {
    toggleChecked(!checked);
  };

  return (
    <CheckboxList>
      <Checkbox checked={checked} onChange={handleChange}>
        Working
      </Checkbox>

      <Checkbox checked>Checked</Checkbox>
      <Checkbox checked={false}>Unchecked</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>

      <Checkbox disabled checked>
        Checked and Disabled
      </Checkbox>
    </CheckboxList>
  );
};

const code = `<Checkbox checked={true}>
  Checked
</Checkbox>
<Checkbox checked={false}>
  Unchecked
</Checkbox>
<Checkbox disabled={true}>
  Disabled
</Checkbox>
`;

storiesOf('Checkbox', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <CheckBoxStory />);
