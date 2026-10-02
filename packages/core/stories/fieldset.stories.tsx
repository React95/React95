import type { Meta, StoryObj } from '@storybook/react-vite';

import { Fieldset, FieldSetProps } from '../components/Fieldset/Fieldset';
import { Frame, Checkbox } from '../components';

const meta = {
  title: 'Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  args: {
    legend: 'Connection Settings',
    disabled: false,
  },
} as Meta<FieldSetProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: args => (
    <Fieldset {...args} width="300px">
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
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7',
    },
  },
};
