import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys123_32x32_4 from '../../png/Mmsys123_32x32_4.png';

export const mmsys123Data = {
  '32x32_4': {
    imageSrc: Mmsys123_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mmsys123Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mmsys123: React.FC<Mmsys123Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys123Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
