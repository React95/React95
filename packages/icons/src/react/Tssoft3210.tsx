import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Tssoft3210_32x32_4 from '../../png/Tssoft3210_32x32_4.png';

export const tssoft3210Data = {
  '32x32_4': {
    imageSrc: Tssoft3210_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Tssoft3210Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Tssoft3210: React.FC<Tssoft3210Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = tssoft3210Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
