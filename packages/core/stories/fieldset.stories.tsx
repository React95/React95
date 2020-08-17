import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Fieldset from '../components/Fieldset';
import Checkbox from '../components/Checkbox';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: 'Fieldset',
  Component: Fieldset,
} as Meta;

export const Simple = () => (
  <Fieldset legend="Connection Settings" style={{ width: '300px' }}>
    <CheckboxList>
      <Checkbox checked={false}>Disable Remote Keyboard & Pointer</Checkbox>
      <Checkbox checked={false}>Disable Local Keyboard & Pointer</Checkbox>
      <Checkbox checked>Remove Desktop Wallpaper</Checkbox>
    </CheckboxList>
  </Fieldset>
);
