import type { Meta } from '@storybook/react';
import * as React from 'react';

import Frame from '../components/Frame';

export default {
  title: 'Frame',
  component: Frame,
  tags: ['autodocs'],
} as Meta<typeof Frame>;

export const Simple = {
  render: () => <Frame w={200} h={100} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

export const WithBoxShadowIn = {
  render: () => <Frame w={200} h={100} boxShadow="in" />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

export const WithBoxShadowInOut = {
  render: () => (
    <Frame w={200} h={100} padding={4}>
      <Frame h="100%" boxShadow="in" />
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
    <Frame w={200} h={100} padding={4}>
      <Frame h="100%" boxShadow="in" bg="white" />
    </Frame>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};
