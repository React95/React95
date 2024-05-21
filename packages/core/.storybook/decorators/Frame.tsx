import React from 'react';
import * as GlobalStyle from '../../components/GlobalStyle/GlobalStyle.css';
import * as themes from '../../components/themes/all';

// Do not delete this line. This ensures theme + GlobalStyle for being
// imported in the prod build
console.log({ GlobalStyle });

(global as any).themes = Object.keys(themes);

const Frame = (Story, { globals }) => {
  const { selectedTheme } = globals;

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const themeStylesheets = Array.from(
        document.querySelectorAll('style'),
      ).filter(s => s.dataset?.file?.includes('themes'));

      themeStylesheets.forEach(s => {
        s.disabled = !s.dataset.file?.includes(selectedTheme);
      });
    } else {
      const themeClassName = `r95_theme_${selectedTheme}`;

      document.body.classList.add(themeClassName);

      return () => {
        document.body.classList.remove(themeClassName);
      };
    }
  }, [selectedTheme]);

  return (
    <div style={{ padding: 10 }}>
      <Story />
    </div>
  );
};

export default Frame;
