import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';

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
  play: async ({ args, canvas, userEvent }) => {
    const target = canvas.getByText('Hover me');
    const tooltip = target.parentElement;
    const delay = args.delay!;
    const text = args.text!;

    await expect(tooltip).not.toHaveTextContent(text);

    // the tip shows only after `delay`, while the pointer stays on it
    await userEvent.hover(target);

    await expect(tooltip).not.toHaveTextContent(text);
    await waitFor(() => expect(tooltip).toHaveTextContent(text), {
      timeout: delay * 2,
    });

    // leaving hides it
    await userEvent.unhover(target);

    await expect(tooltip).not.toHaveTextContent(text);

    // and leaving before `delay` cancels it
    await userEvent.hover(target);
    await userEvent.unhover(target);
    await new Promise(resolve => setTimeout(resolve, delay * 1.5));

    await expect(tooltip).not.toHaveTextContent(text);
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19',
    },
  },
};
