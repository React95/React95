import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Imgedit10_32x32_4 from '../../png/Imgedit10_32x32_4.png';

export const imgedit10Data = {
  '32x32_4': {
    imageSrc: Imgedit10_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Imgedit10Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Imgedit10: React.FC<Imgedit10Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = imgedit10Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
