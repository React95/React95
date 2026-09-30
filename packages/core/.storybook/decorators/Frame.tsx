import React from 'react';
import type { Decorator } from '@storybook/react-vite';
import { setElementVars } from '@vanilla-extract/dynamic';
import '../../components/GlobalStyle/GlobalStyle.css';
import { contract } from '../../components/themes/contract.css';
import * as tokens from '../../components/themes/tokens';

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
