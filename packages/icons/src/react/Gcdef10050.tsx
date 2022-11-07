import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef10050_32x32_4 from '../../png/Gcdef10050_32x32_4.png';

export const gcdef10050Data = {
  '32x32_4': {
    imageSrc: Gcdef10050_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef10050Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef10050: React.FC<Gcdef10050Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef10050Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
