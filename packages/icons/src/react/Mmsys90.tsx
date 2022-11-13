import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys90_32x32_4 from '../../png/Mmsys90_32x32_4.png';

export const mmsys90Data = {
  '32x32_4': {
    imageSrc: Mmsys90_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mmsys90Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mmsys90: React.FC<Mmsys90Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys90Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
