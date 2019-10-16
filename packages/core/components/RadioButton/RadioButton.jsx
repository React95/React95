import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  radioChecked,
  radioCheckedDisabled,
  radioUnchecked,
  radioUncheckedDisabled,
} from './radioButtonStates';

const Icon = styled.span`
  width: 12px;
  height: 12px;

  content: '';
  display: inline-block;

  position: absolute;
  left: 0;
  top: 0;

  background-image: url(${radioUnchecked});
`;

const Text = styled.span`
  padding: 1px;
  user-select: none;

  position: absolute;
  top: 0;
  left: 18px;
`;

const Field = styled.input.attrs({
  type: 'radio',
})`
  margin: 0;
  opacity: 0;

  &:focus ~ ${Text}, &:active + ${Text} {
    border: 1px dotted;
    padding: 0;
  }

  &:checked + ${Icon} {
    background-image: url(${radioChecked});
  }

  &:disabled + ${Icon} {
    background-image: url(${radioUncheckedDisabled});
  }

  &:checked:disabled + ${Icon} {
    background-image: url(${radioCheckedDisabled});
  }
`;

const Label = styled.label`
  position: relative;
  margin-bottom: 10px;
  display: block;

  ${props =>
    props.disabled &&
    `
    color: #868686;
    text-shadow: 0.5px 0.5px #d2d2d2;
  `}
`;

const RadioButton = ({ children, onChange, disabled, ...props }) => (
  <Label disabled={disabled}>
    <Field onChange={onChange} disabled={disabled} {...props} />
    <Icon />
    <Text>{children}</Text>
  </Label>
);

RadioButton.propTypes = {
  children: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  children: '',
  onChange: () => {},
  disabled: false,
};

export default RadioButton;
