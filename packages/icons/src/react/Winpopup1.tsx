import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Winpopup1_32x32_4 from '../../png/Winpopup1_32x32_4.png';
import Winpopup1_16x16_4 from '../../png/Winpopup1_16x16_4.png';

export const winpopup1Data = {
  '32x32_4': {
    imageSrc: Winpopup1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Winpopup1_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Winpopup1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Winpopup1: React.FC<Winpopup1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = winpopup1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
