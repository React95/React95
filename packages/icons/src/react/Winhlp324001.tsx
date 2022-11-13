import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Winhlp324001_32x32_4 from '../../png/Winhlp324001_32x32_4.png';
import Winhlp324001_16x16_4 from '../../png/Winhlp324001_16x16_4.png';

export const winhlp324001Data = {
  '32x32_4': {
    imageSrc: Winhlp324001_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Winhlp324001_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Winhlp324001Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Winhlp324001: React.FC<Winhlp324001Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = winhlp324001Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
