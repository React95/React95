import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Url104_32x32_4 from '../../png/Url104_32x32_4.png';

export const url104Data = {
  '32x32_4': {
    imageSrc: Url104_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Url104Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Url104: React.FC<Url104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = url104Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
