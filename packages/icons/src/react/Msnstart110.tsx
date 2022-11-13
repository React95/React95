import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Msnstart110_32x32_4 from '../../png/Msnstart110_32x32_4.png';

export const msnstart110Data = {
  '32x32_4': {
    imageSrc: Msnstart110_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Msnstart110Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Msnstart110: React.FC<Msnstart110Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnstart110Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
