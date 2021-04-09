import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from '../components/Button';

import EXPLORER_VIDEO from './EXPLORER.mp4';
import Video from '../components/Video';

export default {
  title: 'Video',
  component: Video,
} as Meta;

export const Simple = () => {
  const [showVideo, toggleShowVideo] = React.useState(true);
  const [showOtherVideo, toggleOtherVideo] = React.useState(true);
  return (
    <>
      <Button
        onClick={() => {
          toggleShowVideo(true);
          toggleOtherVideo(true);
        }}
        style={{ position: 'absolute', right: 0, top: 0 }}
      >
        Show Video
      </Button>
      {showVideo && (
        <Video
          name="Trailer Sitel"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          style={{
            width: 320,
          }}
          closeModal={() => toggleShowVideo(false)}
        />
      )}
      {showOtherVideo && (
        <Video
          src={EXPLORER_VIDEO}
          name="Explorer"
          closeModal={() => toggleOtherVideo(false)}
          style={{
            width: 320,
            position: 'absolute',
            right: '30%',
            top: '10%',
          }}
        />
      )}
    </>
  );
};

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
  },
};
