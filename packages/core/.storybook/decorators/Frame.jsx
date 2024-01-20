import React from 'react';
import '../../components/GlobalStyle/GlobalStyle.css';
import { themeClass } from '../../components/ThemeProvider/themes/win95.css';

const Frame = Story => (
  <div className={themeClass} style={{ padding: 10 }}>
    <Story />
  </div>
);

export default Frame;
