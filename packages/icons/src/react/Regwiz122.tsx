import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regwiz122_32x32_4 from '../../png/Regwiz122_32x32_4.png';

export const regwiz122Data = {
  '32x32_4': {
    imageSrc: Regwiz122_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Regwiz122Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Regwiz122: React.FC<Regwiz122Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = regwiz122Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
