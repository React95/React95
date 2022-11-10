import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Icmui1201_32x32_4 from '../../png/Icmui1201_32x32_4.png';
import Icmui1201_16x16_4 from '../../png/Icmui1201_16x16_4.png';

export const icmui1201Data = {
  '32x32_4': {
    imageSrc: Icmui1201_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Icmui1201_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Icmui1201Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Icmui1201: React.FC<Icmui1201Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = icmui1201Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
