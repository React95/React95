import React, { forwardRef } from 'react';
import styled, { th } from '@xstyled/styled-components';

import caret from './imgs/downcaret.png';

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 20px;

  &:after {
    display: flex;
    justify-content: center;
    width: 17px;
    height: 16px;
    font-size: 14px;
    line-height: 1.1;
    content: '';
    pointer-events: none;
    position: absolute;
    right: 1px;
    top: 2px;

    background-color: material;
    box-shadow: inset 0.5px 0.7px 0px 0.7px ${th('colors.material')},
      inset -1px 0px 0 1px ${th('colors.borderDark')},
      inset 1.5px 1.5px 0px 1.5px ${th('colors.borderLightest')};

    border-right: 1;
    border-bottom: 1;

    background-image: url('${caret}');
    background-position: 60% 60%;
    background-repeat: no-repeat;
  }
`;

const Select = styled.select`
  position: relative;
  outline: none;
  border: none;
  border-radius: 0;
  width: 100%;
  height: 20px;

  padding: 3;

  color: materialText;
  background-color: inputBackground;

  border-left: 1;
  border-left-color: borderDark;
  border-top: 1;
  border-top-color: borderDark;

  box-shadow: inset -1px -1px 0 0 ${th('colors.material')},
    inset 1px 1px 0 0 ${th('colors.borderDarkest')},
    0.5px 0.5px 0 0.5px ${th('colors.borderLightest')};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

type DropdownProps = {
  options?: Array<string | number>;
} & React.HTMLAttributes<HTMLSelectElement>;

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options, ...rest }, ref) => (
    <Wrapper>
      <Select {...rest} ref={ref}>
        {options &&
          options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </Select>
    </Wrapper>
  ),
);

Dropdown.defaultProps = {
  options: [
    '',
    'C:\\Documents and Settings',
    'C:\\Documents and Settings\\Documents',
    'iexplorer.exe',
  ],
};

export default Dropdown;
