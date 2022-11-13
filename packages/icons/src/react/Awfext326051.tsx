import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfext326051_32x32_4 from '../../png/Awfext326051_32x32_4.png';

export const awfext326051Data = {
  '32x32_4': {
    imageSrc: Awfext326051_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Awfext326051Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Awfext326051: React.FC<Awfext326051Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfext326051Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
