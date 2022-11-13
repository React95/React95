import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef10063_32x32_4 from '../../png/Gcdef10063_32x32_4.png';

export const gcdef10063Data = {
  '32x32_4': {
    imageSrc: Gcdef10063_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef10063Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef10063: React.FC<Gcdef10063Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef10063Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
