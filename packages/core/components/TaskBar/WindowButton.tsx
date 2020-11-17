import React from 'react';
import styled, { css } from '@xstyled/styled-components';

import Frame, { FrameProps } from '../Frame/Frame';
import Icon from '../Icon';
import { IWindow } from '../Modal/ModalContext';

export type WindowButtonProps = {
  small?: boolean;
  active?: boolean;
} & Pick<IWindow, 'icon'> &
  React.HTMLAttributes<HTMLButtonElement> &
  FrameProps;

const Button = styled(Frame)<Omit<WindowButtonProps, 'icon'>>`
  display: flex;
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
          outline: ${({ theme }) => theme.space[1]}px dotted ${({ theme }) => theme.colors.borderDarkest};
          outline-offset: -${({ theme }) => theme.space[4]}px;
          padding-top: 4;
          padding-right: 2;
          padding-bottom: 0;
          padding-left: 4;
        `
      : ''}
`;

const WindowButton: React.FC<WindowButtonProps> = ({
  children = '',
  small,
  icon = undefined,
  active,
  ...props
}) => (
  <Button
    active={active}
    small={small}
    {...(active
      ? {
          boxShadow: 'in',
        }
      : {
          boxShadow: 'out',
        })}
    {...props}
    as="button"
  >
    <Icon name={icon} style={{ marginRight: 4 }} width={20} height={20} />
    {children}
  </Button>
);

WindowButton.defaultProps = {
  small: false,
  icon: undefined,
  active: false,
};

export default WindowButton;
