import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Range, RangeProps } from '../components/Range/Range';

const meta = {
  title: 'Range',
  component: Range,
  tags: ['autodocs'],
  args: {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
} satisfies Meta<RangeProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: args => <Range style={{ width: 100 }} {...args} />,
  play: async ({ canvas }) => {
    const range = canvas.getByRole('slider');

    await expect(range).toHaveAttribute('min', '0');
    await expect(range).toHaveAttribute('max', '100');
    await expect(range).toHaveAttribute('step', '1');
    // with no value, the browser starts it halfway
    await expect(range).toHaveValue('50');
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A15',
    },
  },
};
