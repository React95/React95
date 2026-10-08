import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import {
  ProgressBar,
  ProgressBarProps,
} from '../components/ProgressBar/ProgressBar';

// `as`, not `satisfies`: the polymorphic props make the type too complex
// for TypeScript (TS2590)
export default {
  title: 'ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
} as Meta<ProgressBarProps<'div'>>;

type Story = StoryObj<ProgressBarProps<'div'>>;

export const Simple: Story = {
  render: args => <ProgressBar {...args} />,
  args: {
    width: '200px',
    percent: 49,
  },
  play: async ({ args, canvas }) => {
    const percent = args.percent ?? 0;

    // the label is drawn twice: over the empty bar and over the blue part
    const [emptyLabel, filledLabel] = canvas.getAllByText(`${percent}%`);
    const bar = emptyLabel.parentElement!.getBoundingClientRect();
    // the blue part is clipped by its container, so the blue ends at the
    // container's right edge
    const filled = filledLabel.parentElement!.getBoundingClientRect();

    await expect(getComputedStyle(filledLabel).backgroundColor).not.toBe(
      'rgba(0, 0, 0, 0)',
    );
    await expect((filled.right - bar.left) / bar.width).toBeCloseTo(
      percent / 100,
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A13',
    },
  },
};
