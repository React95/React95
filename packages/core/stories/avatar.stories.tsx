import type { Meta } from '@storybook/react';
import * as React from 'react';

import Avatar, { AvatarProps } from '../components/Avatar/Avatar';
import Frame from '../components/Frame';

export default {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
} as Meta<AvatarProps>;

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
    <Frame display="inline-flex" gap="8px">
      <Avatar>SQ</Avatar>
      <Avatar circle>RO</Avatar>
    </Frame>
  ),

  parameters: {
    design: { disable: true },
  },
};
