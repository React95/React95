import React from 'react'
import { th } from '@xstyled/system';
import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  background-color: bg;
  padding: 7px 20px 5px;
  border: none;
  font-size: 12px;
  box-shadow: inset 1px 1px 0px 1px ${th('colors.white')},
    inset 0 0 0 1px ${th('colors.grays.3')}, 1px 1px 0 0px ${th('colors.black')};
  &:disabled {
    color: grays.3;
  }
  &:focus {
    outline: ${th('space.1')}px dotted ${th('colors.black')};
    outline-offset: -${th('space.5')}px;
    box-shadow: inset 1px 1px 0px 1px ${th('colors.white')},
      inset -0.5px -0.5px 0px 1px ${th('colors.grays.3')},
      1px 1px 0 1px ${th('colors.black')};
  }
  &:active {
    padding: 8 20 4;
    outline: ${th('space.1')}px dotted ${th('colors.black')};
    outline-offset: -${th('space.5')}px;
    box-shadow: inset 0 0 0 1px ${th('colors.grays.3')},
      0 0 0 1px ${th('colors.black')};
  }
`;

export interface ButtonProps {
  children: React.ReactChildren | React.ReactNode | string | number,
  variant?: string,
  fontSize?: string
}

const Button = ({ children, variant = 'default', fontSize = '12px' }: ButtonProps) => {
  return (<StyledButton variant={variant} fontSize={fontSize}>
    {children}
  </StyledButton>)
}

Button.defaultProps = {
  children: 'Ok',
  fontSize: '12px'
};

export default Button;
