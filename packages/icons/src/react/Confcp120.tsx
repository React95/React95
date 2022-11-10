import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Confcp120_32x32_4 from '../../png/Confcp120_32x32_4.png';
import Confcp120_16x16_4 from '../../png/Confcp120_16x16_4.png';

export const confcp120Data = {
  '32x32_4': {
    imageSrc: Confcp120_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Confcp120_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Confcp120Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp120: React.FC<Confcp120Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = confcp120Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
