import React from 'react';
import '../../components/GlobalStyle/GlobalStyle.css';
import * as themes from '../../components/themes/all';

const Frame = (Story, { globals }) => {
  const { selectedTheme } = globals;

  const theme = themes[selectedTheme] || themes.win95;

  React.useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <div style={{ padding: 10 }}>
      <Story />
    </div>
  );
};

export default Frame;
