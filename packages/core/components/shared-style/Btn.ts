import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

export default styled.button`
  background-color: bg;
  padding: 7 20 5;
  border: 1px solid red;

  font-size: 12px;

  box-shadow: inset 1px 1px 0px 1px ${th('colors.white')},
    inset 0 0 0 1px ${th('colors.grays.3')}, 1px 1px 0 0px ${th('colors.black')};

  &:disabled {
    color: grays.3;
  }

  &:focus {
    outline: ${th('space.1')}px dotted ${th('colors.black')};
    outline-offset: -${th('space.5')}px;

    box-shadow: inset 1px 1px 0px 1px ${th('colors.white')},
      inset -0.5px -0.5px 0px 1px ${th('colors.grays.3')},
      1px 1px 0 1px ${th('colors.black')};
  }

  &:active {
    padding: 8 20 4;

    outline: ${th('space.1')}px dotted ${th('colors.black')};
    outline-offset: -${th('space.5')}px;

    box-shadow: inset 0 0 0 1px ${th('colors.grays.3')},
      0 0 0 1px ${th('colors.black')};
  }
`;
