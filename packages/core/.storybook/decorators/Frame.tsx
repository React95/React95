import React from 'react';
import '../../components/GlobalStyle/GlobalStyle.css';
import '../../components/themes/all';

const Frame = (Story, { globals }) => {
  const { selectedTheme } = globals;

  React.useEffect(() => {
    const themeStylesheets = Array.from(
      document.querySelectorAll('style'),
    ).filter(s => s.dataset?.file?.includes('themes'));

    themeStylesheets.forEach(s => {
      s.disabled = !s.dataset.file?.includes(selectedTheme);
    });
  }, [selectedTheme]);

  return (
    <div style={{ padding: 10 }}>
      <Story />
    </div>
  );
};

export default Frame;
