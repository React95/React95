import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxcg321303_32x32_4 from '../../png/Awfxcg321303_32x32_4.png';

export const awfxcg321303Data = {
  '32x32_4': {
    imageSrc: Awfxcg321303_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Awfxcg321303Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Awfxcg321303: React.FC<Awfxcg321303Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxcg321303Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
