import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys115_32x32_4 from '../../png/Mmsys115_32x32_4.png';
import Mmsys115_16x16_4 from '../../png/Mmsys115_16x16_4.png';

export const mmsys115Data = {
  '32x32_4': {
    imageSrc: Mmsys115_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys115_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys115Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys115: React.FC<Mmsys115Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys115Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
