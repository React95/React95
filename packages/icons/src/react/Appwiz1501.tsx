import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Appwiz1501_32x32_4 from '../../png/Appwiz1501_32x32_4.png';

export const appwiz1501Data = {
  '32x32_4': {
    imageSrc: Appwiz1501_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Appwiz1501Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Appwiz1501: React.FC<Appwiz1501Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = appwiz1501Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
