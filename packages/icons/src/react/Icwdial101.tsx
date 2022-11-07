import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Icwdial101_32x32_4 from '../../png/Icwdial101_32x32_4.png';
import Icwdial101_32x32_1 from '../../png/Icwdial101_32x32_1.png';

export const icwdial101Data = {
  '32x32_4': {
    imageSrc: Icwdial101_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '32x32_1': {
    imageSrc: Icwdial101_32x32_1 as string,
    width: 32,
    height: 32,
  },
};

export interface Icwdial101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '32x32_1';
}

export const Icwdial101: React.FC<Icwdial101Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = icwdial101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
