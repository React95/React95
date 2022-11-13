import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcfg2302_32x32_4 from '../../png/Inetcfg2302_32x32_4.png';

export const inetcfg2302Data = {
  '32x32_4': {
    imageSrc: Inetcfg2302_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Inetcfg2302Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Inetcfg2302: React.FC<Inetcfg2302Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcfg2302Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
