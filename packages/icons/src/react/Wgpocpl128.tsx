import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wgpocpl128_32x32_4 from '../../png/Wgpocpl128_32x32_4.png';

export const wgpocpl128Data = {
  '32x32_4': {
    imageSrc: Wgpocpl128_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Wgpocpl128Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Wgpocpl128: React.FC<Wgpocpl128Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wgpocpl128Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
