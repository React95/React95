import * as React from 'react';
import { tip, wrapper } from './Tooltip.css';
import cn from 'classnames';

export type TooltipProps = {
  text?: string;
  delay?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const TooltipRenderer = (
  { children, text = 'Hello!', delay = 1000, ...rest }: TooltipProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const [show, setShow] = React.useState(false);
  const [delayTimer, setDelayTimer] = React.useState(0);

  const handleEnter = () => {
    const timer = window.setTimeout(() => {
      setShow(true);
    }, delay);

    setDelayTimer(timer);
  };

  const handleLeave = () => {
    clearTimeout(delayTimer);
    setShow(false);
  };

  return (
    <div
      {...rest}
      className={cn(wrapper, rest.className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      ref={ref}
    >
      {show && <div className={tip}>{text}</div>}
      {children}
    </div>
  );
};

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  TooltipRenderer,
);
