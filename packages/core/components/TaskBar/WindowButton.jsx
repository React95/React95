import React from 'react';
import PropTypes from 'prop-types';
import styled from '@xstyled/styled-components';

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
    small
      ? `
    width: 100%;
  `
      : ''}
`;

const WindowButton = ({ children, small, icon, active, ...props }) => (
  <Button
    {...(active
      ? {
          boxShadow: 'in',
          bg: 'grays.0',
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
