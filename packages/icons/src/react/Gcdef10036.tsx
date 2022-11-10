import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef10036_32x32_4 from '../../png/Gcdef10036_32x32_4.png';

export const gcdef10036Data = {
  '32x32_4': {
    imageSrc: Gcdef10036_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef10036Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef10036: React.FC<Gcdef10036Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef10036Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
