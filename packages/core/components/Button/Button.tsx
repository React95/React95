import React from 'react';
import styled from 'styled-components';
import { border } from './../shared-style/Border';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.material};
  color: ${({ theme }) => theme.colors.materialText};
  padding: 7px 20px 5px;
  min-width: 70px;
  font-size: 12px;
  ${border()};
  :disabled {
    color: ${({ theme }) => theme.colors.canvasTextDisabled};
    text-shadow: 1px 1px white;
  }
  :focus {
    outline: 1px dotted ${({ theme }) => theme.colors.borderDarkest};
    outline-offset: -5px;
  }
  :not(:disabled):active {
    outline: 1px dotted ${({ theme }) => theme.colors.borderDarkest};
    outline-offset: -5px;
    ${border({ direction: 'intrude' })};
  }
  :not(:last-child) {
    margin-right: 6px;
  }
`;

export interface ButtonProps {
  children: React.ReactChildren | React.ReactNode | string | number;
  variant?: string;
  fontSize?: string;
}

const Button = ({
  children,
  variant = 'default',
  fontSize = '12px',
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton variant={variant} fontSize={fontSize} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: 'Ok',
  fontSize: '12px',
};

export default Button;
