import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const trackStyle = css`
  width: 100%;
  height: 4px;

  background: #000;

  cursor: pointer;

  border-top: 1px solid #ccc;
  border-bottom: 1px solid #eee;
  border-right: 2px solid #fff;
  border-left: 2px solid #fff;
  
  box-shadow: 0px 1px 0px 0px #fff;
`;

const thumbStyle = css`
  width: 12px;
  height: 20px;

  background: #c3c7cb;

  cursor: pointer;

  margin-top: -8px;

  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;

  box-shadow: inset 0px -1px 0px #aaa, inset -1px 0px 0px #aaa, inset 0px 1px 0px #dedede, inset 1px 0px 0px #dedede;

  -webkit-appearance: none;
`;

const Range = styled.input.attrs({
  type: 'range',
})`
  -webkit-appearance: none;
  width: 100%;

  &:hover, &:focus, &:active {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    ${trackStyle}
  }

  &::-webkit-slider-thumb {
    ${thumbStyle}
  }

  &:focus::-webkit-slider-runnable-track {
    background: #000;
  }

  &::-moz-range-track {
    width: 100%;
    height: 4px;

    background: #000;

    cursor: pointer;

    border-top: 1px solid #ccc;
    border-bottom: 1px solid #eee;
    border-right: 2px solid #fff;
    border-left: 2px solid #fff;

    box-shadow: 0px 1px 0px 0px #fff;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 20px;

    background: #c3c7cb;

    cursor: pointer;

    margin-top: -7px;

    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;

    box-shadow: inset 0px -1px 0px #aaa, inset -1px 0px 0px #aaa, inset 0px 1px 0px #dedede, inset 1px 0px 0px #dedede;
  
    -webkit-appearance: none;
  }
`;

export default Range;
