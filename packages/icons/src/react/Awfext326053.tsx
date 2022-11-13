import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfext326053_32x32_4 from '../../png/Awfext326053_32x32_4.png';
import Awfext326053_16x16_4 from '../../png/Awfext326053_16x16_4.png';

export const awfext326053Data = {
  '32x32_4': {
    imageSrc: Awfext326053_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Awfext326053_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Awfext326053Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Awfext326053: React.FC<Awfext326053Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfext326053Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
