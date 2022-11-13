import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Winfile1_32x32_1 from '../../png/Winfile1_32x32_1.png';
import Winfile1_32x32_4 from '../../png/Winfile1_32x32_4.png';

export const winfile1Data = {
  '32x32_1': {
    imageSrc: Winfile1_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Winfile1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Winfile1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Winfile1: React.FC<Winfile1Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = winfile1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
