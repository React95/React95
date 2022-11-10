import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Winfile4_32x32_1 from '../../png/Winfile4_32x32_1.png';
import Winfile4_32x32_4 from '../../png/Winfile4_32x32_4.png';

export const winfile4Data = {
  '32x32_1': {
    imageSrc: Winfile4_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Winfile4_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Winfile4Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Winfile4: React.FC<Winfile4Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = winfile4Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
