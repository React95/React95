import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input, InputProps } from '../components/Input/Input';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: '',
    disabled: false,
    readOnly: false,
  },
} as Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A10',
    },
  },
};
