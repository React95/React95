import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Avatar, AvatarProps } from '../components/Avatar/Avatar';
import { Frame } from '../components';

export default {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    circle: {
      control: 'boolean',
    },
    srcSet: {
      control: 'text',
      description:
        'A string which identifies one or more image candidate strings, separated using commas (,) each specifying image resources to use under given circumstances.<br >[`img` srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)',
    },
    src: {
      control: 'text',
      description:
        'Specifies the image to display in the `<img>` element.<br >[`img` src](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)',
    },
    alt: {
      control: 'text',
      description:
        'fallback (alternate) text to display when the image specified by the `<img>` element is not loaded.<br >[`img` alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)',
    },
    size: {
      control: 'text',
      description: "Avatar's width and height",
      defaultValue: '48px',
    },
  },
} as Meta<AvatarProps>;

type Story = StoryObj<typeof Avatar>;

export const Simple = {
  render: (args: Story['args']) => <Avatar {...args} />,
  args: {
    src: 'https://github.com/React95.png',
    alt: 'Reac95 logo',
    size: '48px',
  },
  parameters: {
    design: { disable: true },
  },
};

export const Circle: Story = {
  render: () => (
    <Avatar src="https://github.com/React95.png" alt="photo" circle />
  ),

  parameters: {
    design: { disable: true },
  },
};

export const Letters: Story = {
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
