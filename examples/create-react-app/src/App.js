import React from 'react';
import { Button, GlobalStyle, ThemeProvider } from '@react95/core';
import styled from 'styled-components';

import logo from './windows95_logo.png';

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
      <Centered>
        <img src={logo} style={{ width: 200 }} />
        <Button>React95 Example</Button>
      </Centered>
    </ThemeProvider>
  );
}

export default App;
