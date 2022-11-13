import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef10026_32x32_4 from '../../png/Gcdef10026_32x32_4.png';

export const gcdef10026Data = {
  '32x32_4': {
    imageSrc: Gcdef10026_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef10026Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef10026: React.FC<Gcdef10026Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef10026Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
