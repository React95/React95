import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regwiz117_32x32_4 from '../../png/Regwiz117_32x32_4.png';

export const regwiz117Data = {
  '32x32_4': {
    imageSrc: Regwiz117_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Regwiz117Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Regwiz117: React.FC<Regwiz117Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = regwiz117Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
