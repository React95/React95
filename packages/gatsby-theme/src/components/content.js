import React from 'react';

import Desktop from './desktop';

const Content = ({ pageContext: { data, content } }) => {
  console.log({ data, content });

  return <Desktop data={data}>{content.body}</Desktop>;
};

export default Content;
