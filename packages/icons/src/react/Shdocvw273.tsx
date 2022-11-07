import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shdocvw273_32x32_4 from '../../png/Shdocvw273_32x32_4.png';
import Shdocvw273_16x16_4 from '../../png/Shdocvw273_16x16_4.png';

export const shdocvw273Data = {
  '32x32_4': {
    imageSrc: Shdocvw273_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shdocvw273_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shdocvw273Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shdocvw273: React.FC<Shdocvw273Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shdocvw273Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
