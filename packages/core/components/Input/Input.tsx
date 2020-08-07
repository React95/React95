import styled from '@xstyled/styled-components';
import {
  padding,
  PaddingProps,
  borders,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system';

export type InputProps = PaddingProps & BorderProps & ShadowProps;

const Input = styled.input<InputProps>`
  outline: none;
  border: none;
  cursor: text;

  padding: 3 3 5 3;

  border-top-width: 1;
  border-top-style: 1;
  border-top-color: grays.3;
  
  border-right-width: 0;
  border-bottom-width: 0;

  border-left-width: 1;
  border-left-style: 1;
  border-left-color: grays.3;
  
  box-shadow: 'input';

  ${padding}
  ${borders}
  ${shadow}
`;

export default Input;
