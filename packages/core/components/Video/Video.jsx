import React, { useRef, useState } from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import Btn from '../shared-style/Btn';
import { Frame, Range } from '..';
import { useEffect } from 'react';

const VideoTag = styled.video`
  width: 100%;
`;

const Source = ({ src }) => (
  <source src={src} type={`video/${src.substring(src.length - 3)}`} />
);

const ControlBtn = styled(Btn)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &&,
  &:active,
  &:focus {
    width: 25px;
    height: 25px;
    padding: 7;
  }
`;

const TitleBar = styled.div`
  height: 18px;
  margin-bottom: 2;

  color: ${th('colors.white')};
  padding: 2 2 0;

  display: flex;
  background-color: primary;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  padding: 2;
`;

const VideoProgress = styled(Range)`
  ::-webkit-slider-runnable-track,
  &:focus::-webkit-slider-runnable-track {
    background-color: ${th('colors.white')};
  }

  ::-webkit-slider-runnable-track {
    height: 16px;

    box-shadow: ${th('shadows.input')};

    border-bottom: unset;
    border-right: unset;

    border-top-width: 1;
    border-top-color: grays.3;
    border-left-width: 1;
    border-left-color: grays.3;
  }

  ::-webkit-slider-thumb {
    height: 25px;
    margin-top: -5px;
  }
`;

const arrayFy = str => [].concat(str);

function updateProgressBar(player, updateProgress) {
  const percentage = Math.floor((100 / player.duration) * player.currentTime);

  updateProgress(percentage);
}

const Video = ({ src, ...props }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const player = useRef(null);
  const progressRef = useRef(null);

  const paths = arrayFy(src);
  const [name] = paths;

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
        updateProgressBar(player.current, setProgress);
      },
      false,
    );
  }, [player.current]);

  return (
    <Frame p={2}>
      <TitleBar>{name.replace(/^.*[\\\/]/, '')}</TitleBar>
      <VideoTag {...props} ref={player}>
        {paths.map(s => (
          <Source src={s} />
        ))}
      </VideoTag>
      <Controls>
        <ControlBtn
          onClick={() => {
            if (!playing) {
              player.current.play();
            } else {
              player.current.pause();
            }
            setPlaying(playing => !playing);
          }}
        >
          {playing ? 'Pause' : '►'}
        </ControlBtn>
        <ControlBtn
          onClick={() => {
            player.current.pause();
            if (player.current.currentTime) {
              player.current.currentTime = 0;
            }
            setPlaying(false);
          }}
        >
          ■
        </ControlBtn>

        <VideoProgress
          ref={progressRef}
          min="0"
          max="100"
          step="1"
          value={progress}
          onClick={e => {
            const { current: el } = progressRef;
            const { current: video } = player;

            const percent = e.nativeEvent.offsetX / el.offsetWidth;

            video.currentTime = percent * video.duration;

            setProgress(Math.floor(percent / 100));
          }}
        />
      </Controls>
    </Frame>
  );
};
export default Video;
