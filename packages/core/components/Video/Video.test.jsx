import React from 'react';
import { waitRender } from '../shared/test/utils';
import Video from './Video';

describe('<Video />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <Video src="foo/bar/some_video.mp4" />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
