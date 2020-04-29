import React from 'react';
import { storiesOf } from '@storybook/react';
import Video from '../components/Video';

import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

storiesOf('Video', module)
  .addDecorator(withClippy)
  .add(
    'default',
    () => <Video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />,
    {
      code:
        '<Video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />',
    },
  );
