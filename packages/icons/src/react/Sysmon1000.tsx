import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Sysmon1000_32x32_4 from '../../png/Sysmon1000_32x32_4.png';

export const sysmon1000Data = {
  '32x32_4': {
    imageSrc: Sysmon1000_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Sysmon1000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Sysmon1000: React.FC<Sysmon1000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = sysmon1000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
