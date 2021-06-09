import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, GlobalStyle } from '@react95/core';
import { ClippyProvider } from '@react95/clippy';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <ClippyProvider>
      <App />
    </ClippyProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
