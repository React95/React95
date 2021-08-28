import React from 'react';
import { ThemeProvider, GlobalStyle } from '@react95/core';
import { graphql } from 'gatsby';

import TaskBar from './taskbar';
import { navify } from '../utils';

const Desktop = ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  const nav = navify(edges.map(e => e.node));

  return (
    <ThemeProvider>
      <GlobalStyle />

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
