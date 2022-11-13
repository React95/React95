import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wab321011_32x32_4 from '../../png/Wab321011_32x32_4.png';
import Wab321011_16x16_4 from '../../png/Wab321011_16x16_4.png';

export const wab321011Data = {
  '32x32_4': {
    imageSrc: Wab321011_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wab321011_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Wab321011Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wab321011: React.FC<Wab321011Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wab321011Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
