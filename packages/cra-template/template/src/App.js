import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@react95/core';
import { useClippy } from '@react95/clippy';

import logo from './windows95_logo.png';

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function App() {
  const { clippy } = useClippy();

  useEffect(() => {
    if (clippy) {
      clippy.play('GetAttention');
    }
  }, [clippy]);

  return (
    <Centered>
      <img src={logo} alt="Windows 95 logo" style={{ width: 200 }} />
      <Button>Start</Button>
    </Centered>
  );
}

export default App;
