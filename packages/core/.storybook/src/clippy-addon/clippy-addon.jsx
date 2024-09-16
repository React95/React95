import React from 'react';
import { makeDecorator } from '@storybook/preview-api';
import { ClippyProvider } from './Clippy';

export const withClippy = makeDecorator({
  name: 'withClippy',
  parameterName: 'clippy',
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context) => {
    return (
      <ClippyProvider>
        {props => {
          return storyFn({
            ...context,
            ...props,
          });
        }}
      </ClippyProvider>
    );
  },
});
