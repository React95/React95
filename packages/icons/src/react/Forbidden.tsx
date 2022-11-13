import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Forbidden_32x32_4 from '../../png/Forbidden_32x32_4.png';
import Forbidden_16x16_4 from '../../png/Forbidden_16x16_4.png';

export const forbiddenData = {
  '32x32_4': {
    imageSrc: Forbidden_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Forbidden_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ForbiddenProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Forbidden: React.FC<ForbiddenProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = forbiddenData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
