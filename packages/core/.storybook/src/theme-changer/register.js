import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import themes from '../../../components/ThemeProvider/themes'
import Button from '../../../components/Button'
import TitleBar from '../../../components/TitleBar'
import Panel from '../../../components/Panel'
import Window from '../../../components/Window'
import ThemeProvider from './../../../components/ThemeProvider';

const ADDON_ID = 'Themes';
const PANEL_ID = `${ADDON_ID}/panel`;

export const ThemePanel = ({ api }) => {
  return (
    <div style={{ padding: '12px' }}>
      <h1 style={{ marginBottom: '12px' }}>Pick a theme below</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.entries(themes).map(([name, theme]) => {
          return <ThemeProvider theme={theme}>
              <Window key={name} width={'auto'} style={{ margin: '1em' }}>
              <TitleBar title={name} />
              <Panel shadow='none'>
                <Button onClick={() => {api.updateGlobals({selectedTheme: theme})}}>
                  {name}
                </Button>
              </Panel>
            </Window>
          </ThemeProvider>
        })}
      </div>
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