import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef112_48x48_8 from '../../png/Gcdef112_48x48_8.png';

export const gcdef112Data = {
  '48x48_8': {
    imageSrc: Gcdef112_48x48_8 as string,
    width: 48,
    height: 48,
  },
};

export interface Gcdef112Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '48x48_8';
}

export const Gcdef112: React.FC<Gcdef112Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const image = gcdef112Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
