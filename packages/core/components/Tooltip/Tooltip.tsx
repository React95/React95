import * as React from 'react';
import { tip, wrapper } from './Tooltip.css';
import cn from 'classnames';

function formatDate(date: Date): string {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day.toString().padStart(2, '0')} ${monthNames[monthIndex]} ${year}`;
}

export type TooltipProps = {
  text?: string;
  delay?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const TooltipRenderer = (
  {
    children,
    text = formatDate(new Date()),
    delay = 1000,
    ...rest
  }: TooltipProps,
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
