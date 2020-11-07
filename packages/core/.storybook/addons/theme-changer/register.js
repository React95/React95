import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import themes from '../../../components/ThemeProvider/themes'
import Button from '../../../components/Button'

const ADDON_ID = 'Themes';
const PANEL_ID = `${ADDON_ID}/panel`;

export const ThemePanel = ({ api }) => {
  return (
    <div style={{ padding: '12px' }}>
      <h1 style={{ marginBottom: '12px' }}>Pick a theme below</h1>
      {Object.entries(themes).map(([name, theme]) => {
        return <Button key={name} onClick={() => {api.updateGlobals({selectedTheme: theme})}} theme={theme} style={{ margin: '6px', padding: '10px 12px' }}>{ name }</Button>
      })}
    </div>
  )
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Themes',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <ThemePanel api={api} />
      </AddonPanel>
    ),
  });
});