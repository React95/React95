import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef10001_32x32_4 from '../../png/Gcdef10001_32x32_4.png';

export const gcdef10001Data = {
  '32x32_4': {
    imageSrc: Gcdef10001_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef10001Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef10001: React.FC<Gcdef10001Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef10001Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
