import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcfg2301_32x32_4 from '../../png/Inetcfg2301_32x32_4.png';

export const inetcfg2301Data = {
  '32x32_4': {
    imageSrc: Inetcfg2301_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Inetcfg2301Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Inetcfg2301: React.FC<Inetcfg2301Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcfg2301Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
