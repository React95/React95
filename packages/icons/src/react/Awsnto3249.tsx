import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awsnto3249_32x32_4 from '../../png/Awsnto3249_32x32_4.png';
import Awsnto3249_16x16_4 from '../../png/Awsnto3249_16x16_4.png';

export const awsnto3249Data = {
  '32x32_4': {
    imageSrc: Awsnto3249_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Awsnto3249_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Awsnto3249Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Awsnto3249: React.FC<Awsnto3249Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awsnto3249Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
