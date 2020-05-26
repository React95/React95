import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { string, shape, bool } from 'prop-types';

import Btn from '../shared-style/Btn';
import { Frame, Range, Icon } from '..';
import { Play, Pause, Stop } from './buttons';
import Divider from '../List/ListDivider';

const VideoTag = styled.video`
  width: 100%;
  padding: 2;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const Source = ({ src }) => (
  <source src={src} type={`video/${src.substring(src.length - 3)}`} />
);

Source.propTypes = {
  src: string.isRequired,
};

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

const PlayOrPause = ({ playing }) => (playing ? <Pause /> : <Play />);
PlayOrPause.propTypes = {
  playing: bool.isRequired,
};

const arrayFy = str => [].concat(str);

function updateProgressBar(player, updateProgress) {
  const percentage = Math.floor((100 / player.duration) * player.currentTime);

  updateProgress(percentage);
}

function parseCurrentTime(secs) {
  if (!secs) {
    return '00:00';
  }

  const sec = parseInt(secs, 10);
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor(sec / 60) % 60;
  const seconds = sec % 60;

  return [hours, minutes, seconds]
    .map(v => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
}

const Video = ({ src, name, videoProps, style, ...props }) => {
  const [playing, setPlaying] = useState(false);
  const [loadeddata, setLoadeddata] = useState(false);
  const [progress, setProgress] = useState(0);
  const player = useRef(null);
  const progressRef = useRef(null);

  const paths = arrayFy(src);
  const [pathname] = paths;

  useEffect(() => {
    player.current.addEventListener(
      'ended',
      () => {
        setPlaying(false);
        setProgress(0);
      },
      false,
    );
    player.current.addEventListener(
      'timeupdate',
      () => {
        updateProgressBar(player.current || {}, setProgress);
      },
      false,
    );
    player.current.addEventListener(
      'loadeddata',
      () => {
        setLoadeddata(true);
      },
      false,
    );
    player.current.addEventListener(
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
      {...props}
      style={{
        width: !loadeddata ? 260 : undefined,
        ...style,
      }}
    >
      <TitleBar>
        <Icon name="mplayer_1_13" size={16} style={{ marginRight: 4 }} />
        {name || pathname.replace(/^.*[\\/]/, '')}
        {!loadeddata && ' (Openning)'}
      </TitleBar>
      <VideoTag {...videoProps} ref={player} visible={loadeddata}>
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
              {parseCurrentTime(player.current?.duration)}
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
              {parseCurrentTime(player.current?.currentTime)}
            </VideoFont>

            <VideoFont style={{ height: 12 }}>time</VideoFont>
          </ResetFrame>
        </CountDownContainer>
        <Controls>
          <ControlBtn
            disabled={!loadeddata}
            onClick={() => {
              if (!playing) {
                player.current.play();
              } else {
                player.current.pause();
              }
              setPlaying(!playing);
            }}
          >
            {loadeddata ? (
              <PlayOrPause playing={playing} />
            ) : (
              <Icon
                name="user_4"
                width={16}
                height={16}
                style={{ marginTop: -2 }}
              />
            )}
          </ControlBtn>
          <ControlBtn
            disabled={!loadeddata}
            onClick={() => {
              player.current.pause();
              if (player.current.currentTime) {
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

              const percent = e.nativeEvent.offsetX / el.offsetWidth;

              video.currentTime = percent * video.duration;

              setProgress(Math.floor(percent / 100));
            }}
          />
        </Controls>
      </ResetFrame>
    </Frame>
  );
};

Video.propTypes = {
  name: string,
  src: string.isRequired,
  videoProps: shape({}),
  style: shape({}),
};

Video.defaultProps = {
  name: '',
  videoProps: {},
  style: {},
};

export default Video;
