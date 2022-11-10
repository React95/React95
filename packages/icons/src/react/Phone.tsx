import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Phone_32x32_4 from '../../png/Phone_32x32_4.png';

export const phoneData = {
  '32x32_4': {
    imageSrc: Phone_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface PhoneProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Phone: React.FC<PhoneProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = phoneData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
