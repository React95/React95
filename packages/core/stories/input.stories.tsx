import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Input, InputProps } from '../components/Input/Input';

export default {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
} as Meta<InputProps>;

export const Simple = {
  render: () => <Input />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A10',
    },
  },
};
