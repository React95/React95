import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Button, ButtonProps } from '../components/Button/Button';

// `as`, not `satisfies`: the polymorphic props make the type too complex
// for TypeScript (TS2590)
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
  args: {
    onClick: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Ok' });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledOnce();
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A3',
    },
  },
};
