import type { Meta } from '@storybook/react';
import * as React from 'react';

import Range from '../components/Range';

export default {
  title: 'Range',
  component: Range,
} as Meta<typeof Range>;

export const Simple = {
  render: () => <Range style={{ width: 100 }} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A15',
    },
  },
};
