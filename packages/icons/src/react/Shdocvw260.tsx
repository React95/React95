import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shdocvw260_32x32_4 from '../../png/Shdocvw260_32x32_4.png';
import Shdocvw260_16x16_4 from '../../png/Shdocvw260_16x16_4.png';

export const shdocvw260Data = {
  '32x32_4': {
    imageSrc: Shdocvw260_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Shdocvw260_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shdocvw260Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shdocvw260: React.FC<Shdocvw260Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shdocvw260Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
