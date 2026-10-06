import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, mocked, spyOn, waitFor } from 'storybook/test';

import { Video } from '../components/Video/Video';
import EXPLORER_VIDEO from './EXPLORER.mp4';

const meta = {
  title: 'Video',
  component: Video,
  tags: ['autodocs'],
} as Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

type Canvas = Parameters<NonNullable<Story['play']>>[0]['canvas'];

// the title shows the video's name, and "(Opening)" until it has loaded
const waitForVideo = (canvas: Canvas, name: string) =>
  waitFor(() => expect(canvas.getByText(name)).toHaveTextContent(/^\S+$/), {
    timeout: 5000,
  });

export const FromURL: Story = {
  args: {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  },
  render: args => <Video w="320px" marginBottom="$4" {...args} />,
  play: async ({ canvas }) => {
    // with no `name`, the title is the file name from `src`
    await expect(canvas.getByText(/^trailer_hd\.mp4/)).toBeVisible();
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
    },
  },
};

export const FromFile: Story = {
  args: {
    src: EXPLORER_VIDEO,
    name: 'Explorer',
  },
  render: args => <Video w="320px" {...args} />,
  play: async ({ args, canvas, canvasElement, userEvent }) => {
    // "Explorer (Opening)" until the video loads, then just its name
    await waitForVideo(canvas, args.name!);

    // and its length, 21 seconds
    await expect(canvas.getByText('00:21')).toBeVisible();

    // when the browser blocks playing it (it has sound, and the user hasn't
    // clicked the page yet), the video stays paused and Video only warns
    const video = canvasElement.querySelector('video')!;

    await userEvent.click(canvas.getAllByRole('button')[0]);

    await expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('blocked playback'),
    );
    await expect(video).toHaveProperty('paused', true);

    // playing works again, for whoever clicks it
    mocked(HTMLMediaElement.prototype.play).mockRestore();
  },
  // the browser only blocks playback until the user's first click on the
  // page, so it's simulated, for the story to behave the same every time
  beforeEach: () => {
    const play = spyOn(HTMLMediaElement.prototype, 'play')
      .mockName('video.play')
      .mockRejectedValue(new DOMException('Blocked', 'NotAllowedError'));
    const warn = spyOn(console, 'warn').mockName('console.warn');

    return () => {
      play.mockRestore();
      warn.mockRestore();
    };
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
    },
  },
};

// browsers only play muted videos without a click from the user, so this one
// is muted, to test playing it
export const Playback: Story = {
  args: {
    src: EXPLORER_VIDEO,
    name: 'Explorer',
    videoProps: { muted: true },
  },
  render: args => <Video w="320px" {...args} />,
  play: async ({ args, canvas, canvasElement, userEvent }) => {
    await waitForVideo(canvas, args.name!);

    const video = canvasElement.querySelector('video')!;
    const progress = canvas.getByRole('slider');
    // the controls have no accessible name yet (#554), so they go by order
    const [playPause, stop] = canvas.getAllByRole('button');

    // Play plays it, and the bar follows it
    await userEvent.click(playPause);

    await waitFor(() => expect(video).toHaveProperty('paused', false));
    await waitFor(() => expect(progress).not.toHaveValue('0'), {
      timeout: 3000,
    });

    // the same button pauses it
    await userEvent.click(playPause);

    await expect(video).toHaveProperty('paused', true);

    // Stop pauses it and goes back to the start
    await userEvent.click(playPause);
    await waitFor(() => expect(video).toHaveProperty('paused', false));
    await userEvent.click(stop);

    await expect(video).toHaveProperty('paused', true);
    await expect(video).toHaveProperty('currentTime', 0);

    // moving the bar seeks the video (fireEvent, since userEvent can't drag
    // a slider)
    await fireEvent.change(progress, { target: { value: '50' } });

    await expect(video).toHaveProperty('currentTime', video.duration / 2);

    // at the end, it stops and the bar goes back to the start
    await fireEvent.change(progress, { target: { value: '99' } });
    await userEvent.click(playPause);

    await waitFor(() => expect(video).toHaveProperty('ended', true), {
      timeout: 3000,
    });
    await expect(progress).toHaveValue('0');
  },
};
