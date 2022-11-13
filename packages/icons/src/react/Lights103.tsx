import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Lights103_16x16_4 from '../../png/Lights103_16x16_4.png';

export const lights103Data = {
  '16x16_4': {
    imageSrc: Lights103_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Lights103Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Lights103: React.FC<Lights103Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = lights103Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
