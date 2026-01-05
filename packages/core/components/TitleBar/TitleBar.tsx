import cn from 'classnames';
import type {
  ButtonHTMLAttributes,
  ElementRef,
  ElementType,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
} from 'react';
import React from 'react';

import close from './close.svg';
import help from './help.svg';
import maximize from './maximize.svg';
import minimize from './minimize.svg';
import restore from './restore.svg';

import {
  fixedForwardRef,
  Frame,
  FrameProps,
  Polymorphic,
} from '../Frame/Frame';

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

type OptionsBoxProps<TAs extends ElementType = 'div'> =
  HTMLAttributes<HTMLDivElement> & Polymorphic<TAs, FrameProps>;

const OptionsBoxComponent = fixedForwardRef<HTMLDivElement, OptionsBoxProps>(
  (rest, ref) => (
    <Frame
      {...rest}
      ref={ref}
      className={cn(styles.optionsBox, rest.className)}
    />
  ),
);

const OptionsBox = OptionsBoxComponent as <TAs extends ElementType = 'div'>(
  props: OptionsBoxProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;

export type OptionProps<TAs extends ElementType = 'button'> =
  ButtonHTMLAttributes<HTMLButtonElement> & Polymorphic<TAs, FrameProps>;

export type OptionReturnType = <TAs extends ElementType = 'button'>(
  props: OptionProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;

const OptionComponent = fixedForwardRef<
  HTMLButtonElement,
  OptionProps<'button'>
>((rest, ref) => (
  <Frame
    as="button"
    {...rest}
    ref={ref}
    className={cn(button, styles.option, rest.className)}
  />
));

const Option = OptionComponent as OptionReturnType;

type DefaultOptionProps<TAs extends ElementType = 'button'> = {
  kind: keyof typeof defaultOptions;
} & OptionProps<TAs>;

const DefaultOptionComponent = fixedForwardRef<
  HTMLButtonElement,
  DefaultOptionProps
>((props, ref) => {
  const { kind, ...rest } = props;
  const optionType = defaultOptions[kind] || defaultOptions.help;

  return (
    <Option {...rest} ref={ref}>
      <img
        src={optionType.src}
        alt={optionType.alt}
        className={styles.optionImage}
      />
    </Option>
  );
});

const DefaultOption = DefaultOptionComponent as <
  TAs extends ElementType = 'button',
>(
  props: DefaultOptionProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;

const HelpComponent = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (props, ref) => {
    return <DefaultOption {...props} kind="help" ref={ref} />;
  },
);

const Help = HelpComponent as OptionReturnType;

const CloseComponent = fixedForwardRef<
  HTMLButtonElement,
  OptionProps<'button'>
>((props, ref) => {
  return <DefaultOption {...props} kind="close" ref={ref} />;
});

const Close = CloseComponent as OptionReturnType;

const MaximizeComponent = fixedForwardRef<
  HTMLButtonElement,
  OptionProps<'button'>
>((props, ref) => {
  return <DefaultOption {...props} kind="maximize" ref={ref} />;
});

const Maximize = MaximizeComponent as OptionReturnType;

const MinimizeComponent = fixedForwardRef<
  HTMLButtonElement,
  OptionProps<'button'>
>((props, ref) => {
  return <DefaultOption {...props} kind="minimize" ref={ref} />;
});

const Minimize = MinimizeComponent as OptionReturnType;

const RestoreComponent = fixedForwardRef<
  HTMLButtonElement,
  OptionProps<'button'>
>((props, ref) => {
  return <DefaultOption {...props} kind="restore" ref={ref} />;
});

const Restore = RestoreComponent as OptionReturnType;

export type TitleBarBackgroundProps<TAs extends ElementType = 'div'> = Omit<
  HTMLAttributes<HTMLDivElement>,
  'color'
> &
  Polymorphic<TAs, FrameProps> & {
    active?: boolean;
    icon?: ReactElement;
    title?: string;
  };

export type TitleBarProps<TAs extends ElementType = 'div'> =
  TitleBarBackgroundProps<TAs>;

interface TitleBarOptions {
  Option: typeof Option;
  OptionsBox: typeof OptionsBox;
  Help: typeof Help;
  Close: typeof Close;
  Maximize: typeof Maximize;
  Minimize: typeof Minimize;
  Restore: typeof Restore;
}

const TitleBarRenderer = fixedForwardRef<
  HTMLDivElement,
  TitleBarBackgroundProps
>(({ children, title = 'UNKNOWN.EXE', icon, active = true, ...rest }, ref) => (
  <Frame
    {...rest}
    className={cn(styles.titleBarBackground({ active }), rest.className)}
    ref={ref}
  >
    {icon && icon}
    <div className={styles.title}>{title}</div>

    {children}
  </Frame>
));

type TitleBarComponent = <TAs extends ElementType = 'div'>(
  props: TitleBarProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;

type TitleBarWithStatics = TitleBarComponent & TitleBarOptions;

export const TitleBar = Object.assign(TitleBarRenderer, {
  Option,
  OptionsBox,
  Help,
  Close,
  Maximize,
  Minimize,
  Restore,
}) as TitleBarWithStatics;
