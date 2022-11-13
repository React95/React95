import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxex32118_32x32_4 from '../../png/Awfxex32118_32x32_4.png';

export const awfxex32118Data = {
  '32x32_4': {
    imageSrc: Awfxex32118_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Awfxex32118Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Awfxex32118: React.FC<Awfxex32118Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxex32118Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
