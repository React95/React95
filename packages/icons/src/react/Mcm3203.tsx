import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mcm3203_32x32_4 from '../../png/Mcm3203_32x32_4.png';

export const mcm3203Data = {
  '32x32_4': {
    imageSrc: Mcm3203_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mcm3203Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mcm3203: React.FC<Mcm3203Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mcm3203Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
