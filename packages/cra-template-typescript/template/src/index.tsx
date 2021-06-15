import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, GlobalStyle } from '@react95/core';
import { ClippyProvider } from '@react95/clippy';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <>
        <GlobalStyle />
        <ClippyProvider>
          <App />
        </ClippyProvider>
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
