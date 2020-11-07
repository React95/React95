import * as React from 'react';
import styled from '@xstyled/styled-components';
import {
  padding,
  PaddingProps,
  borders,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system';

export type InputProps = PaddingProps &
  BorderProps &
  ShadowProps &
  React.HTMLAttributes<HTMLInputElement>;

const Input = styled.input<InputProps>`
  outline: none;
  border: none;
  cursor: text;
  padding: 4px 4px 5px 4px;
  box-shadow: inset 1px 1px 0px 0px ${({ theme }) => theme.colors.borderDark},
    inset 1px 1px 0px 1px ${({ theme }) => theme.colors.borderDarkest},
    inset 0 0 0 1px ${({ theme }) => theme.colors.borderLight}, 
    1px 1px 0 0px ${({ theme }) => theme.colors.borderLightest};
  ${padding}
  ${borders}
  ${shadow}
`;

export default Input;
