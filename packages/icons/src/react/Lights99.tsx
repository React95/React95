import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Lights99_256x96_4 from '../../png/Lights99_256x96_4.png';

export const lights99Data = {
  '256x96_4': {
    imageSrc: Lights99_256x96_4 as string,
    width: 256,
    height: 96,
  },
};

export interface Lights99Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '256x96_4';
}

export const Lights99: React.FC<Lights99Props> = ({
  variant = '256x96_4',
  ...rest
}) => {
  const image = lights99Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
