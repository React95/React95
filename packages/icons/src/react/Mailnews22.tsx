import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews22_32x32_4 from '../../png/Mailnews22_32x32_4.png';
import Mailnews22_16x16_4 from '../../png/Mailnews22_16x16_4.png';

export const mailnews22Data = {
  '32x32_4': {
    imageSrc: Mailnews22_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mailnews22_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mailnews22Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mailnews22: React.FC<Mailnews22Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews22Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
