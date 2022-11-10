import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msfs321951_32x32_4 from '../../png/Msfs321951_32x32_4.png';

export const msfs321951Data = {
  '32x32_4': {
    imageSrc: Msfs321951_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msfs321951Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Msfs321951: React.FC<Msfs321951Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msfs321951Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
