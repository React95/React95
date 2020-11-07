import styled, { css } from '@xstyled/styled-components';
import border, { createBorder } from '../shared-style/Border'

const trackStyle = css`
  width: 100%;
  height: 4px;

  background: ${({ theme }) => theme.colors.borderDarkest};

  cursor: pointer;
  
  ${border({ direction: 'intrude'})}
`;

const thumbStyle = css`
  width: 12px;
  height: 20px;
  background-color: ${({theme}) => theme.colors.material};
  cursor: pointer;
  margin-top: -8px;
  ${border()}
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
    background: ${({ theme }) => theme.colors.borderDarkest};
  }

  &::-moz-range-track {
    ${trackStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }
`;

export default Range;
