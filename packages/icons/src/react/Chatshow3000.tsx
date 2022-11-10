import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Chatshow3000_32x32_4 from '../../png/Chatshow3000_32x32_4.png';
import Chatshow3000_16x16_4 from '../../png/Chatshow3000_16x16_4.png';

export const chatshow3000Data = {
  '32x32_4': {
    imageSrc: Chatshow3000_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Chatshow3000_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Chatshow3000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Chatshow3000: React.FC<Chatshow3000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = chatshow3000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
