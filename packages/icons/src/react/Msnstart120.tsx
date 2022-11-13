import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msnstart120_32x32_4 from '../../png/Msnstart120_32x32_4.png';

export const msnstart120Data = {
  '32x32_4': {
    imageSrc: Msnstart120_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msnstart120Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Msnstart120: React.FC<Msnstart120Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnstart120Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
