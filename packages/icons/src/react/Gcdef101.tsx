import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef101_32x32_4 from '../../png/Gcdef101_32x32_4.png';

export const gcdef101Data = {
  '32x32_4': {
    imageSrc: Gcdef101_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef101: React.FC<Gcdef101Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
