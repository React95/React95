import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shdocvw259_32x32_4 from '../../png/Shdocvw259_32x32_4.png';
import Shdocvw259_16x16_4 from '../../png/Shdocvw259_16x16_4.png';

export const shdocvw259Data = {
  '32x32_4': {
    imageSrc: Shdocvw259_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shdocvw259_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shdocvw259Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shdocvw259: React.FC<Shdocvw259Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shdocvw259Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
