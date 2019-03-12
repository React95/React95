import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  radioChecked,
  radioCheckedDisabled,
  radioUnchecked,
  radioUncheckedDisabled,
} from './radioButtonStates';

const Field = styled.input.attrs({
  type: 'radio',
})`
  margin: 0 5px 0 0;
  visibility: hidden;

  &:before {
    width: 12px;
    height: 12px;

    content: '';
    display: inline-block;

    background-image: url(${radioUnchecked});

    visibility: visible;
  }

  &:checked {
    &:before {
      background-image: url(${radioChecked});
    }
  }

  &:disabled {
    &:before {
      background-image: url(${radioUncheckedDisabled});
    }

    &:checked {
      &:before {
        background-image: url(${radioCheckedDisabled});
      }
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;

  margin-bottom: 10px;

  ${props => props.disabled
    && `
    color: #868686;
    text-shadow: 0.5px 0.5px #d2d2d2;
  `}
`;

const RadioButton = ({
  children, onChange, disabled, ...props
}) => (
  <Label disabled={disabled}>
    <Field onChange={onChange} disabled={disabled} {...props} />
    {children}
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
