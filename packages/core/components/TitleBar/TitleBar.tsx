import React from 'react';
import styled, { th } from '@xstyled/styled-components';

import Button from '../Button';
import Frame, { FrameProps } from '../Frame/Frame';

const OptionsBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
`;

const Option = styled(Button).attrs({
  as: 'li',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 2;
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

  &:first-child {
    margin-right: 0;
  }

  &:focus {
    box-shadow: inset 1px 1px 0px 1px ${th('colors.borderLightest')},
      inset -1px -1px 0px 1px ${th('colors.borderDark')};
  }
`;

Option.displayName = 'Option';

interface TitleBarBackgroundProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    FrameProps {
  active?: boolean;
  icon?: React.ReactElement;
  title?: string;
}

const TitleBarBackground = styled(Frame)<{ active?: boolean }>`
  height: 18;
  margin-bottom: 2;

  padding: 2;

  display: flex;

  box-shadow: none;

  img {
    width: 15;
    height: 14;
    margin-right: 4;
  }

  background: ${({ active, theme }) =>
    active
      ? theme.colors.headerBackground
      : theme.colors.headerNotActiveBackground};
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
  OptionsBox: typeof OptionsBox;
}

export interface ITitleBarProps
  extends TitleBarBackgroundProps,
    TitleBarOptions {}

const TitleBarRenderer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  TitleBarBackgroundProps
> = (
  { children, title = 'UNKNOWN.EXE', icon, active = true, className },
  ref: React.Ref<HTMLDivElement>,
) => (
  <TitleBarBackground
    active={active}
    color={active ? 'headerText' : 'headerNotActiveText'}
    ref={ref}
  >
    {icon && icon}
    <Title className={className}>{title}</Title>

    {children}
  </TitleBarBackground>
);

const TitleBar = Object.assign(
  React.forwardRef<HTMLDivElement, TitleBarBackgroundProps>(TitleBarRenderer),
  {
    Option,
    OptionsBox,
  },
) as ITitleBarProps & typeof TitleBarRenderer;

export default TitleBar;
