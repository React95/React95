import React from 'react';
import GlobalStyle from '../../components/GlobalStyle';

const Frame = storyFn => (
  <React.Fragment>
    <GlobalStyle />
    {storyFn()}
  </React.Fragment>
);

export default Frame;
