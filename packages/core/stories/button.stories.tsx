import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Simple = () => <Button>Ok</Button>;
export const Disabled = () => <Button disabled>Ok</Button>;
