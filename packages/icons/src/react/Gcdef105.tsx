import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef105_32x32_4 from '../../png/Gcdef105_32x32_4.png';

export const gcdef105Data = {
  '32x32_4': {
    imageSrc: Gcdef105_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef105Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef105: React.FC<Gcdef105Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef105Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
