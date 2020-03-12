import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const trackStyle = css`
  width: 100%;
  height: 4px;

  background: ${th('colors.black')};

  cursor: pointer;

  border-top: 1;
  border-top-color: grays.1;
  border-right: 2;
  border-right-color: ${th('colors.white')};
  border-bottom: 1;
  border-bottom-color: grays.0;
  border-left: 2;
  border-left-color: ${th('colors.white')};

  box-shadow: 0px 1px 0px 0px ${th('colors.white')};
`;

const thumbStyle = css`
  width: 12;
  height: 20;

  background-color: grays.2;

  cursor: pointer;

  margin-top: -${th('space.8')}px;

  border-top: 1;
  border-top-color: ${th('colors.white')};
  border-right: 1;
  border-right-color: ${th('colors.black')};
  border-bottom: 1;
  border-bottom-color: ${th('colors.black')};
  border-left: 1;
  border-left-color: ${th('colors.white')};

  box-shadow: inset 0px -1px 0px ${th('colors.grays.3')},
    inset -1px 0px 0px ${th('colors.grays.3')},
    inset 0px 1px 0px ${th('colors.grays.0')},
    inset 1px 0px 0px ${th('colors.grays.0')};

  -webkit-appearance: none;
`;

const Range = styled.input.attrs({
  type: 'range',
})`
  -webkit-appearance: none;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    ${trackStyle}
  }

  &::-webkit-slider-thumb {
    ${thumbStyle}
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${th('colors.black')};
  }

  &::-moz-range-track {
    ${trackStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }
`;

export default Range;
