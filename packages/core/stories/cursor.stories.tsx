import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

const types = [
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

const CursorList = styled.ul`
  margin: 0;
  padding: 0;
  width: 600px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;

  list-style: none;
`;

const Cursor = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: #c3c7cb;
  padding: 5px 20px 6px;
  border: none;

  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 1px #000;
`;

export default {
  title: 'Cursor',
  component: Cursor,
} as Meta;

export const Simple = () => (
  <CursorList>
    {types.map(type => (
      <Cursor className={type} key={type}>
        {type}
      </Cursor>
    ))}
  </CursorList>
);

Simple.parameters = {
  design: { disabled: true },
};
