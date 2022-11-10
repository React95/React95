import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews20_32x32_4 from '../../png/Mailnews20_32x32_4.png';
import Mailnews20_16x16_4 from '../../png/Mailnews20_16x16_4.png';

export const mailnews20Data = {
  '32x32_4': {
    imageSrc: Mailnews20_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mailnews20_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mailnews20Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mailnews20: React.FC<Mailnews20Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews20Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
