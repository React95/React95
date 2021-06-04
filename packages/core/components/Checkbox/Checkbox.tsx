import React, { forwardRef } from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import check from './imgs/check.svg';
import checkDisabled from './imgs/check-disabled.svg';

const Icon = styled.span`
  width: 12px;
  height: 12px;

  content: '';
  display: inline-block;

  position: absolute;
  left: 0;

  border-left: 1;
  border-left-color: borderDark;
  border-top: 1;
  border-top-color: borderDark;

  box-shadow: inset -1px -1px 0 0 ${th('colors.material')},
    inset 1px 1px 0 0 ${th('colors.borderDarkest')},
    0.5px 0.5px 0 0.5px ${th('colors.borderLightest')};

  background-color: canvas;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 7px 7px;
`;

const Text = styled.span`
  padding: 1;
  user-select: none;
`;

const Field = styled.input.attrs({
  type: 'checkbox',
})`
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
    background-image: url('${checkDisabled}');
    background-size: 7px 7px, 1.9px 1.9px;
  }

  &:disabled + ${Icon} {
    background-color: borderLight;
  }
`;

Field.displayName = 'Field';

export type LabelProps = {
  disabled?: boolean;
};

const Label = styled.label<LabelProps>`
  display: inline-block;
  height: 15px;

  line-height: 1.5;

  position: relative;

  margin: 4 0;
  padding-left: 20;

  ${({ disabled }) =>
    disabled &&
    css`
      color: borderDark;
      text-shadow: 0.5px 0.5px ${th('colors.borderLight')};
    `}
`;

export type CheckboxProps = {
  label?: string;
  children?: string;
  checked?: boolean;
  style?: React.CSSProperties;
} & LabelProps &
  React.HTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, style, checked, label, disabled = false, ...rest }, ref) => (
    <Label style={style} disabled={disabled}>
      <Field checked={checked} disabled={disabled} {...rest} ref={ref} />
      <Icon />
      <Text>{children || label}</Text>
    </Label>
  ),
);

export default Checkbox;
