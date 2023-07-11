import type { Meta } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import { Frame } from '../components';
import Cursor from '../components/Cursor/Cursor';

const Cursors = styled.ul`
  margin: 0;
  padding: 0;
  width: 600px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  list-style: none;
`;

const CursorItem = styled(Frame)<{ type: keyof typeof Cursor }>`
  ${({ type }) => Cursor[type]};
`;

export default {
  title: 'Cursors',
  component: Cursors,
} as Meta<typeof Cursor>;

export const Simple = {
  render: () => (
    <Cursors>
      {Object.keys(Cursor).map((type: keyof typeof Cursor) => (
        <CursorItem
          display="flex"
          as="li"
          justifyContent="center"
          alignItems="center"
          w={100}
          h={50}
          backgroundColor="material"
          color="materialText"
          pt={6}
          pr={20}
          pb={6}
          pl={20}
          key={type}
          type={type}
        >
          {type}
        </CursorItem>
      ))}
    </Cursors>
  ),

  parameters: {
    design: { disable: true },
  },
};
