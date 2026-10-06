import { useEffect, useState } from 'react';

import { Frame } from '../Frame/Frame';
import { Tooltip } from '../Tooltip/Tooltip';
import { tooltip } from './TaskBar.css';

const formatTime = (date: Date) =>
  [date.getHours(), date.getMinutes()]
    .map(part => (part < 10 ? `0${part}` : part))
    .join(':');

export const Clock = () => {
  const [timer, setTimer] = useState(() => formatTime(new Date()));

  useEffect(() => {
    // it shows minutes, so checking every second is enough
    const interval = setInterval(() => setTimer(formatTime(new Date())), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Frame
      boxShadow="$in"
      px="$6"
      py="$2"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Tooltip className={tooltip}>{timer}</Tooltip>
    </Frame>
  );
};
