import React from 'react';
import { ThemeProvider, GlobalStyle } from '@react95/core';
import { createGlobalStyle } from '@xstyled/styled-components';

import { navify } from '../utils';

import ContentExplorer from './content-explorer';
import TaskBar from './taskbar';
import Content from './content';

const DesktopStyle = createGlobalStyle`
  html {
    height: calc(100% - 28px);
  }

  body {
    height: 100%;
  }
`;

const Desktop = ({ pageContext: { data, content = {} } }) => {
  const {
    allMdx: { edges },
  } = data;

  const nav = navify(edges.map(e => e.node));

  return (
    <ThemeProvider>
      <GlobalStyle />
      <DesktopStyle />

      <ContentExplorer nav={nav} />

      <Content content={content} />

      <TaskBar nav={nav} />
    </ThemeProvider>
  );
};

export default Desktop;
