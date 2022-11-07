import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfext326050_16x16_4 from '../../png/Awfext326050_16x16_4.png';

export const awfext326050Data = {
  '16x16_4': {
    imageSrc: Awfext326050_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Awfext326050Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Awfext326050: React.FC<Awfext326050Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = awfext326050Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
