import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Tooltip from '../components/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as Meta;

export const Simple = () => (
  <>
    <br />
    <br />
    <br />
    <Tooltip>
      <span>Hover me</span>
    </Tooltip>
  </>
);
