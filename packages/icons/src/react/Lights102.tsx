import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Lights102_16x16_4 from '../../png/Lights102_16x16_4.png';

export const lights102Data = {
  '16x16_4': {
    imageSrc: Lights102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Lights102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Lights102: React.FC<Lights102Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = lights102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
