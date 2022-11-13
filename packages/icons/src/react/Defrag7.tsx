import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Defrag7_32x32_4 from '../../png/Defrag7_32x32_4.png';
import Defrag7_16x16_4 from '../../png/Defrag7_16x16_4.png';

export const defrag7Data = {
  '32x32_4': {
    imageSrc: Defrag7_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Defrag7_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Defrag7Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Defrag7: React.FC<Defrag7Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = defrag7Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
