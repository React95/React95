import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shdocvw272_32x32_4 from '../../png/Shdocvw272_32x32_4.png';
import Shdocvw272_16x16_4 from '../../png/Shdocvw272_16x16_4.png';

export const shdocvw272Data = {
  '32x32_4': {
    imageSrc: Shdocvw272_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shdocvw272_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shdocvw272Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shdocvw272: React.FC<Shdocvw272Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shdocvw272Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
