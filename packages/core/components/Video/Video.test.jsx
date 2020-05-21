import React from 'react';
import { waitRender, fireEvent, act } from '../shared/test/utils';
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

  describe('events', () => {
    it('should play, pause, and stop', async () => {
      const playStub = jest
        .spyOn(window.HTMLMediaElement.prototype, 'play')
        .mockImplementation(() => {});
      const pauseStub = jest
        .spyOn(window.HTMLMediaElement.prototype, 'pause')
        .mockImplementation(() => {});

      const { container } = await waitRender(
        <Video src="foo/bar/some_video.mp4" />,
      );

      const video = container.querySelector('video');
      act(() => video.dispatchEvent(new window.Event('loadeddata')));

      const [playBtn, stopBtn] = container.querySelectorAll('button');

      // Play
      fireEvent.click(playBtn);
      // Pause
      fireEvent.click(playBtn);
      // Stop
      fireEvent.click(stopBtn);

      expect(playStub).toHaveBeenCalled();
      // Pause + Stop
      expect(pauseStub).toHaveBeenCalledTimes(2);
    });
  });
});
