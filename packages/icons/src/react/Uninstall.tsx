import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Uninstall_32x32_4 from '../../png/Uninstall_32x32_4.png';

export const uninstallData = {
  '32x32_4': {
    imageSrc: Uninstall_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface UninstallProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Uninstall: React.FC<UninstallProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = uninstallData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
