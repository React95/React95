import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { BatExec } from '@react95/icons';

import Button from '../Button';

const OptionsBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
`;

const OptionItem = styled.li`
  display: flex;
  margin-left: 2;

  &:first-child {
    margin-right: 0;
  }
`;

const Option = styled(Button)`
  padding: 0;

  width: 17px;
  height: 14px;

  min-width: 0;
  font-weight: 600;
  font-size: 10;

  &:active {
    padding: 1 0 0 1;

    outline: none;
  }

  &:focus {
    box-shadow: inset 1px 1px 0px 1px ${th('colors.borderLightest')},
      inset -1px -1px 0px 1px ${th('colors.borderDark')};
  }
`;

Option.displayName = 'Option';

interface TitleBarBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  icon?: React.ReactElement;
  title?: string;
}

const TitleBarBackground = styled.div<{ isActive?: boolean }>`
  height: 18px;
  margin-bottom: 2;

  padding: 2 2 0;

  display: flex;

  img {
    width: 15px;
    height: 13px;
    margin-right: 4px;
  }
  background: ${({ isActive, theme }) =>
    isActive
      ? theme.colors.headerBackground
      : theme.colors.headerNotActiveBackground};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.headerText : theme.colors.headerNotActiveText};
`;

const Title = styled.div`
  flex-grow: 1;
  font-weight: bold;
  line-height: 1.4em;
  margin: 0;
  font-size: 1em;
`;

interface TitleBarOptions {
  Option: typeof Option;
  OptionItem: typeof OptionItem;
  OptionsBox: typeof OptionsBox;
}

export interface ITitleBarProps
  extends TitleBarBackgroundProps,
    TitleBarOptions {}

const TitleBarRenderer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  TitleBarBackgroundProps
> = (
  {
    children,
    title = 'UNKNOWN.EXE',
    icon = <BatExec variant="16x16_4" />,
    isActive = true,
    className,
    ...props
  },
  ref: React.Ref<HTMLDivElement>,
) => (
  <TitleBarBackground isActive={isActive} {...props} ref={ref}>
    {icon && icon}
    <Title className={className}>{title}</Title>

    {children}
  </TitleBarBackground>
);

const TitleBar = Object.assign(
  React.forwardRef<HTMLDivElement, TitleBarBackgroundProps>(TitleBarRenderer),
  {
    Option,
    OptionItem,
    OptionsBox,
  },
) as ITitleBarProps & typeof TitleBarRenderer;

export default TitleBar;
