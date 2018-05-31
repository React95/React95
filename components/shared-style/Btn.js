import styled from 'styled-components';

export default styled.button`
  background-color: #c3c7cb;
  padding: 5px 20px 6px;
  border: none;

  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 1px #000;

  &:disabled {
    color: #868a8e;
  }

  &:focus {
    outline: none;
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset -1px -1px 0px 1px #868a8e,
      1px 1px 0 2px #000;
  }

  &:active {
    padding: 6px 20px 5px;

    outline: 1px dotted #000;
    outline-offset: -5px;
    outline-width: 2px;

    box-shadow: inset 0 0 0 1px #868a8e, 0 0 0 1px #000;
  }
`;
