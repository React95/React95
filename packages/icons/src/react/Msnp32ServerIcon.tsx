import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msnp32ServerIcon_32x32_4 from '../../png/Msnp32ServerIcon_32x32_4.png';
import Msnp32ServerIcon_16x16_4 from '../../png/Msnp32ServerIcon_16x16_4.png';

export const msnp32ServerIconData = {
  '32x32_4': {
    imageSrc: Msnp32ServerIcon_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Msnp32ServerIcon_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Msnp32ServerIconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Msnp32ServerIcon: React.FC<Msnp32ServerIconProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnp32ServerIconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
