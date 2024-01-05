import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { Mplayer113, User4 } from '@react95/icons';

import Frame, { FrameProps } from '../Frame/Frame';
import Button from '../Button';
import Range from '../Range';
import TitleBar from '../TitleBar';
import { Play, Pause, Stop, Fullscreen } from './buttons';
import Divider from '../List/ListDivider';

const VideoTag = styled.video<{ visible: boolean }>`
  width: 100%;
  padding: 2;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

type SourceProps = Pick<HTMLSourceElement, 'src'>;

const Source: React.FC<SourceProps> = ({ src }) => (
  <source src={src} type={`video/${src.substring(src.length - 3)}`} />
);

const ControlBtn = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: materialText;
  }

  &&,
  &:active,
  &:focus {
    width: 20px;
    height: 20px;
    padding: 7;

    ${({ disabled }) =>
      disabled &&
      css`
        padding: 4;
        svg {
          fill: borderDark;
          border-bottom: 1px solid;
          border-bottom-color: borderLightest;
          border-right: 1px solid;
          border-right-color: borderLightest;
        }
      `}
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  padding: 2 0;
`;

const CountDownContainer = styled(Frame)`
  display: flex;
  padding: 6;
  margin-bottom: 4;

  box-shadow: in;
  background-color: canvas;
  height: 50px;

  color: canvasText;
`;

const VideoFont = styled.span`
  font-family: 'React95Video-Numbers';
  text-transform: uppercase;
`;

const ResetFrame = styled(Frame)`
  background-color: transparent;
  box-shadow: none;
`;

const VideoRange = styled(Range)`
  &::-webkit-slider-thumb {
    height: 18px;
    margin-top: -7px;
    width: 10px;
  }

  &[value='0']::-webkit-slider-thumb {
    margin-left: -2px;
  }
`;

const PlayOrPause = ({ playing }: { playing: boolean }) =>
  playing ? <Pause /> : <Play />;

const arrayFy = (str: string | string[]) => ([] as string[]).concat(str);

function updateProgressBar(
  player: HTMLVideoElement,
  updateProgress: (value: number) => void,
) {
  const percentage = Math.floor((100 / player.duration) * player.currentTime);

  updateProgress(percentage);
}

function parseCurrentTime(secs: number): string {
  if (!secs) {
    return '00:00';
  }

  const sec = parseInt(secs.toString(), 10);
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor(sec / 60) % 60;
  const seconds = sec % 60;

  return [hours, minutes, seconds]
    .map(v => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
}

export type VideoProps = {
  name?: string;
  src: string;
  videoProps?: React.HTMLAttributes<HTMLVideoElement>;
  style?: React.CSSProperties;
} & FrameProps;

export type VideoRefs = {
  video: React.Ref<HTMLVideoElement>;
  progress: React.Ref<HTMLInputElement>;
  wrapper: React.Ref<HTMLDivElement>;
  playpause: React.Ref<HTMLButtonElement>;
  stop: React.Ref<HTMLButtonElement>;
  fullScreen: React.Ref<HTMLButtonElement>;
};

const VideoRenderer = (
  { name, src, videoProps, style, ...props }: VideoProps,
  ref: React.Ref<VideoRefs>,
) => {
  const [playing, setPlaying] = React.useState(false);
  const [loadeddata, setLoadeddata] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const player = React.useRef<HTMLVideoElement>(null);
  const progressRef = React.useRef<HTMLInputElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const playPauseRef = React.useRef<HTMLButtonElement>(null);
  const stopRef = React.useRef<HTMLButtonElement>(null);
  const fullScreenRef = React.useRef<HTMLButtonElement>(null);

  const paths = arrayFy(src);
  const [pathname] = paths;

  const normalizedName = name || pathname.replace(/^.*[\\/]/, '');
  const title = `${normalizedName}${!loadeddata ? ' (Opening)' : ''}`;

  React.useImperativeHandle(ref, () => ({
    get video() {
      return player;
    },
    get progress() {
      return progressRef;
    },
    get wrapper() {
      return wrapperRef;
    },
    get playpause() {
      return playPauseRef;
    },
    get stop() {
      return stopRef;
    },
    get fullScreen() {
      return fullScreenRef;
    },
  }));

  React.useEffect(() => {
    player.current?.addEventListener(
      'ended',
      () => {
        setPlaying(false);
        setProgress(0);
      },
      false,
    );

    player.current?.addEventListener(
      'timeupdate',
      () => {
        if (player.current) {
          updateProgressBar(player.current, setProgress);
        }
      },
      false,
    );

    player.current?.addEventListener(
      'loadeddata',
      () => {
        setLoadeddata(true);
      },
      false,
    );

    player.current?.addEventListener(
      'playing',
      () => {
        setPlaying(true);
      },
      false,
    );
  }, [player.current]);

  return (
    <Frame
      p={2}
      {...(props as typeof Frame as object)}
      style={{
        width: !loadeddata ? 260 : undefined,
        ...style,
      }}
      ref={wrapperRef}
    >
      <TitleBar icon={<Mplayer113 variant="16x16_4" />} title={title} />
      <VideoTag {...videoProps} visible={loadeddata} ref={player}>
        {paths.map(s => (
          <Source key={s} src={s} />
        ))}
      </VideoTag>
      {loadeddata && (
        <Divider as="span" style={{ display: 'block', marginBottom: 2 }} />
      )}
      <ResetFrame maxWidth="250" mx="auto" mb={4}>
        <CountDownContainer>
          <ResetFrame display="flex" flexDirection="column" w="40%">
            <VideoFont
              style={{
                marginTop: 'auto',
              }}
            >
              {player.current && parseCurrentTime(player.current.duration)}
            </VideoFont>

            <VideoFont style={{ height: 12 }}>
              {!loadeddata && 'Openning'}
            </VideoFont>
          </ResetFrame>
          <ResetFrame display="flex" flexDirection="column" w="40%">
            <VideoFont
              style={{
                marginTop: 'auto',
                fontSize: 22,
              }}
            >
              {player.current && parseCurrentTime(player.current.currentTime)}
            </VideoFont>

            <VideoFont style={{ height: 12 }}>time</VideoFont>
          </ResetFrame>
        </CountDownContainer>
        <Controls>
          <ControlBtn
            disabled={!loadeddata}
            onClick={() => {
              if (!playing) {
                player.current?.play();
              } else {
                player.current?.pause();
              }
              setPlaying(!playing);
            }}
            ref={playPauseRef}
          >
            {loadeddata ? (
              <PlayOrPause playing={playing} />
            ) : (
              <User4
                style={{ borderRight: 'none', borderBottom: 'none' }}
                variant="32x32_4"
              />
            )}
          </ControlBtn>
          <ControlBtn
            disabled={!loadeddata}
            onClick={() => {
              if (player.current) {
                player.current.pause();
                player.current.currentTime = 0;
              }

              setPlaying(false);
            }}
            ref={stopRef}
          >
            <Stop />
          </ControlBtn>
          <ControlBtn
            disabled={!loadeddata}
            onClick={() => {
              player?.current?.requestFullscreen();
            }}
            ref={fullScreenRef}
          >
            <Fullscreen />
          </ControlBtn>

          <VideoRange
            ref={progressRef}
            min="0"
            max="100"
            step="1"
            value={progress}
            style={{
              width: '70%',
              marginLeft: 20,
            }}
            onClick={e => {
              const { current: el } = progressRef;
              const { current: video } = player;

              if (video && el) {
                const percent = e.nativeEvent.offsetX / el.offsetWidth;

                video.currentTime = percent * video.duration;

                setProgress(Math.floor(percent / 100));
              }
            }}
          />
        </Controls>
      </ResetFrame>
    </Frame>
  );
};

const Video = React.forwardRef<VideoRefs, VideoProps>(VideoRenderer);

export default Video;
