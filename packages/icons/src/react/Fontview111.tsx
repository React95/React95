import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Fontview111_32x32_4 from '../../png/Fontview111_32x32_4.png';
import Fontview111_16x16_4 from '../../png/Fontview111_16x16_4.png';

export const fontview111Data = {
  '32x32_4': {
    imageSrc: Fontview111_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Fontview111_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Fontview111Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Fontview111: React.FC<Fontview111Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fontview111Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
