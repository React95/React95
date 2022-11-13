import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Isign324001_32x32_4 from '../../png/Isign324001_32x32_4.png';
import Isign324001_32x32_1 from '../../png/Isign324001_32x32_1.png';

export const isign324001Data = {
  '32x32_4': {
    imageSrc: Isign324001_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '32x32_1': {
    imageSrc: Isign324001_32x32_1 as string,
    width: 32,
    height: 32,
  },
};

export interface Isign324001Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '32x32_1';
}

export const Isign324001: React.FC<Isign324001Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = isign324001Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
