import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell325_32x32_4 from '../../png/Shell325_32x32_4.png';
import Shell325_16x16_4 from '../../png/Shell325_16x16_4.png';

export const shell325Data = {
  '32x32_4': {
    imageSrc: Shell325_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shell325_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shell325Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell325: React.FC<Shell325Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell325Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
