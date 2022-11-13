import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Conflnk103_32x32_4 from '../../png/Conflnk103_32x32_4.png';
import Conflnk103_16x16_4 from '../../png/Conflnk103_16x16_4.png';

export const conflnk103Data = {
  '32x32_4': {
    imageSrc: Conflnk103_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Conflnk103_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Conflnk103Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Conflnk103: React.FC<Conflnk103Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = conflnk103Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
