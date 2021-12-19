import React from 'react';

import { navify } from '../utils';

import ContentExplorer from './content-explorer';
import TaskBar from './taskbar';
import Content from './content';
import Seo from './seo';

const Desktop = ({ pageContext: { data, content = {} } }) => {
  const {
    allMdx: { edges },
  } = data;

  const nav = navify(edges.map(e => e.node));

  return (
    <>
      <Seo content={content} />
      <ContentExplorer nav={nav} />
      <Content content={content} />
      <TaskBar nav={nav} />
    </>
  );
};

export default Desktop;
