import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import check from '../../assets/pattern/check.svg';

const Field = styled.input`
  display: none;
`;

const Label = styled.label`
  position: relative;
  padding-left: 26px;
  height: 15px;
  display: inline-block;
  line-height: 15px;
  background-repeat: no-repeat;
  background-position: 0 0;
  font-size: 15px;
  vertical-align: middle;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 15px;
    width: 15px;

    border-left: 1px solid #868a8e;
    border-top: 1px solid #868a8e;

    box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
      0.5px 0.5px 0 0.5px #ffffff;
    background-color: white;
  }

  ${({ checked }) =>
    checked &&
    `
  &:before {
    background-image: url('${check}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 10px 10px;
  }`};
`;

class Checkbox extends React.Component {
  render() {
    const { value, style, label, checked } = this.props;

    return (
      <Label {...style} checked={checked}>
        <Field type="checkbox" value={value} />
        {label}
      </Label>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  value: 'checked',
  label: 'Checkbox',
  checked: false,
};

export default Checkbox;
