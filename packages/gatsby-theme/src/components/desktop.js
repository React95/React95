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

const Desktop = ({ data, children }) => {
  const {
    allMdx: { edges },
  } = data;

  const nav = navify(edges.map(e => e.node));

  return (
    <ThemeProvider>
      <GlobalStyle />
      <DesktopStyle />
      <ContentExplorer nav={nav} />
      <MDXProvider>
        {children && <MDXRenderer>{children}</MDXRenderer>}
      </MDXProvider>

      <TaskBar nav={nav} />
    </ThemeProvider>
  );
};

export const query = graphql`
  query DesktopQuery {
    allMdx {
      edges {
        node {
          slug
          frontmatter {
            icon {
              name
              variant
            }
            title
          }
        }
      }
    }
  }
`;

export default Desktop;
