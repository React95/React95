import React, { useEffect, useState } from 'react';
import styled from '@xstyled/styled-components';

import Frame from '../Frame';
import Tooltip from '../Tooltip';

const StyledTooltip = styled(Tooltip)`
  div:first-child {
    right: 0;
  }
`;

const Clock = () => {
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
  });

  return (
    <Frame
      boxShadow="in"
      bg="transparent"
      px={6}
      py={2}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledTooltip>{timer}</StyledTooltip>
    </Frame>
  );
};

export default Clock;
