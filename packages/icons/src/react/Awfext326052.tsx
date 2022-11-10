import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfext326052_32x32_4 from '../../png/Awfext326052_32x32_4.png';

export const awfext326052Data = {
  '32x32_4': {
    imageSrc: Awfext326052_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Awfext326052Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Awfext326052: React.FC<Awfext326052Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfext326052Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
