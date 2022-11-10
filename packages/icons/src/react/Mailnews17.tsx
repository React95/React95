import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews17_32x32_4 from '../../png/Mailnews17_32x32_4.png';
import Mailnews17_16x16_4 from '../../png/Mailnews17_16x16_4.png';

export const mailnews17Data = {
  '32x32_4': {
    imageSrc: Mailnews17_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mailnews17_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mailnews17Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mailnews17: React.FC<Mailnews17Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews17Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
