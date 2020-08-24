import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Range from '../components/Range';

export default {
  title: 'Range',
  component: Range,
} as Meta;

export const Simple = () => <Range style={{ width: 100 }} />;
