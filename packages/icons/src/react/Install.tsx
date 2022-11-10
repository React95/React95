import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Install_32x32_4 from '../../png/Install_32x32_4.png';

export const installData = {
  '32x32_4': {
    imageSrc: Install_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface InstallProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Install: React.FC<InstallProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = installData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
