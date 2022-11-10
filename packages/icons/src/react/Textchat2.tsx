import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Textchat2_32x32_4 from '../../png/Textchat2_32x32_4.png';
import Textchat2_16x16_4 from '../../png/Textchat2_16x16_4.png';

export const textchat2Data = {
  '32x32_4': {
    imageSrc: Textchat2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Textchat2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Textchat2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Textchat2: React.FC<Textchat2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = textchat2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
