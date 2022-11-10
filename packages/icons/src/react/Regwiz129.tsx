import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regwiz129_32x32_4 from '../../png/Regwiz129_32x32_4.png';

export const regwiz129Data = {
  '32x32_4': {
    imageSrc: Regwiz129_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Regwiz129Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Regwiz129: React.FC<Regwiz129Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = regwiz129Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
