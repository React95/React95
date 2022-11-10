import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef102_32x32_4 from '../../png/Gcdef102_32x32_4.png';

export const gcdef102Data = {
  '32x32_4': {
    imageSrc: Gcdef102_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef102: React.FC<Gcdef102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
