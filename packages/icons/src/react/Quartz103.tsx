import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Quartz103_32x32_4 from '../../png/Quartz103_32x32_4.png';
import Quartz103_16x16_4 from '../../png/Quartz103_16x16_4.png';

export const quartz103Data = {
  '32x32_4': {
    imageSrc: Quartz103_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Quartz103_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Quartz103Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Quartz103: React.FC<Quartz103Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = quartz103Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
