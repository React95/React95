import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Video } from '../components/Video/Video';
import EXPLORER_VIDEO from './EXPLORER.mp4';

export default {
  title: 'Video',
  component: Video,
  tags: ['autodocs'],
} as Meta<typeof Video>;

export const FromURL = {
  render: () => (
    <Video
      w="320px"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      style={{
        marginBottom: 4,
      }}
    />
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
    },
  },
};

export const FromFile = {
  render: () => <Video w="320px" src={EXPLORER_VIDEO} name="Explorer" />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
    },
  },
};
