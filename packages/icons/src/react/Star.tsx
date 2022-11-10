import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Star_32x32_4 from '../../png/Star_32x32_4.png';
import Star_16x16_4 from '../../png/Star_16x16_4.png';

export const starData = {
  '32x32_4': {
    imageSrc: Star_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Star_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface StarProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Star: React.FC<StarProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = starData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
