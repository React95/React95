import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Tooltip, TooltipProps } from '../components/Tooltip/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    delay: {
      control: { type: 'number', step: 100 },
    },
  },
} as Meta<TooltipProps>;

type Story = StoryObj<TooltipProps>;

function formatDate(date: Date): string {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day.toString().padStart(2, '0')} ${monthNames[monthIndex]} ${year}`;
}

export const Simple: Story = {
  render: args => (
    <>
      <br />
      <br />
      <br />
      <Tooltip {...args}>
        <span>Hover me</span>
      </Tooltip>
    </>
  ),

  args: {
    delay: 1000,
    text: formatDate(new Date()),
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19',
    },
  },
};
