import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell3213_32x32_4 from '../../png/Shell3213_32x32_4.png';
import Shell3213_16x16_4 from '../../png/Shell3213_16x16_4.png';

export const shell3213Data = {
  '32x32_4': {
    imageSrc: Shell3213_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shell3213_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shell3213Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell3213: React.FC<Shell3213Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell3213Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
