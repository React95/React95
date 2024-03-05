import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Frame, FrameProps } from '../components/Frame/Frame';
import { contract } from '../components/themes/contract.css';

const colorsKeys = Object.keys(contract.colors).map(color => `$${color}`);
const shadowsKeys = Object.keys(contract.shadows).map(shadows => `$${shadows}`);

export default {
  title: 'Frame',
  component: Frame,
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      options: colorsKeys,
      defaultValue: '$material',
    },
    backgroundColor: {
      options: colorsKeys,
    },
    color: {
      options: colorsKeys,
    },
    w: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    h: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    boxShadow: {
      options: shadowsKeys,
      defaultValue: '$out',
    },
  },
} as Meta<FrameProps>;

type Story = StoryObj<FrameProps>;

export const Simple: Story = {
  render: args => <Frame {...args} />,
  args: {
    bgColor: '$material',
    w: '200px',
    h: '100px',
    boxShadow: '$out',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

export const WithBoxShadowIn = {
  render: () => (
    <Frame w="200px" h="100px" bgColor="$material" boxShadow="$in" />
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

export const WithBoxShadowInOut = {
  render: () => (
    <Frame
      w="200px"
      h="100px"
      bgColor="$material"
      boxShadow="$out"
      padding="$4"
    >
      <Frame h="100%" bgColor="$material" boxShadow="$in" />
    </Frame>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

export const WithBackgroundColor = {
  render: () => (
    <Frame
      w="200px"
      h="100px"
      bgColor="$material"
      boxShadow="$out"
      padding="$4"
    >
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};
