import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Confcp1100_32x32_4 from '../../png/Confcp1100_32x32_4.png';
import Confcp1100_16x16_4 from '../../png/Confcp1100_16x16_4.png';

export const confcp1100Data = {
  '32x32_4': {
    imageSrc: Confcp1100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Confcp1100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Confcp1100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp1100: React.FC<Confcp1100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = confcp1100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
