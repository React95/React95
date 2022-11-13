import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr128_16x16_4 from '../../png/Rsrcmtr128_16x16_4.png';

export const rsrcmtr128Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr128_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr128Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr128: React.FC<Rsrcmtr128Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr128Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
