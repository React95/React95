import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mcm3200_32x32_4 from '../../png/Mcm3200_32x32_4.png';

export const mcm3200Data = {
  '32x32_4': {
    imageSrc: Mcm3200_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mcm3200Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mcm3200: React.FC<Mcm3200Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mcm3200Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
