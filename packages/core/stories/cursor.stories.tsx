import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Cursor, { ICursor } from './../components/shared-style/Cursor';
import border from '../components/shared-style/Border';

const types: ICursor[] = [
  'auto',
  'default',
  'none',
  'context-menu',
  'help',
  'pointer',
  'progress',
  'wait',
  'crosshair',
  'text',
  'vertical-text',
  'alias',
  'copy',
  'move',
  'no-drop',
  'not-allowed',
  'grab',
  'grabbing',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'ns-resize',
  'ew-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'nesw-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out',
];

const Cursors = styled.ul`
  margin: 0;
  padding: 0;
  width: 600px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  list-style: none;
`;

interface ICursorListItem {
  cursor: ICursor;
}
const CursorListItem = styled.li<ICursorListItem>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.material};
  color: ${({ theme }) => theme.colors.materialText};
  padding: 5px 20px 6px;
  ${border()}
  ${({ cursor }) => Cursor(cursor)}
`;

export default {
  title: 'Cursors',
  component: Cursors,
} as Meta;

export const Simple = () => (
  <Cursors>
    {types.map(type => (
      <CursorListItem cursor={type} key={type}>
        {type}
      </CursorListItem>
    ))}
  </Cursors>
);

Simple.parameters = {
  design: { disabled: true },
};
