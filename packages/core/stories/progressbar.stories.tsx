import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import {
  ProgressBar,
  ProgressBarProps,
} from '../components/ProgressBar/ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
} as Meta<ProgressBarProps>;

type Story = StoryObj<ProgressBarProps>;

export const Simple = {
  render: (args: Story['args']) => <ProgressBar {...args} />,
  args: {
    width: '200px',
    percent: 49,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A13',
    },
  },
};
