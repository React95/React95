import React from 'react';
import styled from 'styled-components';
import {
  radioChecked,
  radioCheckedDisabled,
  radioUnchecked,
  radioUncheckedDisabled,
} from './radioButton';

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
`;

const RadioButton = ({ children, ...props }) => (
  <Label>
    <Field {...props} />
    {children}
  </Label>
);

RadioButton.propTypes = {
  children: PropTypes.string,
};

export default RadioButton;
