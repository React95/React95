import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell3240_16x16_4 from '../../png/Shell3240_16x16_4.png';
import Shell3240_32x32_4 from '../../png/Shell3240_32x32_4.png';

export const shell3240Data = {
  '16x16_4': {
    imageSrc: Shell3240_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_4': {
    imageSrc: Shell3240_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Shell3240Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4' | '32x32_4';
}

export const Shell3240: React.FC<Shell3240Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = shell3240Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
