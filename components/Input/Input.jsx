import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Field = styled.input`
  outline: none;
  border: none;

  padding: 3px 3px 5px 3px;

  border-left: 1px solid #868a8e;
  border-top: 1px solid #868a8e;

  box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
    0.5px 0.5px 0 0.5px #ffffff;
`;

class Input extends React.Component {
  render() {
    const { value, style, type, ...rest } = this.props;

    return <Field {...rest} className="text" type={type} />;
  }
}

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
};

Input.defaultProps = {
  value: '',
  type: 'text',
  children: null,
};

export default Input;
