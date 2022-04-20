import styled, { css, th } from '@xstyled/styled-components';

const trackStyle = css`
  width: 100%;
  height: 4px;

  background-color: borderDarkest;

  cursor: pointer;

  border-top: 1;
  border-top-color: borderLight;
  border-right: 2;
  border-right-color: borderLightest;
  border-bottom: 1;
  border-bottom-color: borderLighter;
  border-left: 2;
  border-left-color: borderLightest;

  box-shadow: 0px 1px 0px 0px ${th('colors.borderLightest')};
`;

const thumbStyle = css`
  width: 12px;
  height: 20px;

  background-color: material;

  cursor: pointer;

  margin-top: -8;

  border-top: 1;
  border-top-color: borderLightest;
  border-right: 1;
  border-right-color: borderDarkest;
  border-bottom: 1;
  border-bottom-color: borderDarkest;
  border-left: 1;
  border-left-color: borderLightest;

  box-shadow: inset 0px -1px 0px ${th('colors.borderDark')},
    inset -1px 0px 0px ${th('colors.borderDark')},
    inset 0px 1px 0px ${th('colors.borderLighter')},
    inset 1px 0px 0px ${th('colors.borderLighter')};

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
    background-color: borderDarkest;
  }

  &::-moz-range-track {
    ${trackStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }
`;

export default Range;
