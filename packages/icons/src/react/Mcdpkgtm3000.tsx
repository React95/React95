import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mcdpkgtm3000_32x32_4 from '../../png/Mcdpkgtm3000_32x32_4.png';
import Mcdpkgtm3000_16x16_4 from '../../png/Mcdpkgtm3000_16x16_4.png';

export const mcdpkgtm3000Data = {
  '32x32_4': {
    imageSrc: Mcdpkgtm3000_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mcdpkgtm3000_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mcdpkgtm3000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mcdpkgtm3000: React.FC<Mcdpkgtm3000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mcdpkgtm3000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
