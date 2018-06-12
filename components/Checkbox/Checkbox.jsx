import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import check from '../../assets/pattern/check.svg';

const Field = styled.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  &:checked {
    background-image: url('${check}');
  }
`;

const Label = styled.label`
  padding-left: 20px;
  height: 15px;
  display: inline-block;
  line-height: 15px;
  background-repeat: no-repeat;
  background-position: 0 0;
  font-size: 15px;
  vertical-align: middle;
  cursor: pointer;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

class Checkbox extends React.Component {
  render() {
    const { value, style, type, ...rest } = this.props;

    return <Field {...rest} className="text" type="checkbox" />;
  }
}

Checkbox.propTypes = {
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  value: '',
  children: null,
};

export default Checkbox;
