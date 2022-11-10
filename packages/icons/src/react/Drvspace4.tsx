import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Drvspace4_32x32_4 from '../../png/Drvspace4_32x32_4.png';
import Drvspace4_16x16_4 from '../../png/Drvspace4_16x16_4.png';

export const drvspace4Data = {
  '32x32_4': {
    imageSrc: Drvspace4_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Drvspace4_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Drvspace4Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Drvspace4: React.FC<Drvspace4Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = drvspace4Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
