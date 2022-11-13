import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef124_64x64_4 from '../../png/Gcdef124_64x64_4.png';

export const gcdef124Data = {
  '64x64_4': {
    imageSrc: Gcdef124_64x64_4 as string,
    width: 64,
    height: 64,
  },
};

export interface Gcdef124Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '64x64_4';
}

export const Gcdef124: React.FC<Gcdef124Props> = ({
  variant = '64x64_4',
  ...rest
}) => {
  const image = gcdef124Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
