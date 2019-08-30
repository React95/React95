import styled from 'styled-components';

export default styled.button`
  background-color: #c3c7cb;
  padding: 7px 20px 5px;
  border: none;

  font-size: 12px;

  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 0px #000;

  &:disabled {
    color: #868a8e;
  }

  &:focus {
    outline: none;
    box-shadow: inset 1px 1px 0px 1px #ffffff,
      inset -0.5px -0.5px 0px 1px #868a8e, 1px 1px 0 1px #000;
    outline: 1px dotted #000;
    outline-offset: -5px;
  }

  &:active {
    padding: 8px 20px 5px;

    outline: 1px dotted #000;
    outline-offset: -5px;

    box-shadow: inset 0 0 0 1px #868a8e, 0 0 0 1px #000;
  }
`;
