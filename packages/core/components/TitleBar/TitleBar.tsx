import React, { forwardRef } from 'react';
import type {
  ForwardRefRenderFunction,
  ReactElement,
  HTMLAttributes,
  Ref,
} from 'react';

import { Frame, FrameProps } from '../Frame/Frame';

import * as styles from './TitleBar.css';
import { button } from '../Button/Button.css';
import cn from 'classnames';

const OptionsBox = forwardRef<HTMLDivElement, FrameProps<'div'>>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      className={cn(styles.optionsBox, rest.className)}
    />
  ),
);

const Option = forwardRef<HTMLButtonElement, FrameProps<'button'>>(
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
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    FrameProps<'div'> {
  active?: boolean;
  icon?: ReactElement;
  title?: string;
}

interface TitleBarOptions {
  Option: typeof Option;
  OptionsBox: typeof OptionsBox;
}

export interface TitleBarProps
  extends TitleBarBackgroundProps,
    TitleBarOptions,
    FrameProps<'div'> {}

const TitleBarRenderer: ForwardRefRenderFunction<
  HTMLDivElement,
  TitleBarBackgroundProps
> = (
  { children, title = 'UNKNOWN.EXE', icon, active = true, ...rest },
  ref: Ref<HTMLDivElement>,
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
  forwardRef<HTMLDivElement, TitleBarBackgroundProps>(TitleBarRenderer),
  {
    Option,
    OptionsBox,
  },
) as TitleBarProps & typeof TitleBarRenderer;
