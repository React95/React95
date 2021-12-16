import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Avatar from '../components/Avatar';
import { Frame } from '../components';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta;

export const Simple = () => (
  <Avatar src="https://github.com/React95.png" alt="photo" />
);

Simple.parameters = {
  design: { disable: true },
};

export const Circle = () => (
  <Avatar src="https://github.com/React95.png" alt="photo" circle />
);

Circle.parameters = {
  design: { disable: true },
};

export const Letters = () => (
  <Frame
    display="inline-flex"
    boxShadow="none"
    bg="transparent"
    style={{ gap: 8 }}
  >
    <Avatar>SQ</Avatar>
    <Avatar circle>RO</Avatar>
  </Frame>
);

Letters.parameters = {
  design: { disable: true },
};
