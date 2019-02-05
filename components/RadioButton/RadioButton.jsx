import React from 'react';
import styled from 'styled-components';

const RadioButton = styled.input.attrs({
  type: 'radio'
})`
  position: relative;
  visibility: hidden;

  &:checked {
    &:after {
      width: 6px;
      height: 6px;

      position: absolute;
      top: 3px;
      left: 3px;

      content: '';
      display: inline-block;

      background-color: #000;
      border-radius: 50%;
      visibility: visible;
    }
  }

  &:before {
    width: 12px;
    height: 12px;

    position: absolute;

    content: '';
    display: inline-block;

    background-color: #fff;
    border-radius: 50%;
    visibility: visible;
  }
`;

export default RadioButton;
