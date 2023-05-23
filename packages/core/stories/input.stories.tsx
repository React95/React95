import type { Meta } from '@storybook/react';
import * as React from 'react';

import Input from '../components/Input/Input';

export default {
  title: 'Input',
  component: Input,
} as Meta<typeof Input>;

export const Simple = {
  render: () => <Input />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A10',
    },
  },
};
