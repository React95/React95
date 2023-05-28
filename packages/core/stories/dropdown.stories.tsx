import type { Meta } from '@storybook/react';
import * as React from 'react';

import Dropdown from '../components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

export const Simple = {
  render: () => <Dropdown />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6',
    },
  },
};
