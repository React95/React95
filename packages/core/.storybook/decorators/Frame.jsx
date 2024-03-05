import React from 'react';
import '../../components/GlobalStyle/GlobalStyle.css';
import * as themes from '../../components/themes/all';

const Frame = (Story, { globals }) => {
  const { selectedTheme } = globals;

  return (
    <div
      style={{ padding: 10 }}
      className={themes[selectedTheme] || themes.win95}
    >
      <Story />
    </div>
  );
};

export default Frame;
