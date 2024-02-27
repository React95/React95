import React from 'react';
import '../../components/GlobalStyle/GlobalStyle.css';
import { win95 } from '../../components/ThemeProvider/themes/win95.css';

const Frame = Story => (
  <div style={{ padding: 10 }} className={win95}>
    <Story />
  </div>
);

export default Frame;
