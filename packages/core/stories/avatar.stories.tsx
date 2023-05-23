import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Frame } from '../components';
import Avatar from '../components/Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

export const Simple = {
  render: () => <Avatar src="https://github.com/React95.png" alt="photo" />,

  parameters: {
    design: { disable: true },
  },
};

export const Circle = {
  render: () => (
    <Avatar src="https://github.com/React95.png" alt="photo" circle />
  ),

  parameters: {
    design: { disable: true },
  },
};

export const Letters = {
  render: () => (
    <Frame
      display="inline-flex"
      boxShadow="none"
      bg="transparent"
      style={{ gap: 8 }}
    >
      <Avatar>SQ</Avatar>
      <Avatar circle>RO</Avatar>
    </Frame>
  ),

  parameters: {
    design: { disable: true },
  },
};
