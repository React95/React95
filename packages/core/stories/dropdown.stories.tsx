import type { Meta } from '@storybook/react';
import * as React from 'react';

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
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6',
    },
  },
};
