import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Logo_16x16_4 from '../../png/Logo_16x16_4.png';
import Logo_32x32_4 from '../../png/Logo_32x32_4.png';

export const logoData = {
  '16x16_4': {
    imageSrc: Logo_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_4': {
    imageSrc: Logo_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface LogoProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4' | '32x32_4';
}

export const Logo: React.FC<LogoProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = logoData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
