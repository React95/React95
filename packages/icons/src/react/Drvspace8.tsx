import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Drvspace8_32x32_4 from '../../png/Drvspace8_32x32_4.png';
import Drvspace8_16x16_4 from '../../png/Drvspace8_16x16_4.png';

export const drvspace8Data = {
  '32x32_4': {
    imageSrc: Drvspace8_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Drvspace8_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Drvspace8Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Drvspace8: React.FC<Drvspace8Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = drvspace8Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
