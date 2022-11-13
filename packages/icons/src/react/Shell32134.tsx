import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell32134_32x32_1 from '../../png/Shell32134_32x32_1.png';
import Shell32134_32x32_4 from '../../png/Shell32134_32x32_4.png';
import Shell32134_16x16_4 from '../../png/Shell32134_16x16_4.png';

export const shell32134Data = {
  '32x32_1': {
    imageSrc: Shell32134_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Shell32134_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shell32134_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shell32134Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4' | '16x16_4';
}

export const Shell32134: React.FC<Shell32134Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = shell32134Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
