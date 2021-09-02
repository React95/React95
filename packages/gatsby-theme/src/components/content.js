import React from 'react';
import { navigate } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as R95Components from '@react95/core';

import IconRenderer from './icon-renderer';
import { TASKBAR_HEIGHT } from '../utils/constants';

const Content = ({ content }) => {
  if (!content.body) return null;

  const {
    body,
    frontmatter: { title, icon },
  } = content;

  return (
    <R95Components.Modal
      title={title}
      icon={<IconRenderer {...icon} />}
      style={{
        top: 0,
        height: `calc(100% - ${TASKBAR_HEIGHT}px)`,
        width: '100%',
      }}
      closeModal={() => navigate('/')}
    >
      <MDXProvider components={R95Components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </R95Components.Modal>
  );
};

export default Content;
