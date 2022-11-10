import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import MediaCd_32x32_4 from '../../png/MediaCd_32x32_4.png';
import MediaCd_16x16_4 from '../../png/MediaCd_16x16_4.png';

export const mediaCdData = {
  '32x32_4': {
    imageSrc: MediaCd_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: MediaCd_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MediaCdProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const MediaCd: React.FC<MediaCdProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mediaCdData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
