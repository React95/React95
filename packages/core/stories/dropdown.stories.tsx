import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dropdown, DropdownProps } from '../components/Dropdown/Dropdown';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    options: [
      '',
      'C:\\Documents and Settings',
      'C:\\Documents and Settings\\Documents',
      'iexplorer.exe',
    ],
    disabled: false,
  },
} as Meta<DropdownProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6',
    },
  },
};
