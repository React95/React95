import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';

import { Tooltip, TooltipProps } from '../components/Tooltip/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The wrapper is focusable by default (`tabIndex={0}`), so the tip shows on keyboard focus too. When the Tooltip wraps a focusable child (a Button, say), that adds a second tab stop — pass `tabIndex={-1}` to turn the extra stop off; the child alone still triggers the tip, since focus bubbles.',
      },
    },
  },
  argTypes: {
    delay: {
      control: { type: 'number', step: 100 },
    },
  },
} satisfies Meta<TooltipProps>;

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
    const tooltip = target.parentElement as HTMLElement;
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

    // focusing the target shows the tip too, after the same `delay`
    tooltip.focus();

    await expect(tooltip).not.toHaveTextContent(text);
    await waitFor(
      () => expect(canvas.getByRole('tooltip')).toHaveTextContent(text),
      { timeout: delay * 2 },
    );

    // the tip has its role, and the target points to it
    const tip = canvas.getByRole('tooltip');
    await expect(tooltip).toHaveAttribute('aria-describedby', tip.id);

    // Esc hides it
    await userEvent.keyboard('{Escape}');

    await expect(tooltip).not.toHaveTextContent(text);

    // blurring hides it too
    tooltip.blur(); // Esc left the focus on the target
    tooltip.focus();
    await waitFor(
      () => expect(canvas.getByRole('tooltip')).toHaveTextContent(text),
      { timeout: delay * 2 },
    );
    tooltip.blur();

    // blur hides the tip on the next render, so wait for it to go away
    await waitFor(() => expect(tooltip).not.toHaveTextContent(text));
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19',
    },
  },
};
