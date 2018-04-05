import React from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Pixelade';
    src: url('/fonts/Pixelade.woff2') format('woff2'),
        url('/fonts/Pixelade.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: 'Pixelade';
  }
`

const Button = styled.button`
  background-color: #c3c7cb;
  padding: 6px 20px 5px;
  border: none;
  font-size: 20px;

  box-shadow:  inset 1px 1px 0px 1px #ffffff,
               inset -1px -1px 0px 1px #868a8e;

  &:disabled {
    color: #868a8e;
  }

  &:focus {
    outline: none;
    box-shadow: inset 1px 1px 0px 1px #ffffff,
                inset -1px -1px 0px 1px #868a8e,
                1px 1px 0 2px #000;
  }
`;

export default Button;
