import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcpl1317_32x32_4 from '../../png/Inetcpl1317_32x32_4.png';
import Inetcpl1317_16x16_4 from '../../png/Inetcpl1317_16x16_4.png';

export const inetcpl1317Data = {
  '32x32_4': {
    imageSrc: Inetcpl1317_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Inetcpl1317_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Inetcpl1317Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Inetcpl1317: React.FC<Inetcpl1317Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcpl1317Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
