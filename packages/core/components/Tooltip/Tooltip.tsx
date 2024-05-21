import React, { useState, forwardRef } from 'react';
import type { HTMLAttributes, Ref } from 'react';
import cn from 'classnames';

import { tip, wrapper } from './Tooltip.css';

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
} & HTMLAttributes<HTMLDivElement>;

const TooltipRenderer = (
  {
    children,
    text = formatDate(new Date()),
    delay = 1000,
    ...rest
  }: TooltipProps,
  ref: Ref<HTMLDivElement>,
) => {
  const [show, setShow] = useState(false);
  const [delayTimer, setDelayTimer] = useState(0);

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

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  TooltipRenderer,
);
