import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Input from '../components/Input/Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

export const Simple = () => <Input />;

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A10',
  },
};
