import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Toupper_16x16_4 from '../../png/Toupper_16x16_4.png';

export const toupperData = {
  '16x16_4': {
    imageSrc: Toupper_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ToupperProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Toupper: React.FC<ToupperProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = toupperData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
