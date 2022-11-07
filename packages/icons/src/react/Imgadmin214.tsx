import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Imgadmin214_32x32_4 from '../../png/Imgadmin214_32x32_4.png';
import Imgadmin214_16x16_4 from '../../png/Imgadmin214_16x16_4.png';

export const imgadmin214Data = {
  '32x32_4': {
    imageSrc: Imgadmin214_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Imgadmin214_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Imgadmin214Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Imgadmin214: React.FC<Imgadmin214Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = imgadmin214Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
