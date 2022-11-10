import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import MediaVideo_32x32_4 from '../../png/MediaVideo_32x32_4.png';
import MediaVideo_16x16_4 from '../../png/MediaVideo_16x16_4.png';

export const mediaVideoData = {
  '32x32_4': {
    imageSrc: MediaVideo_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: MediaVideo_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MediaVideoProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const MediaVideo: React.FC<MediaVideoProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mediaVideoData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
