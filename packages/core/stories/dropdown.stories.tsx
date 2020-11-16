import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import Dropdown from '../components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  decorators: [withDesign],
} as Meta;

export const Simple = () => <Dropdown />;

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6',
  },
};
