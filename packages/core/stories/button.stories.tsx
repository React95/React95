import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, ButtonProps } from '../components/Button/Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Ok',
    disabled: false,
  },
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<ButtonProps<'button'>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A3',
    },
  },
};
