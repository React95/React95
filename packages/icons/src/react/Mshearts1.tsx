import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshearts1_32x32_4 from '../../png/Mshearts1_32x32_4.png';

export const mshearts1Data = {
  '32x32_4': {
    imageSrc: Mshearts1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mshearts1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mshearts1: React.FC<Mshearts1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mshearts1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
