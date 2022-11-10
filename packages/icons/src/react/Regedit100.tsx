import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regedit100_32x32_4 from '../../png/Regedit100_32x32_4.png';
import Regedit100_16x16_4 from '../../png/Regedit100_16x16_4.png';

export const regedit100Data = {
  '32x32_4': {
    imageSrc: Regedit100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Regedit100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Regedit100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Regedit100: React.FC<Regedit100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = regedit100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
