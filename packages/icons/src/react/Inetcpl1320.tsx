import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcpl1320_32x32_4 from '../../png/Inetcpl1320_32x32_4.png';

export const inetcpl1320Data = {
  '32x32_4': {
    imageSrc: Inetcpl1320_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Inetcpl1320Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Inetcpl1320: React.FC<Inetcpl1320Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcpl1320Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
