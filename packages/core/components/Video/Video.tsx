import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import Btn from '../shared-style/Btn';
import Frame, { FrameProps } from '../Frame/Frame';
import Range from '../Range';
import Icon from '../Icon';
import { Play, Pause, Stop } from './buttons';
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

const ControlBtn = styled(Btn)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

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
          fill: ${th('colors.grays.3')};
          border-bottom: 1px solid white;
          border-right: 1px solid white;
        }
      `}
  }
`;

const TitleBar = styled.div`
  height: 18px;
  margin-bottom: 2;

  color: ${th('colors.white')};
  padding: 0 2;

  display: flex;
  align-items: center;
  background-color: primary;
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
  background-color: ${th('colors.black')};
  height: 50px;

  color: white;
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

const Video: React.FC<VideoProps> = ({
  name,
  src,
  videoProps,
  style,
  ...props
}) => {
  const [playing, setPlaying] = React.useState(false);
  const [loadeddata, setLoadeddata] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const player = React.useRef<HTMLVideoElement>(null);
  const progressRef = React.useRef<HTMLInputElement>(null);

  const paths = arrayFy(src);
  const [pathname] = paths;

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
      {...(props as typeof Frame)}
      style={{
        width: !loadeddata ? 260 : undefined,
        ...style,
      }}
    >
      <TitleBar>
        <Icon
          name="mplayer_1_13_16x16_4bit"
          style={{ marginRight: 4, width: 16, height: 16 }}
        />
        {name || pathname.replace(/^.*[\\/]/, '')}
        {!loadeddata && ' (Openning)'}
      </TitleBar>
      <VideoTag {...videoProps} visible={loadeddata} ref={player}>
        {paths.map(s => (
          <Source key={s} src={s} />
        ))}
      </VideoTag>
      {loadeddata && (
        <Divider as="span" style={{ display: 'block', marginBottom: 2 }} />
      )}
      <ResetFrame maxWidth={250} mx="auto" mb={4}>
        <CountDownContainer>
          <ResetFrame display="flex" flexDirection="column" width="40%">
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
          <ResetFrame display="flex" flexDirection="column" width="40%">
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
          >
            {loadeddata ? (
              <PlayOrPause playing={playing} />
            ) : (
              <Icon name="user_4_32x32_4bit" />
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
          >
            <Stop />
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

export default Video;
