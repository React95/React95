import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Lights100_32x32_4 from '../../png/Lights100_32x32_4.png';
import Lights100_16x16_4 from '../../png/Lights100_16x16_4.png';

export const lights100Data = {
  '32x32_4': {
    imageSrc: Lights100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Lights100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Lights100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Lights100: React.FC<Lights100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = lights100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
