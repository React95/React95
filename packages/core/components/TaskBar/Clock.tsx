import React, { useEffect, useState } from 'react';

import { Frame } from '../Frame/Frame';
import { Tooltip } from '../Tooltip/Tooltip';
import { tooltip } from './TaskBar.css';

export const Clock = () => {
  const [timer, setTimer] = useState('');

  useEffect(() => {
    function checkTime(i: number) {
      return i < 10 ? `0${i}` : i;
    }

    const interval = setInterval(() => {
      const today = new Date();
      const h = today.getHours();
      const m = today.getMinutes();
      setTimer(`${checkTime(h)}:${checkTime(m)}`);
    });

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
