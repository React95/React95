import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import EXPLORER_VIDEO from './EXPLORER.mp4';
import Video from '../components/Video';

export default {
  title: 'Video',
  component: Video,
} as Meta;

export const FromURL = () => (
  <Video
    width={320}
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    style={{
      marginBottom: 4,
    }}
  />
);

export const FromFile = () => (
  <Video width={320} src={EXPLORER_VIDEO} name="Explorer" ref={videoRef} />
);

FromURL.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
  },
};

FromFile.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
  },
};
