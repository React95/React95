import React from 'react';
import type { Decorator } from '@storybook/react-vite';
import { setElementVars } from '@vanilla-extract/dynamic';
import * as GlobalStyle from '../../components/GlobalStyle/GlobalStyle.css';
import { contract } from '../../components/themes/contract.css';
import * as tokens from '../../components/themes/tokens';

// Do not delete this line. This ensures GlobalStyle for being imported in
// the prod build
console.log({ GlobalStyle });

type ThemeName = keyof typeof tokens;

const Frame: Decorator = (Story, { globals }) => {
  const selectedTheme = globals.selectedTheme as ThemeName;

  React.useEffect(() => {
    // theme tokens are applied as inline CSS variables on `<html>`, so they
    // win over any `:root` theme stylesheet a story may import
    setElementVars(
      document.documentElement,
      contract,
      tokens[selectedTheme] ?? tokens.win95,
    );
  }, [selectedTheme]);

  return (
    <div style={{ padding: 10 }}>
      <Story />
    </div>
  );
};

export default Frame;
