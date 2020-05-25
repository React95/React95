import React from 'react';
import { waitRender, fireEvent, act } from '../shared/test/utils';
import Video from './Video';
import { PLAY_DATA_TEST_ID, PAUSE_DATA_TEST_ID } from './buttons';

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
    beforeAll(() => {
      // Get and set video duration
      Object.defineProperty(
        global.window.HTMLMediaElement.prototype,
        'duration',
        {
          writable: true,
        },
      );
      Object.defineProperty(
        global.window.HTMLMediaElement.prototype,
        'currentTime',
        {
          writable: true,
        },
      );
      Object.defineProperty(
        global.window.HTMLElement.prototype,
        'offsetWidth',
        {
          writable: true,
        },
      );
    });

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
      act(() => {
        video.dispatchEvent(new window.Event('loadeddata'));
      });

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

    it('should change range when video updates', async () => {
      const { container } = await waitRender(
        <Video src="foo/bar/some_video.mp4" />,
      );

      const video = container.querySelector('video');
      // 60s video
      video.duration = 60;
      video.currentTime = 0;

      const videoRange = container.querySelector('input');

      expect(videoRange.value).toBe('0');

      act(() => {
        video.currentTime = 1;
        video.dispatchEvent(new window.Event('timeupdate'));
      });

      expect(videoRange.value).not.toBe('0');
    });

    it('should update video when range updates', async () => {
      class ExtendableMouseEvent extends MouseEvent {
        constructor(type, values) {
          const { offsetX, ...mouseValues } = values;
          super(type, { ...mouseValues, bubbles: true, cancelable: true });

          Object.assign(this, {
            offsetX: offsetX || 0,
          });
        }
      }

      const { container } = await waitRender(
        <Video src="foo/bar/some_video.mp4" />,
      );

      const video = container.querySelector('video');
      // 60s video
      video.duration = 60;
      video.currentTime = 0;

      const videoRange = container.querySelector('input');
      videoRange.offsetWidth = 100;

      expect(videoRange.value).toBe('0');

      act(() => {
        fireEvent(
          videoRange,
          new ExtendableMouseEvent('click', {
            // forward 10%
            offsetX: 10,
          }),
        );
      });

      expect(video.currentTime).toBeGreaterThan(0);
    });

    describe('when video ends', () => {
      const duration = 60;
      const currentTime = duration / 2;

      const getElements = async () => {
        const { container, getByTestId } = await waitRender(
          <Video src="foo/bar/some_video.mp4" />,
        );

        const video = container.querySelector('video');

        video.duration = duration;
        video.currentTime = currentTime;

        return {
          container,
          video,
          getByTestId,
          range: container.querySelector('input'),
        };
      };

      it('should update range input', async () => {
        const { video, range } = await getElements();

        act(() => {
          video.dispatchEvent(new window.Event('timeupdate'));
        });
        expect(range.value).toBe(String((currentTime / duration) * 100));

        act(() => {
          video.dispatchEvent(new window.Event('ended'));
        });
        expect(range.value).toBe('0');
      });

      it('should update play/pause button', async () => {
        const { video, getByTestId } = await getElements();

        act(() => {
          video.dispatchEvent(new window.Event('loadeddata'));
          video.dispatchEvent(new window.Event('playing'));
        });
        expect(getByTestId(PAUSE_DATA_TEST_ID)).toBeTruthy();

        act(() => {
          video.dispatchEvent(new window.Event('ended'));
        });
        expect(getByTestId(PLAY_DATA_TEST_ID)).toBeTruthy();
      });
    });
  });
});
