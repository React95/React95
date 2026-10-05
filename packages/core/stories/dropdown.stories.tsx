import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

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
  args: {
    name: 'path',
  },
  play: async ({ args, canvas, userEvent }) => {
    const dropdown = canvas.getByRole('combobox');
    const options = args.options!.map(String);

    // one option per value, in order
    await expect(
      canvas.getAllByRole('option').map(option => option.textContent),
    ).toEqual(options);

    // the other props reach the select
    await expect(dropdown).toHaveAttribute('name', args.name);
    await expect(dropdown).toBeEnabled();

    await userEvent.selectOptions(dropdown, options[2]);

    await expect(dropdown).toHaveValue(options[2]);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6',
    },
  },
};
