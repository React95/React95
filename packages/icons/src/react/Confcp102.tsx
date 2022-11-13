import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Confcp102_32x32_4 from '../../png/Confcp102_32x32_4.png';
import Confcp102_16x16_4 from '../../png/Confcp102_16x16_4.png';

export const confcp102Data = {
  '32x32_4': {
    imageSrc: Confcp102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Confcp102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Confcp102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp102: React.FC<Confcp102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = confcp102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
