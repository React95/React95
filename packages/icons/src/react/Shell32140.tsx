import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell32140_32x32_4 from '../../png/Shell32140_32x32_4.png';
import Shell32140_16x16_4 from '../../png/Shell32140_16x16_4.png';

export const shell32140Data = {
  '32x32_4': {
    imageSrc: Shell32140_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shell32140_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shell32140Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell32140: React.FC<Shell32140Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell32140Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
