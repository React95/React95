import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Powercfg205_32x32_4 from '../../png/Powercfg205_32x32_4.png';

export const powercfg205Data = {
  '32x32_4': {
    imageSrc: Powercfg205_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Powercfg205Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Powercfg205: React.FC<Powercfg205Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = powercfg205Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
