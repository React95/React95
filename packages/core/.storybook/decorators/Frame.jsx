import React from 'react';
import '../../components/GlobalStyle/GlobalStyle.css';
import '../../components/ThemeProvider/themes/win95.css';

const Frame = Story => (
  <div style={{ padding: 10 }}>
    <Story />
  </div>
);

export default Frame;
