import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Freecell1_32x32_1 from '../../png/Freecell1_32x32_1.png';
import Freecell1_32x32_4 from '../../png/Freecell1_32x32_4.png';

export const freecell1Data = {
  '32x32_1': {
    imageSrc: Freecell1_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Freecell1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Freecell1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Freecell1: React.FC<Freecell1Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = freecell1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
