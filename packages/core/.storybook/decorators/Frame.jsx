import React from 'react';
import '../../components/GlobalStyle/GlobalStyle.css';
import * as themes from '../../components/ThemeProvider/theme';

const Frame = Story => (
  <div style={{ padding: 10 }} className={themes.win95}>
    <Story />
  </div>
);

export default Frame;
