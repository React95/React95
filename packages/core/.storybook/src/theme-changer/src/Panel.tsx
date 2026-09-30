/** @jsxRuntime automatic */
import type { API } from 'storybook/manager-api';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import './styles.css';
import { contract } from '../../../../components/themes/contract.css';
import * as tokens from '../../../../components/themes/tokens';

type ThemeName = keyof typeof tokens;

const themes = Object.keys(tokens) as ThemeName[];

const ThemeWindow = ({
  name,
  changeTheme,
}: {
  name: ThemeName;
  changeTheme: API['updateGlobals'];
}) => (
  // each window gets its theme tokens as inline CSS variables, so it renders
  // with that theme's colors
  <div
    className="theme-window"
    style={assignInlineVars(contract, tokens[name])}
  >
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

export const ThemePanel = ({ api }: { api: API }) => (
  <div style={{ padding: '12px' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {themes.map(name => (
        <ThemeWindow key={name} name={name} changeTheme={api.updateGlobals} />
      ))}
    </div>
  </div>
);
