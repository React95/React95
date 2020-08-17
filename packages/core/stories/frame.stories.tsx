import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Frame from '../components/Frame';

export default {
  title: 'Frame',
  Component: Frame,
} as Meta;

export const Simple = () => <Frame width={200} height={100} />;

export const WithBoxShadowIn = () => (
  <Frame width={200} height={100} boxShadow="in" />
);

export const WithBoxShadowInOut = () => (
  <Frame width={200} height={100} padding={4}>
    <Frame height="100%" boxShadow="in" />
  </Frame>
);

export const WithBackgroundColor = () => (
  <Frame width={200} height={100} padding={4}>
    <Frame height="100%" boxShadow="in" bg="white" />
  </Frame>
);
