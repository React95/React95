import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button/Button';
import Icon, { IconProps } from '../Icon/Icon';

export const OptionsBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const OptionItem = styled.li`
  display: flex;
  margin-left: 2;
  &:first-child {
    margin-right: 0;
  }
`;

export const Option = styled(StyledButton)`
  padding: 0;
  width: 17px;
  height: 16px;
  min-width: 0;
  font-weight: 600;
`;

Option.displayName = 'Option';

interface TitleBarProps {
  isActive?: boolean;
  icon?: IconProps['name'];
  className?: string;
  title?: string;
}

const TitleBarBackground = styled.div<{ isActive?: boolean }>`
  height: 20px;
  padding: 1px 2px;
  margin: 0 0 1px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  background: ${({ isActive, theme }) =>
    isActive
      ? theme.colors.headerBackground
      : theme.colors.headerNotActiveBackground};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.headerText : theme.colors.headerNotActiveText};
`;

const Title = styled.h1`
  flex-grow: 1;
  font-weight: bold;
  line-height: 1.4em;
  margin: 0;
  font-size: 1em;
`;

const TitleBar: React.FunctionComponent<TitleBarProps> = ({
  children,
  className,
  icon,
  title,
  isActive,
}) => {
  const iconStyle = {
    width: 16,
    height: 16,
    style: {
      marginRight: '4px',
    },
  };

  return (
    <TitleBarBackground isActive={isActive} className={className}>
      {icon && <Icon name={icon} {...iconStyle} />}
      <Title>{title}</Title>

      {children}
    </TitleBarBackground>
  );
};

TitleBar.defaultProps = {
  title: 'UNKNOWN.EXE',
  icon: undefined,
  isActive: true,
};

export default TitleBar;
