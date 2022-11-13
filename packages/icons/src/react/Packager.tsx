import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Packager_32x32_1 from '../../png/Packager_32x32_1.png';
import Packager_32x32_4 from '../../png/Packager_32x32_4.png';

export const packagerData = {
  '32x32_1': {
    imageSrc: Packager_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Packager_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface PackagerProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Packager: React.FC<PackagerProps> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = packagerData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
