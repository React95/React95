import React from 'react';
import PropTypes from 'prop-types';

import Frame from '../Frame';
import Icon from '../Icon';

const WindowButton = ({ children, small, icon, active, ...props }) => (
  <Frame
    style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '2px 3px',
      maxWidth: 150,
      width: small ? undefined : '100%',
    }}
    {...(active
      ? {
          boxShadow: 'in',
          bg: 'grays.0',
        }
      : {
          boxShadow: 'out',
        })}
    {...props}
    mr={2}
  >
    <Icon name={icon} style={{ marginRight: 4 }} width={20} height={20} />
    {children}
  </Frame>
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
