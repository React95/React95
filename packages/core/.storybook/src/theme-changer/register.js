import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import styled, { th } from '@xstyled/styled-components';

import themes from '../../../components/ThemeProvider/themes';
import { Button, Frame, ThemeProvider } from '../../../components';

const ADDON_ID = 'Themes';
const PANEL_ID = `${ADDON_ID}/panel`;

const TitleBar = styled(Frame)`
  background: ${({ bg }) => th(`colors.${bg}`)};
`;

const ThemeWindow = ({ name, changeTheme }) => (
  <Frame width={'auto'} m={10}>
    <TitleBar
      p={4}
      m={2}
      boxShadow="none"
      bg="headerBackground"
      color="headerText"
    >
      {name}
    </TitleBar>
    <Frame shadow="none" p={10}>
      <Button
        onClick={() => {
          changeTheme({ selectedTheme: name });
        }}
      >
        {name}
      </Button>
    </Frame>
  </Frame>
);

export const ThemePanel = ({ api }) => (
  <div style={{ padding: '12px' }}>
    <h1 style={{ marginBottom: '12px' }}>Pick a theme below</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(themes).map(name => (
        <ThemeProvider theme={name} key={name}>
          <ThemeWindow name={name} changeTheme={api.updateGlobals} />
        </ThemeProvider>
      ))}
    </div>
  </div>
);

addons.register(ADDON_ID, api => {
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
