import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awfxcg321305_32x32_4 from '../../png/Awfxcg321305_32x32_4.png';

export const awfxcg321305Data = {
  '32x32_4': {
    imageSrc: Awfxcg321305_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Awfxcg321305Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Awfxcg321305: React.FC<Awfxcg321305Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awfxcg321305Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
