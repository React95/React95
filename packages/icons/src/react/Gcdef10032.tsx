import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef10032_32x32_4 from '../../png/Gcdef10032_32x32_4.png';

export const gcdef10032Data = {
  '32x32_4': {
    imageSrc: Gcdef10032_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef10032Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef10032: React.FC<Gcdef10032Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef10032Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
