import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef109_48x48_8 from '../../png/Gcdef109_48x48_8.png';

export const gcdef109Data = {
  '48x48_8': {
    imageSrc: Gcdef109_48x48_8 as string,
    width: 48,
    height: 48,
  },
};

export interface Gcdef109Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '48x48_8';
}

export const Gcdef109: React.FC<Gcdef109Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const image = gcdef109Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
