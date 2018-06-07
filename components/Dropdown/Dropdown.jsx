import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 200px;

  &:after {
    display: flex;
    justify-content: center;
    width: 24px;
    font-size: 14px;
    line-height: 1.1;
    height: 83%;
    content: '⏷';
    position: absolute;
    right: 1px;
    top: 2px;

    background-color: #c3c7cb;
    box-shadow: inset 0.8px 0.7px 0px 0.7px #c3c7cb,
      inset -1px 0px 0 1px #868a8e, inset 1.2px 1.2px 0px 1.5px #ffffff;

    border-right: 1px solid black;
    border-bottom: 2px solid black;
  }
`;

const Select = styled.select`
  position: relative;
  outline: none;
  border: none;
  width: 100%;

  padding: 3px 3px 5px 3px;

  border-left: 1px solid #868a8e;
  border-top: 1px solid #868a8e;

  box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
    0.5px 0.5px 0 0.5px #ffffff;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

class Dropdown extends React.Component {
  render() {
    const { options } = this.props;

    return (
      <Wrapper>
        <Select>
          {options.length &&
            options.map(option => <option value={option}>{option}</option>)}
        </Select>
      </Wrapper>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
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
