import { Doc, Star } from '@react95/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TitleBar } from '../components/TitleBar/TitleBar';

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

  parameters: {
    design: {
      disabled: true,
    },
  },
};

export const Inactive: Story = {
  args: { active: false },
  render: args => <TitleBar width="200px" {...args} />,
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
};
