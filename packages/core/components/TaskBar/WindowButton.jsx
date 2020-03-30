import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import Frame from '../Frame';
import Icon from '../Icon';

const Button = styled(Frame)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2 3;
  margin-right: 2;
  max-width: 150px;

  ${({ small }) =>
    !small
      ? `
    width: 100%;
  `
      : ''}

  ${({ active, small }) =>
    active && small
      ? css`
          outline: ${th('space.1')}px dotted ${th('colors.black')};
          outline-offset: -${th('space.4')}px;
          padding-top: 4;
          padding-right: 2;
          padding-bottom: 0;
          padding-left: 4;
        `
      : ''}
`;

const WindowButton = ({ children, small, icon, active, ...props }) => (
  <Button
    active={active}
    small={small}
    {...(active
      ? {
          boxShadow: 'in',
          bg: small ? undefined : 'grays.0',
        }
      : {
          boxShadow: 'out',
        })}
    {...props}
  >
    <Icon name={icon} style={{ marginRight: 4 }} width={20} height={20} />
    {children}
  </Button>
);

WindowButton.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
  icon: PropTypes.string,
  active: PropTypes.bool,
};

WindowButton.defaultProps = {
  children: '',
  small: false,
  icon: '',
  active: false,
};

export default WindowButton;
