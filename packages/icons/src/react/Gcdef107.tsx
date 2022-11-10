import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef107_32x32_4 from '../../png/Gcdef107_32x32_4.png';

export const gcdef107Data = {
  '32x32_4': {
    imageSrc: Gcdef107_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef107Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef107: React.FC<Gcdef107Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef107Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
