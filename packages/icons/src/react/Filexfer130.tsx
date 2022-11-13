import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Filexfer130_32x32_4 from '../../png/Filexfer130_32x32_4.png';

export const filexfer130Data = {
  '32x32_4': {
    imageSrc: Filexfer130_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Filexfer130Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Filexfer130: React.FC<Filexfer130Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = filexfer130Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
