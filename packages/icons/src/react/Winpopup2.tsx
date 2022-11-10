import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Winpopup2_32x32_4 from '../../png/Winpopup2_32x32_4.png';
import Winpopup2_16x16_4 from '../../png/Winpopup2_16x16_4.png';

export const winpopup2Data = {
  '32x32_4': {
    imageSrc: Winpopup2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Winpopup2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Winpopup2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Winpopup2: React.FC<Winpopup2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = winpopup2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
