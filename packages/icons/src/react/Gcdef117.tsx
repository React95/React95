import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef117_48x48_8 from '../../png/Gcdef117_48x48_8.png';

export const gcdef117Data = {
  '48x48_8': {
    imageSrc: Gcdef117_48x48_8 as string,
    width: 48,
    height: 48,
  },
};

export interface Gcdef117Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '48x48_8';
}

export const Gcdef117: React.FC<Gcdef117Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const image = gcdef117Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
