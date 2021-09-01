import React from 'react';
import { navigate } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Modal } from '@react95/core';

import IconRenderer from './icon-renderer';

const TASKBAR_HEIGHT = 30;

const Content = ({ content }) => {
  if (!content.body) return null;

  const {
    body,
    frontmatter: { title, icon },
  } = content;

  return (
    <Modal
      title={title}
      icon={<IconRenderer {...icon} />}
      style={{
        top: 0,
        height: `calc(100% - ${TASKBAR_HEIGHT}px)`,
        width: '100%',
      }}
      closeModal={() => navigate('/')}
    >
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Modal>
  );
};

export default Content;
