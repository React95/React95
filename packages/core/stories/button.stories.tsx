import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Button, ButtonProps } from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<ButtonProps>;

export const Simple = {
  render: () => {
    return <Button>Ok</Button>;
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A3',
    },
  },
};
