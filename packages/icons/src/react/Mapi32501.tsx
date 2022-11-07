import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mapi32501_32x32_4 from '../../png/Mapi32501_32x32_4.png';
import Mapi32501_16x16_4 from '../../png/Mapi32501_16x16_4.png';

export const mapi32501Data = {
  '32x32_4': {
    imageSrc: Mapi32501_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mapi32501_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mapi32501Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mapi32501: React.FC<Mapi32501Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mapi32501Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
