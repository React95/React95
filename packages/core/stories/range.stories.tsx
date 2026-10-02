import type { Meta, StoryObj } from '@storybook/react-vite';

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
} as Meta<RangeProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: args => <Range style={{ width: 100 }} {...args} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A15',
    },
  },
};
