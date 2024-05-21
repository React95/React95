import React from 'react';
import { useStorybookState } from '@storybook/manager-api';

import './styles.css';
import { extractThemes, injectThemes, ThemeObject } from './extractThemes';

const ThemeWindow = ({ name, changeTheme }) => (
  <div className="theme-window">
    <div className="title-bar">{name}</div>
    <div className="btn-container">
      <button
        className="theme-widow-btn"
        onClick={() => {
          changeTheme({ selectedTheme: name });
        }}
      >
        {name}
      </button>
    </div>
  </div>
);

export const ThemePanel = ({ api }) => {
  const state = useStorybookState();
  const [themes, setThemes] =
    React.useState<Pick<ThemeObject, 'name' | 'className'>[]>();

  React.useEffect(() => {
    if (!state.previewInitialized) {
      return;
    }
    const [previewFrame] = document.getElementsByTagName('iframe');

    if (!previewFrame || !previewFrame.contentWindow) {
      return;
    }

    const themesFromPreview = extractThemes(previewFrame);

    if (themesFromPreview && themesFromPreview.length > 0) {
      injectThemes(themesFromPreview);
      setThemes(
        themesFromPreview.map(({ className, name }) => ({ className, name })),
      );
    }
  }, [state.previewInitialized]);

  return (
    <div style={{ padding: '12px' }}>
      {themes ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {themes.map(({ className, name }) => (
            <div className={className} key={name}>
              <ThemeWindow name={name} changeTheme={api.updateGlobals} />
            </div>
          ))}
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
};
