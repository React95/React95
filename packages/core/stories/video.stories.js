import React from 'react';
import { storiesOf } from '@storybook/react';

import EXPLORER_VIDEO from './EXPLORER.mp4';
import Video from '../components/Video';

import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

const code = `<Video
  width={320}
  name="Explorer"
  src="some_video.mp4"
  videoProps={{
    controls: true,
  }}
/>`;

storiesOf('Video', module)
  .addDecorator(withClippy)
  .add(
    'default',
    () => (
      <>
        <Video
          width={320}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          style={{
            marginBottom: 4,
          }}
        />

        <Video width={320} src={EXPLORER_VIDEO} name="Explorer" />
      </>
    ),
    {
      code,
    },
  );
