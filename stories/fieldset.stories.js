import React from 'react';
import styled from 'styled-components';
import Fieldset from '../components/Fieldset';
import Checkbox from '../components/Checkbox';

import { storiesOf } from '@storybook/react';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

storiesOf('Fieldset', module).add('default', () => (
  <Fieldset legend="Connection Settings" style={{ width: '300px' }}>
    <CheckboxList>
      <Checkbox checked={false}>Disable Remote Keyboard & Pointer</Checkbox>
      <Checkbox checked={false}>Disable Local Keyboard & Pointer</Checkbox>
      <Checkbox checked={true}>Remove Desktop Wallpaper</Checkbox>
    </CheckboxList>
  </Fieldset>
));
