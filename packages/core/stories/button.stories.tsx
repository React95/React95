import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Button from '../components/Button';

export default {
  title: 'Button',
  Component: Button,
} as Meta;

export const Simple = () => <Button>Ok</Button>;
