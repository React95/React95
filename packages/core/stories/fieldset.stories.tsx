import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Fieldset, FieldSetProps } from '../components/Fieldset/Fieldset';
import { Frame, Checkbox } from '../components';

export default {
  title: 'Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
} as Meta<FieldSetProps>;

export const Simple = {
  render: () => (
    <Fieldset legend="Connection Settings" width="300px">
      <Frame display="flex" flexDirection="column">
        <Checkbox readOnly checked={false}>
          Disable Remote Keyboard & Pointer
        </Checkbox>
        <Checkbox readOnly checked={false}>
          Disable Local Keyboard & Pointer
        </Checkbox>
        <Checkbox readOnly checked>
          Remove Desktop Wallpaper
        </Checkbox>
      </Frame>
    </Fieldset>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7',
    },
  },
};
