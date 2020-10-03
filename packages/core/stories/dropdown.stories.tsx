import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Dropdown from '../components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

export const Simple = () => <Dropdown />;
