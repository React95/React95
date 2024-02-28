import React from 'react';
import { useStorybookState } from '@storybook/manager-api';

const ThemeWindow = ({ name, changeTheme }) => (
  <div
    style={{
      width: '140px',
      padding: 1,
      margin: 10,
      backgroundColor: 'var(--r95_g5jstu11)',
      boxShadow:
        'inset 1px 1px 0px 1px var(--r95_g5jstuu), inset 0 0 0 1px var(--r95_g5jstuq), 1px 1px 0 0px var(--r95_g5jstur)',
    }}
  >
    <div
      style={{
        background: 'var(--r95_g5jstux)',
        padding: 4,
        margin: 2,
        color: 'var(--r95_g5jstu10)',
      }}
    >
      {name}
    </div>
    <div style={{ padding: 10 }}>
      <button
        style={{
          backgroundColor: 'var(--r95_g5jstu11)',
          paddingTop: 'var(--r95_g5jstua)',
          paddingInline: 'var(--r95_g5jstun)',
          paddingBottom: 'var(--r95_g5jstu8)',
          border: 'none',
          color: 'var(--r95_g5jstu12)',
          fontSize: '12px',
          boxShadow:
            'inset 1px 1px 0px 1px var(--r95_g5jstuu), inset 0 0 0 1px var(--r95_g5jstuq), 1px 1px 0 0px var(--r95_g5jstur)',
        }}
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
  const [themes, setThemes] = React.useState();

  React.useEffect(() => {
    if (!state.previewInitialized) {
      return;
    }

    const [previewFrame] = document.getElementsByTagName('iframe');

    const extractedThemes = {};

    for (let link of previewFrame.contentDocument.querySelectorAll(
      'link, style',
    )) {
      try {
        if (!link.sheet) {
          console.warn(
            'Warning:',
            "Property 'sheet' is not set on element",
            link,
          );
        } else if (link.dataset.file.includes('ThemeProvider')) {
          const fileName = link.dataset.file.split('/').at(-1);
          const [themeName] = fileName.split('.');

          const [themeClassName] = link.sheet.rules;

          extractedThemes[themeName] = themeClassName.selectorText.substring(1);

          const newLink = document.createElement('style');
          newLink.innerHTML = themeClassName.cssText;

          document.head.appendChild(newLink);
        }
      } catch (e) {
        console.warn(
          'Warning:',
          e.message,
          ". Try set crossorigin='anonymous' on element",
          link,
        );
      }
    }

    setThemes(extractedThemes);
  }, [state.previewInitialized]);

  return themes ? (
    <div style={{ padding: '12px' }}>
      <h1 style={{ marginBottom: '12px' }}>Pick a theme below</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.entries(themes).map(([name, className]) => (
          <div className={className} key={name}>
            <ThemeWindow name={name} changeTheme={api.updateGlobals} />
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
