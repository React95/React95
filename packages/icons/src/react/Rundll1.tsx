import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rundll1_32x32_1 from '../../png/Rundll1_32x32_1.png';
import Rundll1_32x32_4 from '../../png/Rundll1_32x32_4.png';

export const rundll1Data = {
  '32x32_1': {
    imageSrc: Rundll1_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Rundll1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Rundll1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Rundll1: React.FC<Rundll1Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = rundll1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
