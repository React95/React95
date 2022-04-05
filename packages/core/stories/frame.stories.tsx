import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Frame from '../components/Frame';

export default {
  title: 'Frame',
  component: Frame,
} as Meta;

export const Simple = () => <Frame w={200} h={100} />;

Simple.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
  },
};

export const WithBoxShadowIn = () => <Frame w={200} h={100} boxShadow="in" />;

WithBoxShadowIn.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
  },
};

export const WithBoxShadowInOut = () => (
  <Frame w={200} h={100} padding={4}>
    <Frame h="100%" boxShadow="in" />
  </Frame>
);

WithBoxShadowInOut.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
  },
};

export const WithBackgroundColor = () => (
  <Frame w={200} h={100} padding={4}>
    <Frame h="100%" boxShadow="in" bg="white" />
  </Frame>
);

WithBackgroundColor.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
  },
};
