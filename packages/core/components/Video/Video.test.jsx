import React from 'react';
import { waitRender, fireEvent, act } from '../shared/test/utils';
import Video from './Video';

const originalError = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalError;
});

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

      const { container, getByLabelText } = await waitRender(
        <Video src="foo/bar/some_video.mp4" />,
      );

      const video = container.querySelector('video');
      act(() => {
        video.dispatchEvent(new window.Event('loadeddata'));
      });

      // Play
      fireEvent.click(getByLabelText('play'));
      // Pause
      fireEvent.click(getByLabelText('pause'));
      // Stop
      fireEvent.click(getByLabelText('stop'));

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
        const { container, queryAllByLabelText } = await waitRender(
          <Video src="foo/bar/some_video.mp4" />,
        );

        const video = container.querySelector('video');

        video.duration = duration;
        video.currentTime = currentTime;

        return {
          video,
          queryAllByLabelText,
          range: container.querySelector('input'),
        };
      };

      it('should update range input', async () => {
        const { video, range } = await getElements();
        const expectedRangeValue = String((currentTime / duration) * 100);

        act(() => {
          video.dispatchEvent(new window.Event('timeupdate'));
        });
        expect(range.value).toBe(expectedRangeValue);

        act(() => {
          video.dispatchEvent(new window.Event('ended'));
        });
        expect(range.value).toBe('0');
      });

      it('should update play/pause button', async () => {
        const { video, queryAllByLabelText } = await getElements();

        act(() => {
          video.dispatchEvent(new window.Event('loadeddata'));
          video.dispatchEvent(new window.Event('playing'));
        });
        expect(queryAllByLabelText('pause')).toHaveLength(1);
        expect(queryAllByLabelText('play')).toHaveLength(0);

        act(() => {
          video.dispatchEvent(new window.Event('ended'));
        });
        expect(queryAllByLabelText('play')).toHaveLength(1);
        expect(queryAllByLabelText('pause')).toHaveLength(0);
      });
    });
  });
});
