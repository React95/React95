import React from 'react';
import PropTypes from 'prop-types';

import Btn from '../shared-style/Btn';

const Button = ({ children, value, onClick, ...rest }) => (
  <Btn value={value || children} onClick={onClick} {...rest}>
    {children || value}
  </Btn>
);

Button.propTypes = {
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: 'Ok',
  children: null,
  onClick: () => {},
};

export default Button;
