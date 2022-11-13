import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef114_48x48_8 from '../../png/Gcdef114_48x48_8.png';

export const gcdef114Data = {
  '48x48_8': {
    imageSrc: Gcdef114_48x48_8 as string,
    width: 48,
    height: 48,
  },
};

export interface Gcdef114Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '48x48_8';
}

export const Gcdef114: React.FC<Gcdef114Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const image = gcdef114Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
