import * as React from 'react';
import styled from '@xstyled/styled-components';
import {
  padding,
  PaddingProps,
  borders,
  BorderProps,
  ShadowProps,
} from 'styled-system';
import border from '../shared-style/Border';

export type InputProps = PaddingProps &
  BorderProps &
  ShadowProps &
  React.HTMLAttributes<HTMLInputElement>;

const Input = styled.input<InputProps>`
  outline: none;
  border: none;
  cursor: text;
  padding: 4px 4px 5px 4px;
  ${border({ useBoxShadow: true, direction: 'intrude' })}
  ${padding}
  ${borders}
`;

export default Input;
