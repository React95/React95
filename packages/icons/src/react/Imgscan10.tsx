import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Imgscan10_32x32_4 from '../../png/Imgscan10_32x32_4.png';

export const imgscan10Data = {
  '32x32_4': {
    imageSrc: Imgscan10_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Imgscan10Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Imgscan10: React.FC<Imgscan10Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = imgscan10Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
