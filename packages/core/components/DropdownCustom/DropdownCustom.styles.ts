import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { DropdownCustomProps } from './DropdownCustom';

import caret from './imgs/downcaret.png';

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 20px;
`;

export const Select = styled.div`
  position: relative;
  outline: none;
  border: none;
  border-radius: 0;
  width: 100%;
  height: 20px;

  padding: 3;

  color: materialText;
  background-color: inputBackground;

  border-left: 1;
  border-left-color: borderDark;
  border-top: 1;
  border-top-color: borderDark;

  box-shadow: inset -1px -1px 0 0 ${th('colors.material')},
    inset 1px 1px 0 0 ${th('colors.borderDarkest')},
    0.5px 0.5px 0 0.5px ${th('colors.borderLightest')};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  user-select: none;
`;

export const Options = styled.div<{
  isOpen: boolean;
  maxHeight: DropdownCustomProps['maxHeight'];
}>`
  display: ${({ isOpen }) => !isOpen && 'none'};
  position: absolute;
  top: calc(100% + 1px);
  left: -1px;
  width: calc(100% + 2px);
  border: 1px solid ${th('colors.borderDarkest')};

  ${({ maxHeight }) =>
    maxHeight &&
    css`
      overflow-y: auto;
      max-height: ${maxHeight};
    `}
`;

export const Option = styled.div<{ isHighlighted: boolean }>`
  background: #fff;
  color: ${th('colors.materialText')};
  padding: 1 2;
  font-size: 12px;
  border: 1px solid transparent;

  &:hover {
    background: ${th('colors.headerBackground')};
    color: #fff;
    border: 1px dotted ${th('colors.borderLight')};
  }

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      border: 1px dotted ${th('colors.borderDark')};
      background: ${th('colors.headerBackground')};
      color: #fff;
    `}
`;

export const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const SelectedValue = styled.div`
  flex: 1 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
`;

export const CaretButton = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 17px;
  height: 17px;
  font-size: 14px;
  line-height: 1.1;
  transform: translate(-3px, -2px);

  background-color: material;
  box-shadow: inset 0.5px 0.7px 0px 0.7px ${th('colors.material')},
    inset -1px 0px 0 1px ${th('colors.borderDark')},
    inset 1.5px 1.5px 0px 1.5px ${th('colors.borderLightest')};

  border-right: 1;
  border-bottom: 1;

  background-image: url('${caret}');
  background-position: 60% 60%;
  background-repeat: no-repeat;
`;
