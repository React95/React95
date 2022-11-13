import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews14_32x32_4 from '../../png/Mailnews14_32x32_4.png';
import Mailnews14_16x16_4 from '../../png/Mailnews14_16x16_4.png';

export const mailnews14Data = {
  '32x32_4': {
    imageSrc: Mailnews14_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mailnews14_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mailnews14Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mailnews14: React.FC<Mailnews14Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews14Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
