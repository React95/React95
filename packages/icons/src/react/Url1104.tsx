import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Url1104_32x32_4 from '../../png/Url1104_32x32_4.png';

export const url1104Data = {
  '32x32_4': {
    imageSrc: Url1104_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Url1104Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Url1104: React.FC<Url1104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = url1104Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
