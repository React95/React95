import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef10044_32x32_4 from '../../png/Gcdef10044_32x32_4.png';

export const gcdef10044Data = {
  '32x32_4': {
    imageSrc: Gcdef10044_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef10044Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef10044: React.FC<Gcdef10044Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef10044Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
