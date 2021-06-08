import React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import Frame, { FrameProps } from '../Frame/Frame';
import { Windows } from '../Modal/ModalContext';
import { Bat } from '@react95/icons';

export type WindowButtonProps = {
  small?: boolean;
  active?: boolean;
} & Pick<Windows, 'icon'> &
  React.HTMLAttributes<HTMLButtonElement> &
  FrameProps;

type ButtonFrameProps = Omit<WindowButtonProps, 'icon'>;

const Button = styled(Frame)<ButtonFrameProps>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2 3;
  margin-right: 2;
  max-width: 150px;
  border: none;
  outline: none;

  ${({ small }) =>
    !small
      ? `
    width: 100%;
  `
      : ''}

  ${({ active, small }) =>
    active && small
      ? css`
          outline: ${th('space.1')}px dotted ${th('colors.borderDarkest')};
          outline-offset: -${th('space.4')}px;
          padding-top: 4;
          padding-right: 2;
          padding-bottom: 0;
          padding-left: 4;
        `
      : ''}
`;

const IconWrapper = styled.div`
  img {
    margin-right: 4;
    min-width: 20;
    width: 20;
    height: 20;
  }
`;

const WindowButton: React.FC<WindowButtonProps> = ({
  children = '',
  small,
  icon,
  active,
  ...props
}) => (
  <Button
    active={active}
    small={small}
    {...(active
      ? {
          boxShadow: 'in',
          bg: small ? undefined : 'borderLighter',
        }
      : {
          boxShadow: 'out',
        })}
    {...props}
    as="button"
  >
    <IconWrapper>{icon}</IconWrapper>
    {children}
  </Button>
);

WindowButton.defaultProps = {
  small: false,
  icon: <Bat variant="32x32_4" />,
  active: false,
};

export default WindowButton;
