import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef113_48x48_8 from '../../png/Gcdef113_48x48_8.png';

export const gcdef113Data = {
  '48x48_8': {
    imageSrc: Gcdef113_48x48_8 as string,
    width: 48,
    height: 48,
  },
};

export interface Gcdef113Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '48x48_8';
}

export const Gcdef113: React.FC<Gcdef113Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const image = gcdef113Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
