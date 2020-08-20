import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import caret from '../shared/assets/pattern/downcaret.png';

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 20px;

  &:after {
    display: flex;
    justify-content: center;
    width: 17px;
    height: 17px;
    font-size: 14px;
    line-height: 1.1;
    content: '';
    pointer-events: none;
    position: absolute;
    right: 1px;
    top: 2px;

    background-color: bg;
    box-shadow: inset 0.5px 0.7px 0px 0.7px ${th('colors.grays.2')},
      inset -1px 0px 0 1px ${th(
        'colors.grays.3',
      )}, inset 1.5px 1.5px 0px 1.5px ${th('colors.white')};

    border-right: 1;
    border-bottom: 1;

    background-image: url('${caret}');
    background-position: center center;
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

  background-color: white;

  border-left: 1;
  border-left-color: grays.3;
  border-top: 1;
  border-top-color: grays.3;

  box-shadow: inset -1px -1px 0 0 ${th('colors.grays.2')},
    inset 1px 1px 0 0 ${th('colors.black')},
    0.5px 0.5px 0 0.5px ${th('colors.white')};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

type DropdownProps = {
  options: Array<string | number>;
} & React.HTMLAttributes<HTMLSelectElement>;

const Dropdown: React.FC<DropdownProps> = ({ options, ...rest }) => (
  <Wrapper>
    <Select {...rest}>
      {options.length &&
        options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </Select>
  </Wrapper>
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
