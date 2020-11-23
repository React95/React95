import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Range from '../components/Range';

export default {
  title: 'Range',
  component: Range,
} as Meta;

export const Simple = () => <Range style={{ width: 100 }} />;

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A15',
  },
};
