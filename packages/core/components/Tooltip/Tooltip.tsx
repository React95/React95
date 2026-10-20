import { useId, useRef, useState, forwardRef } from 'react';
import type { HTMLAttributes, KeyboardEvent, Ref } from 'react';
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
  const delayTimer = useRef(0);
  const tooltipId = useId();

  const handleEnter = () => {
    window.clearTimeout(delayTimer.current);
    delayTimer.current = window.setTimeout(() => {
      setShow(true);
    }, delay);
  };

  const handleLeave = () => {
    window.clearTimeout(delayTimer.current);
    setShow(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      handleLeave();
    }
  };

  return (
    <div
      {...rest}
      className={cn(wrapper, rest.className)}
      // the tooltip's own handlers run after the consumer's, so both fire
      onMouseEnter={e => {
        rest.onMouseEnter?.(e);
        handleEnter();
      }}
      onMouseLeave={e => {
        rest.onMouseLeave?.(e);
        handleLeave();
      }}
      onFocus={e => {
        rest.onFocus?.(e);
        handleEnter();
      }}
      onBlur={e => {
        rest.onBlur?.(e);
        handleLeave();
      }}
      onKeyDown={e => {
        rest.onKeyDown?.(e);
        handleKeyDown(e);
      }}
      tabIndex={rest.tabIndex ?? 0}
      aria-describedby={show ? tooltipId : undefined}
      ref={ref}
    >
      {show && (
        <div id={tooltipId} role="tooltip" className={tip}>
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  TooltipRenderer,
);
