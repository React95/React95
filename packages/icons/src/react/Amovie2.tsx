import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Amovie2_32x32_4 from '../../png/Amovie2_32x32_4.png';
import Amovie2_16x16_4 from '../../png/Amovie2_16x16_4.png';

export const amovie2Data = {
  '32x32_4': {
    imageSrc: Amovie2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Amovie2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Amovie2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Amovie2: React.FC<Amovie2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = amovie2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
