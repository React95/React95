import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msrating107_32x32_4 from '../../png/Msrating107_32x32_4.png';

export const msrating107Data = {
  '32x32_4': {
    imageSrc: Msrating107_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msrating107Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Msrating107: React.FC<Msrating107Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msrating107Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
