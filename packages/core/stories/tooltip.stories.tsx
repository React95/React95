import type { Meta } from '@storybook/react';
import * as React from 'react';

import Tooltip from '../components/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} as Meta<typeof Tooltip>;

export const Simple = {
  render: () => (
    <>
      <br />
      <br />
      <br />
      <Tooltip>
        <span>Hover me</span>
      </Tooltip>
    </>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19',
    },
  },
};
