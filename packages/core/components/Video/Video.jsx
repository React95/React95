import React, { useRef, useState } from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import Btn from '../shared-style/Btn';
import { Frame, Range, Icon } from '..';
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

const arrayFy = (str) => [].concat(str);

function updateProgressBar(player, updateProgress) {
  const percentage = Math.floor((100 / player.duration) * player.currentTime);

  updateProgress(percentage);
}

const Video = ({ src, ...props }) => {
  const [playing, setPlaying] = useState(false);
  const [loadeddata, setLoadeddata] = useState(false);
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
    player.current.addEventListener(
      'loadeddata',
      () => {
        setLoadeddata(true);
      },
      false,
    );
  }, [player.current]);

  return (
    <Frame p={2}>
      <TitleBar>{name.replace(/^.*[\\\/]/, '')}</TitleBar>
      <VideoTag {...props} ref={player}>
        {paths.map((s) => (
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
            setPlaying((playing) => !playing);
          }}
        >
          {loadeddata ? (playing ? 'Pause' : '►') : 'Waiting'}
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

        <Range
          ref={progressRef}
          min="0"
          max="100"
          step="1"
          value={progress}
          onClick={(e) => {
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
