import React from 'react';
import styled from '@xstyled/styled-components';

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

    background-color: ${({theme}) => theme.colors.material};
    box-shadow: inset 0.5px 0.7px 0px 0.7px ${({ theme }) => theme.colors.borderLight},
      inset -1px 0px 0 1px ${({ theme }) => theme.colors.borderLight}, inset 1.5px 1.5px 0px 1.5px ${({ theme }) => theme.colors.borderLightest};

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
  border-left-color: ${({ theme }) => theme.colors.borderDarkest};
  border-top: 1;
  border-top-color: ${({ theme }) => theme.colors.borderDarkest};

  box-shadow: inset -1px -1px 0 0 ${({ theme }) => theme.colors.borderLight},
    inset 1px 1px 0 0 ${({ theme }) => theme.colors.borderDarkest},
    0.5px 0.5px 0 0.5px ${({ theme }) => theme.colors.borderLightest};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

type DropdownProps = {
  options?: Array<string | number>;
} & React.HTMLAttributes<HTMLSelectElement>;

const Dropdown: React.FC<DropdownProps> = ({ options, ...rest }) => (
  <Wrapper>
    <Select {...rest}>
      {options &&
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
