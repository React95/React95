import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import caret from '../../assets/pattern/downcaret.png';

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

    background-color: #c3c7cb;
    box-shadow: inset 0.5px 0.7px 0px 0.7px #c3c7cb,
      inset -1px 0px 0 1px #868a8e, inset 1.5px 1.5px 0px 1.5px #ffffff;

    border-right: 1px solid black;
    border-bottom: 1px solid black;

    background-image: url('${caret}');
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

const Select = styled.select`
  position: relative;
  outline: none;
  border: none;
  width: 100%;
  height: 20px;

  padding: 3px 3px 5px 3px;

  background-color: #fff;

  border-left: 1px solid #868a8e;
  border-top: 1px solid #868a8e;

  box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
    0.5px 0.5px 0 0.5px #ffffff;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Dropdown = ({ options, ...rest }) => (
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

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

Dropdown.defaultProps = {
  options: [
    '',
    'C:\\Documents and Settings',
    'C:\\Documents and Settings\\Documents',
    'iexplorer.exe',
  ],
};

export default Dropdown;
