import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const trackStyle = css`
  width: 100%;
  height: 4px;

  background: ${th('colors.borderDarkest')};

  cursor: pointer;

  border-top: 1;
  border-top-color: borderLight;
  border-right: 2;
  border-right-color: ${th('colors.borderLightest')};
  border-bottom: 1;
  border-bottom-color: borderLighter;
  border-left: 2;
  border-left-color: ${th('colors.borderLightest')};

  box-shadow: 0px 1px 0px 0px ${th('colors.borderLightest')};
`;

const thumbStyle = css`
  width: 12px;
  height: 20px;

  background-color: material;

  cursor: pointer;

  margin-top: -${th('space.8')}px;

  border-top: 1;
  border-top-color: ${th('colors.borderLightest')};
  border-right: 1;
  border-right-color: ${th('colors.borderDarkest')};
  border-bottom: 1;
  border-bottom-color: ${th('colors.borderDarkest')};
  border-left: 1;
  border-left-color: ${th('colors.borderLightest')};

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
    background: ${th('colors.borderDarkest')};
  }

  &::-moz-range-track {
    ${trackStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }
`;

export default Range;
