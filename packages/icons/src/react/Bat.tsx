import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Bat_32x32_4 from '../../png/Bat_32x32_4.png';
import Bat_16x16_4 from '../../png/Bat_16x16_4.png';

export const batData = {
  '32x32_4': {
    imageSrc: Bat_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Bat_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface BatProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Bat: React.FC<BatProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = batData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
