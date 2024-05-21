import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Range, RangeProps } from '../components/Range/Range';

export default {
  title: 'Range',
  component: Range,
  tags: ['autodocs'],
} as Meta<RangeProps>;

export const Simple = {
  render: () => <Range style={{ width: 100 }} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A15',
    },
  },
};
