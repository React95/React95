import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import ProgressBar from '../components/ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as Meta;

export const Simple = () => <ProgressBar width={200} percent={49} />;
