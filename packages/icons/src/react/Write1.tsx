import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Write1_32x32_4 from '../../png/Write1_32x32_4.png';
import Write1_16x16_4 from '../../png/Write1_16x16_4.png';

export const write1Data = {
  '32x32_4': {
    imageSrc: Write1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Write1_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Write1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Write1: React.FC<Write1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = write1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
