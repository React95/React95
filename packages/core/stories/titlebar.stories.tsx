import { Doc, Star } from '@react95/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { TitleBar } from '../components/TitleBar/TitleBar';
import { contract } from '../components/themes/contract.css';
import { themeColor } from '../.storybook/theme-color';

// `as`, not `satisfies`: the polymorphic props make the type too complex
// for TypeScript (TS2590)
const meta = {
  title: 'TitleBar',
  component: TitleBar,
  tags: ['autodocs'],
  args: {
    active: true,
    title: 'UNKNOWN.EXE',
  },
  argTypes: {
    // inferred as `any`, as TitleBar is polymorphic
    title: { control: 'text' },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: args => <TitleBar width="200px" {...args} />,
  play: async ({ args, canvas }) => {
    const titleBar = canvas.getByText(args.title).parentElement;

    // an active title bar uses the theme's header colors
    await expect(titleBar).toHaveStyle({
      backgroundColor: themeColor(contract.colors.headerBackground),
      color: themeColor(contract.colors.headerText),
    });
  },

  parameters: {
    design: {
      disabled: true,
    },
  },
};

export const Inactive: Story = {
  args: { active: false },
  render: args => <TitleBar width="200px" {...args} />,
  play: async ({ args, canvas }) => {
    const titleBar = canvas.getByText(args.title).parentElement;

    // an inactive one, the theme's colors for a header out of focus
    await expect(titleBar).toHaveStyle({
      backgroundColor: themeColor(contract.colors.headerNotActiveBackground),
      color: themeColor(contract.colors.headerNotActiveText),
    });
  },
};

export const Complete: Story = {
  args: { title: 'untitled - Paint' },
  render: args => (
    <TitleBar {...args} icon={<Doc variant="16x16_4" />} width="300px">
      <TitleBar.OptionsBox>
        <TitleBar.Option as="a" href="https://github.com/React95/React95">
          <Star variant="16x16_4" />
        </TitleBar.Option>
        <TitleBar.Help />
        <TitleBar.Maximize />
        <TitleBar.Minimize />
        <TitleBar.Restore />
        <TitleBar.Close />
      </TitleBar.OptionsBox>
    </TitleBar>
  ),
  play: async ({ args, canvas }) => {
    const titleBar = canvas.getByText(args.title).parentElement!;

    // the icon is shown next to the title (the options have icons too, so
    // only the bar's own children count)
    await expect(titleBar.querySelector(':scope > svg')).toBeInTheDocument();

    // the ready-made options are buttons named after what they do
    for (const option of ['help', 'maximize', 'minimize', 'restore', 'close']) {
      await expect(
        within(titleBar).getByRole('button', { name: option }),
      ).toBeEnabled();
    }

    // an option can also be a link (`as="a"`)
    await expect(within(titleBar).getByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/React95/React95',
    );
  },
};
