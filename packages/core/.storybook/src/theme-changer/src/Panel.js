import React from 'react';
import { useStorybookState } from '@storybook/manager-api';

import './styles.css';
import { extractThemes } from './extractThemes';

const ThemeWindow = ({ name, changeTheme }) => (
  <div className="theme-window">
    <div className="title-bar">{name}</div>
    <button
      className="theme-widow-btn"
      onClick={() => {
        changeTheme({ selectedTheme: name });
      }}
    >
      {name}
    </button>
  </div>
);

export const ThemePanel = ({ api }) => {
  const state = useStorybookState();
  const [themes, setThemes] = React.useState();

  React.useEffect(() => {
    if (!state.previewInitialized) {
      return;
    }

    const themesFromPreview = extractThemes();

    setThemes(themesFromPreview);
  }, [state.previewInitialized]);

  return themes ? (
    <div style={{ padding: '12px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {Object.entries(themes).map(([name, className]) => (
          <div className={className} key={name}>
            <ThemeWindow name={name} changeTheme={api.updateGlobals} />
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
