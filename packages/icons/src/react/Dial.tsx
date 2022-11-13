import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Dial_32x32_4 from '../../png/Dial_32x32_4.png';
import Dial_16x16_4 from '../../png/Dial_16x16_4.png';

export const dialData = {
  '32x32_4': {
    imageSrc: Dial_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Dial_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DialProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Dial: React.FC<DialProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = dialData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
