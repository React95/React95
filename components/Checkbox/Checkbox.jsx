import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import check from '../shared/assets/pattern/check.svg';
import checkDisabled from '../shared/assets/pattern/check-disabled.svg';
import bgpattern from '../shared/assets/pattern/dropdown.png';

const Icon = styled.span`
  width: 12px;
  height: 12px;

  content: '';
  display: inline-block;

  position: absolute;
  left: 0;

  border-left: 1px solid #868a8e;
  border-top: 1px solid #868a8e;

  box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
    0.5px 0.5px 0 0.5px #ffffff;

  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 7px 7px;
`;

const Text = styled.span`
  padding: 1px;
  user-select: none;
`;

const Field = styled.input`
  width: 12px;
  height: 12px;

  margin: 0;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;

  &:focus ~ ${Text}, &:active ~ ${Text} {
    border: 1px dotted;
    padding: 0;
  }

  &:checked + ${Icon} {
    background-image: url('${check}');
  }

  &:checked &:disabled + ${Icon} {
    background-image:  url('${checkDisabled}'), url('${bgpattern}');
    background-size: 7px 7px, 1.9px 1.9px;
  }

  &:disabled + ${Icon} {
    background-color: #c0c0c0;
  }
`;

Field.displayName = 'Field';

const Label = styled.label`
  display: inline-block;
  height: 15px;

  line-height: 1.5;

  position: relative;

  margin: 4px 0;
  padding-left: 20px;

  ${({ disabled }) => disabled
    && `
    color: #868686;
    text-shadow: 0.5px 0.5px #d2d2d2;
  `};
`;

const Checkbox = ({
  children,
  label,
  value,
  style,
  checked,
  disabled,
  onChange,
  ...rest
}) => (
  <Label {...style} checked={checked} disabled={disabled}>
    <Field
      type="checkbox"
      value={value}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
      {...rest}
    />
    <Icon />
    <Text>{children || label}</Text>
  </Label>
);

Checkbox.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  value: undefined,
  label: 'Checkbox',
  children: '',
  checked: null,
  disabled: null,
  onChange: () => {},
};

export default Checkbox;
