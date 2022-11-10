import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Confcp116_32x32_4 from '../../png/Confcp116_32x32_4.png';
import Confcp116_16x16_4 from '../../png/Confcp116_16x16_4.png';

export const confcp116Data = {
  '32x32_4': {
    imageSrc: Confcp116_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Confcp116_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Confcp116Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp116: React.FC<Confcp116Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = confcp116Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
