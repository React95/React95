import type { Meta } from '@storybook/react';
import * as React from 'react';

import ProgressBar from '../components/ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

export const Simple = {
  render: () => <ProgressBar width={200} percent={49} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A13',
    },
  },
};
