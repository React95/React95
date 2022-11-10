import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mipac_16x16_4 from '../../png/Mipac_16x16_4.png';

export const mipacData = {
  '16x16_4': {
    imageSrc: Mipac_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MipacProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Mipac: React.FC<MipacProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = mipacData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
