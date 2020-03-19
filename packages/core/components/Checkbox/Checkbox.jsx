import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

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

  border-left: 1;
  border-left-color: grays.3;
  border-top: 1;
  border-top-color: grays.3;

  box-shadow: inset -1px -1px 0 0 ${th('colors.grays.2')},
    inset 1px 1px 0 0 ${th('colors.black')},
    0.5px 0.5px 0 0.5px ${th('colors.white')};

  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 7px 7px;
`;

const Text = styled.span`
  padding: 1;
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
    border-width: 1;
    border-style: dotted;
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
    background-color: grays.1;
  }
`;

Field.displayName = 'Field';

const Label = styled.label`
  display: inline-block;
  height: 15px;

  line-height: 1.5;

  position: relative;

  margin: 4 0;
  padding-left: 20;

  ${({ disabled }) =>
    disabled &&
    css`
      color: grays.3;
      text-shadow: 0.5px 0.5px ${th('colors.grays.1')};
    `}
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
  <Label style={style} checked={checked} disabled={disabled}>
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
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Checkbox.defaultProps = {
  value: undefined,
  label: 'Checkbox',
  children: '',
  checked: null,
  disabled: null,
  onChange: () => {},
  style: undefined,
};

export default Checkbox;
