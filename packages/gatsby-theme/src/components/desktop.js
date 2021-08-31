import React from 'react';
import { ThemeProvider, GlobalStyle } from '@react95/core';
import { createGlobalStyle } from '@xstyled/styled-components';
import { graphql } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import ContentExplorer from './content-explorer';
import TaskBar from './taskbar';
import { navify } from '../utils';

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

  const { body: mdx } = content;

  const nav = navify(edges.map(e => e.node));

  return (
    <ThemeProvider>
      <GlobalStyle />
      <DesktopStyle />

      <ContentExplorer nav={nav} />

      <MDXProvider>{mdx && <MDXRenderer>{mdx}</MDXRenderer>}</MDXProvider>

      <TaskBar nav={nav} />
    </ThemeProvider>
  );
};

export default Desktop;
