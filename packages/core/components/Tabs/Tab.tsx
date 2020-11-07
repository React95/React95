import React from 'react';
import styled from 'styled-components';
import { border } from './../shared-style/Border';

interface StyledTabProps {
  isActive: Boolean
}

const StyledTab = styled.button<StyledTabProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({isActive}) => isActive ? 25 : 23}px;
  padding: ${({isActive}) => isActive ? 5 : 3}px ${({isActive}) => isActive ? 9 : 7}px;
  z-index: ${({isActive}) => isActive ? 2 : 1};
  margin-top: ${({isActive}) => isActive ? 0 : 2}px;
  border: none;
  background: ${({ theme }) => theme.colors.material};
  user-select: none;
  color: ${({ theme }) => theme.colors.materialText};
  ${border()}

  &:focus, &:active {
    outline: 0;
  }

  border-top-left-radius: ${({isActive}) => isActive ? 5 : 0}px;
  border-top-right-radius: ${({isActive}) => isActive ? 5 : 0}px;
  &:first-child {
    border-top-left-radius: 5px;
    margin-left: ${({isActive}) => isActive ? 0 : 2}px;
    :after {
      box-shadow: ${({isActive, theme}) => `
          ${isActive && 'inset 1px 0 0 0' + theme.colors.borderLightest},
          ${isActive && 'inset 2px 0 0 0' + theme.colors.borderLight},
          inset 0 1px 0 0 ${isActive ? theme.colors.material : theme.colors.borderLightest}, 
          inset 0 -1px 0 0 ${isActive ? theme.colors.material : theme.colors.borderLight}
      `}
    }
  }
  &:last-child {
    border-top-right-radius: 5px;
  }
  
  :after {
    content: '';
    z-index: 1;
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    ${({isActive, theme}) => `
      box-shadow: 
        inset 0 1px 0 0 ${isActive ? theme.colors.material : theme.colors.borderLightest}, 
        inset 0 -1px 0 0 ${isActive ? theme.colors.material : theme.colors.borderLight}
    `}
  }
`;

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  activeTab?: string;
  title: string;
  disabled?: boolean;
  onClick?(e: React.MouseEvent): void;
}

const Tab: React.FC<TabProps> = ({ activeTab = false, title, ...rest }) => (
  <StyledTab {...rest} isActive={activeTab === title}>
    {title}
  </StyledTab>
);

export default Tab;
