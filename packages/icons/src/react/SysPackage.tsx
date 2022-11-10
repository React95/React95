import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import SysPackage_32x32_4 from '../../png/SysPackage_32x32_4.png';
import SysPackage_16x16_4 from '../../png/SysPackage_16x16_4.png';

export const sysPackageData = {
  '32x32_4': {
    imageSrc: SysPackage_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: SysPackage_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface SysPackageProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const SysPackage: React.FC<SysPackageProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = sysPackageData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
