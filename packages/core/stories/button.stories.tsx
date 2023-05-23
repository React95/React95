import type { Meta } from '@storybook/react';
import * as React from 'react';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Simple = {
  render: () => <Button>Ok</Button>,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A3',
    },
  },
};
