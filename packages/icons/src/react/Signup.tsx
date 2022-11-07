import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Signup_32x32_4 from '../../png/Signup_32x32_4.png';
import Signup_16x16_4 from '../../png/Signup_16x16_4.png';

export const signupData = {
  '32x32_4': {
    imageSrc: Signup_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Signup_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface SignupProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Signup: React.FC<SignupProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = signupData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
