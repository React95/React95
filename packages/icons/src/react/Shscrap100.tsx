import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shscrap100_32x32_4 from '../../png/Shscrap100_32x32_4.png';
import Shscrap100_16x16_4 from '../../png/Shscrap100_16x16_4.png';

export const shscrap100Data = {
  '32x32_4': {
    imageSrc: Shscrap100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shscrap100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shscrap100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shscrap100: React.FC<Shscrap100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shscrap100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
