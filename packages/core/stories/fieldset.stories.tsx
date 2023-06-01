import type { Meta } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import Checkbox from '../components/Checkbox';
import Fieldset from '../components/Fieldset';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: 'Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
} as Meta<typeof Fieldset>;

export const Simple = {
  render: () => (
    <Fieldset legend="Connection Settings" style={{ width: '300px' }}>
      <CheckboxList>
        <Checkbox checked={false}>Disable Remote Keyboard & Pointer</Checkbox>
        <Checkbox checked={false}>Disable Local Keyboard & Pointer</Checkbox>
        <Checkbox checked>Remove Desktop Wallpaper</Checkbox>
      </CheckboxList>
    </Fieldset>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7',
    },
  },
};
