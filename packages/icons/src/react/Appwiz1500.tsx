import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Appwiz1500_32x32_4 from '../../png/Appwiz1500_32x32_4.png';
import Appwiz1500_16x16_4 from '../../png/Appwiz1500_16x16_4.png';

export const appwiz1500Data = {
  '32x32_4': {
    imageSrc: Appwiz1500_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Appwiz1500_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Appwiz1500Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Appwiz1500: React.FC<Appwiz1500Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = appwiz1500Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
