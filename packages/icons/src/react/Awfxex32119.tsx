import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxex32119_32x32_4 from '../../png/Awfxex32119_32x32_4.png';

export const awfxex32119Data = {
  '32x32_4': {
    imageSrc: Awfxex32119_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Awfxex32119Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Awfxex32119: React.FC<Awfxex32119Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxex32119Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
