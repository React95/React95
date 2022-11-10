import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys102_32x32_1 from '../../png/Mmsys102_32x32_1.png';
import Mmsys102_32x32_4 from '../../png/Mmsys102_32x32_4.png';

export const mmsys102Data = {
  '32x32_1': {
    imageSrc: Mmsys102_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Mmsys102_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mmsys102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Mmsys102: React.FC<Mmsys102Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = mmsys102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
