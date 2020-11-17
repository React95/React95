import React from 'react';
import styled from '@xstyled/styled-components';
import border, { scrollBarBorder } from '../shared-style/Border';
import { createTriangleSVG } from './../shared-style/Scrollbar';

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 23px;

  &:after {
    ${scrollBarBorder({ useBoxShadow: true })}
    content: '';
    display: flex;
    justify-content: center;
    width: 17px;
    height: 17px;
    font-size: 14px;
    line-height: 1.1;
    pointer-events: none;
    position: absolute;
    right: 1px;
    top: 2px;
    background-color: ${({ theme }) => theme.colors.material};
    border-right: 1;
    border-bottom: 1;
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.colors.materialText, 0)};
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: 0 0;
  }
`;

const Select = styled.select`
  position: relative;
  outline: none;
  border: none;
  border-radius: 0;
  width: 100%;
  height: 23px;
  padding: 3;
  background-color: ${({ theme }) => theme.colors.canvas};
  color: ${({ theme }) => theme.colors.canvasText};
  -webkit-appearance: none;
  -moz-appearance: none;
  ${border({ useBoxShadow: true, direction: 'intrude' })}
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
