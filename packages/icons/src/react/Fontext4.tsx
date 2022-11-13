import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Fontext4_32x32_4 from '../../png/Fontext4_32x32_4.png';
import Fontext4_16x16_4 from '../../png/Fontext4_16x16_4.png';

export const fontext4Data = {
  '32x32_4': {
    imageSrc: Fontext4_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Fontext4_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Fontext4Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Fontext4: React.FC<Fontext4Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fontext4Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
