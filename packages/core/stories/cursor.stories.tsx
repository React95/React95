import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Frame } from '../components';
import { Cursor } from '../components/Cursor/Cursor.css';

export default {
  title: 'Cursor',
} as Meta<typeof Cursor>;

export const Simple = {
  render: () => (
    <Frame
      as="ul"
      margin="0"
      padding="0"
      width="600px"
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
      gap="10px"
    >
      {Object.entries(Cursor).map(([type, className]) => (
        <Frame
          className={className}
          key={type}
          display="flex"
          as="li"
          justifyContent="center"
          alignItems="center"
          w="100px"
          h="50px"
          backgroundColor="$material"
          color="$materialText"
          py="$6"
          px="$20"
          boxShadow="$out"
        >
          {type}
        </Frame>
      ))}
    </Frame>
  ),

  parameters: {
    design: { disable: true },
  },
};
