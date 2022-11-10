import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell323_32x32_4 from '../../png/Shell323_32x32_4.png';
import Shell323_16x16_4 from '../../png/Shell323_16x16_4.png';

export const shell323Data = {
  '32x32_4': {
    imageSrc: Shell323_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shell323_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shell323Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell323: React.FC<Shell323Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell323Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
