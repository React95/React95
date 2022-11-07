import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Textchat_32x32_4 from '../../png/Textchat_32x32_4.png';
import Textchat_16x16_4 from '../../png/Textchat_16x16_4.png';

export const textchatData = {
  '32x32_4': {
    imageSrc: Textchat_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Textchat_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface TextchatProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Textchat: React.FC<TextchatProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = textchatData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
