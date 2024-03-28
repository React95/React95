import React from 'react';

import { Frame, FrameProps } from '../Frame/Frame';

import * as styles from './TitleBar.css';
import { button } from '../Button/Button.css';
import cn from 'classnames';

const OptionsBox = React.forwardRef<HTMLDivElement, FrameProps>((rest, ref) => (
  <Frame
    {...rest}
    ref={ref}
    className={cn(styles.optionsBox, rest.className)}
  />
));

const Option = React.forwardRef<HTMLButtonElement, FrameProps<'button'>>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      as="button"
      className={cn(button, styles.option, rest.className)}
    />
  ),
);

export interface TitleBarBackgroundProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    FrameProps {
  active?: boolean;
  icon?: React.ReactElement;
  title?: string;
}

interface TitleBarOptions {
  Option: typeof Option;
  OptionsBox: typeof OptionsBox;
}

export interface TitleBarProps
  extends TitleBarBackgroundProps,
    TitleBarOptions,
    FrameProps {}

const TitleBarRenderer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  TitleBarBackgroundProps
> = (
  { children, title = 'UNKNOWN.EXE', icon, active = true, ...rest },
  ref: React.Ref<HTMLDivElement>,
) => (
  <Frame
    {...rest}
    className={cn(styles.titleBarBackground({ active }), rest.className)}
    ref={ref}
  >
    {icon && icon}
    <div className={styles.title}>{title}</div>

    {children}
  </Frame>
);

export const TitleBar = Object.assign(
  React.forwardRef<HTMLDivElement, TitleBarBackgroundProps>(TitleBarRenderer),
  {
    Option,
    OptionsBox,
  },
) as TitleBarProps & typeof TitleBarRenderer;
