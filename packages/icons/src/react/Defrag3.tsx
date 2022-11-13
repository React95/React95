import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Defrag3_32x32_4 from '../../png/Defrag3_32x32_4.png';
import Defrag3_16x16_4 from '../../png/Defrag3_16x16_4.png';

export const defrag3Data = {
  '32x32_4': {
    imageSrc: Defrag3_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Defrag3_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Defrag3Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Defrag3: React.FC<Defrag3Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = defrag3Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
