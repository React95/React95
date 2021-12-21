import React from 'react';
import { navigate } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as R95Components from '@react95/core';

import IconRenderer from './icon-renderer';
import { TASKBAR_HEIGHT } from '../utils/constants';

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Content = ({ content }) => {
  if (!content.body) return null;

  const {
    body,
    frontmatter: { title, icon, modal },
  } = content;

  return (
    <ConditionalWrapper
      condition={modal}
      wrapper={chidren => (
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
          {chidren}
        </R95Components.Modal>
      )}
    >
      <MDXProvider components={R95Components}>
        <MDXRenderer frontmatter={content.frontmatter}>{body}</MDXRenderer>
      </MDXProvider>
    </ConditionalWrapper>
  );
};

export default Content;
