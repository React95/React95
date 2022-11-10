import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Timedate200_32x32_4 from '../../png/Timedate200_32x32_4.png';
import Timedate200_16x16_4 from '../../png/Timedate200_16x16_4.png';

export const timedate200Data = {
  '32x32_4': {
    imageSrc: Timedate200_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Timedate200_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Timedate200Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Timedate200: React.FC<Timedate200Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = timedate200Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
