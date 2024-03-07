import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { ThemePanel } from './src/Panel';

const ADDON_ID = 'Themes';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Themes',
    render: ({ active }) => {
      return (
        <AddonPanel active={active}>
          <ThemePanel api={api} />
        </AddonPanel>
      );
    },
  });
});
