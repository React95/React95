import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Inetcpl4432_32x32_4 from '../../png/Inetcpl4432_32x32_4.png';

export const inetcpl4432Data = {
  '32x32_4': {
    imageSrc: Inetcpl4432_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Inetcpl4432Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Inetcpl4432: React.FC<Inetcpl4432Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = inetcpl4432Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
