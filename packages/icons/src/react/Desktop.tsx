import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Desktop_32x32_4 from '../../png/Desktop_32x32_4.png';
import Desktop_16x16_4 from '../../png/Desktop_16x16_4.png';

export const desktopData = {
  '32x32_4': {
    imageSrc: Desktop_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Desktop_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DesktopProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Desktop: React.FC<DesktopProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = desktopData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
