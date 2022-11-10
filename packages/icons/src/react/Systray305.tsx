import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray305_32x32_4 from '../../png/Systray305_32x32_4.png';

export const systray305Data = {
  '32x32_4': {
    imageSrc: Systray305_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Systray305Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Systray305: React.FC<Systray305Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = systray305Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
