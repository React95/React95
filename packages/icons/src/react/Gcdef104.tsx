import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef104_32x32_4 from '../../png/Gcdef104_32x32_4.png';

export const gcdef104Data = {
  '32x32_4': {
    imageSrc: Gcdef104_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef104Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef104: React.FC<Gcdef104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef104Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
