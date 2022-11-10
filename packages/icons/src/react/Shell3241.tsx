import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell3241_32x32_4 from '../../png/Shell3241_32x32_4.png';
import Shell3241_16x16_4 from '../../png/Shell3241_16x16_4.png';

export const shell3241Data = {
  '32x32_4': {
    imageSrc: Shell3241_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shell3241_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shell3241Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell3241: React.FC<Shell3241Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell3241Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
