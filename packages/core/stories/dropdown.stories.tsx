import type { Meta } from '@storybook/react-vite';

import { Dropdown, DropdownProps } from '../components/Dropdown/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} as Meta<DropdownProps>;

export const Simple = {
  render: () => <Dropdown />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6',
    },
  },
};
