import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import {
  radioChecked,
  radioCheckedDisabled,
  radioUnchecked,
  radioUncheckedDisabled,
} from './radioButtonStates';

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement>;

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
  padding: 1;
  user-select: none;

  position: absolute;
  top: 0;
  left: 18px;
`;

const Field = styled.input.attrs<RadioButtonProps>({
  type: 'radio',
})`
  margin: 0;
  opacity: 0;

  &:focus ~ ${Text}, &:active + ${Text} {
    border-width: 1;
    border-style: dotted;
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

const Label = styled.label<Pick<RadioButtonProps, 'disabled'>>`
  position: relative;
  margin-bottom: 10;
  display: block;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${th('colors.grays.3')};
      text-shadow: 0.5px 0.5px ${th('colors.grays.1')};
    `}
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  onChange,
  disabled,
  ...props
}) => (
  <Label disabled={disabled}>
    <Field disabled={disabled} {...props} />
    <Icon />
    <Text>{children}</Text>
  </Label>
);

RadioButton.defaultProps = {
  children: '',
  disabled: false,
};

export default RadioButton;
