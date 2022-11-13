import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Confcp108_32x32_4 from '../../png/Confcp108_32x32_4.png';
import Confcp108_16x16_4 from '../../png/Confcp108_16x16_4.png';

export const confcp108Data = {
  '32x32_4': {
    imageSrc: Confcp108_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Confcp108_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Confcp108Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp108: React.FC<Confcp108Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = confcp108Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
