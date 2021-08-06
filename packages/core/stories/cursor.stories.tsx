import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Cursor from '../components/Cursor/Cursor';
import { Frame } from '../components';

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
} as Meta;

export const Simple = () => (
  <Cursors>
    {Object.keys(Cursor).map((type: keyof typeof Cursor) => (
      <CursorItem
        display="flex"
        as="li"
        justifyContent="center"
        alignItems="center"
        width={100}
        height={50}
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
);

Simple.parameters = {
  design: { disabled: true },
};
