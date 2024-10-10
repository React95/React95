import cn from 'classnames';
import type {
  ButtonHTMLAttributes,
  ElementRef,
  ElementType,
  ForwardedRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
  ReactElement,
  Ref,
} from 'react';
import React from 'react';

import close from './close.svg';
import help from './help.svg';
import maximize from './maximize.svg';
import minimize from './minimize.svg';
import restore from './restore.svg';

import { fixedForwardRef, Frame, FrameProps } from '../Frame/Frame';

import { button } from '../Button/Button.css';
import * as styles from './TitleBar.css';

const defaultOptions = {
  help: {
    alt: 'help',
    src: help,
  },
  close: {
    alt: 'close',
    src: close,
  },
  maximize: {
    alt: 'maximize',
    src: maximize,
  },
  minimize: {
    alt: 'minimize',
    src: minimize,
  },
  restore: {
    alt: 'restore',
    src: restore,
  },
};

const OptionsBox = fixedForwardRef<HTMLDivElement, FrameProps<'div'>>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      className={cn(styles.optionsBox, rest.className)}
    />
  ),
);

export type OptionProps<TAs extends ElementType> =
  ButtonHTMLAttributes<HTMLButtonElement> & FrameProps<TAs>;

export type OptionReturnType = <TAs extends ElementType = 'button'>(
  props: OptionProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;

const Option = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (rest, ref) => (
    <Frame
      as="button"
      {...rest}
      ref={ref}
      className={cn(button, styles.option, rest.className)}
    />
  ),
) as <TAs extends ElementType = 'button'>(
  props: OptionProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;

type DefaultOptionProps<TAs extends ElementType = 'button'> = {
  kind: keyof typeof defaultOptions;
} & OptionProps<TAs>;

const DefaultOption = fixedForwardRef<HTMLButtonElement, DefaultOptionProps>(
  (props, ref) => {
    const { kind, ...rest } = props;
    const optionType = defaultOptions[kind] || defaultOptions.help;

    return (
      <Option {...rest} ref={ref}>
        <img src={optionType.src} alt={optionType.alt} />
      </Option>
    );
  },
) as <TAs extends ElementType = 'button'>(
  props: DefaultOptionProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;

const Help = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (props, ref) => {
    return <DefaultOption {...props} kind="help" ref={ref} />;
  },
) as OptionReturnType;

const Close = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (props, ref) => {
    return <DefaultOption {...props} kind="close" ref={ref} />;
  },
) as OptionReturnType;

const Maximize = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (props, ref) => {
    return <DefaultOption {...props} kind="maximize" ref={ref} />;
  },
) as OptionReturnType;

const Minimize = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (props, ref) => {
    return <DefaultOption {...props} kind="minimize" ref={ref} />;
  },
) as OptionReturnType;

const Restore = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (props, ref) => {
    return <DefaultOption {...props} kind="restore" ref={ref} />;
  },
) as OptionReturnType;

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
  Help: typeof Help;
  Close: typeof Close;
  Maximize: typeof Maximize;
  Minimize: typeof Minimize;
  Restore: typeof Restore;
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
  fixedForwardRef<HTMLDivElement, TitleBarBackgroundProps>(TitleBarRenderer),
  {
    Option,
    OptionsBox,
    Help,
    Close,
    Maximize,
    Minimize,
    Restore,
  },
) as TitleBarProps & typeof TitleBarRenderer;
