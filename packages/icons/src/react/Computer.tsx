import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Computer_32x32_4 from '../../png/Computer_32x32_4.png';
import Computer_16x16_4 from '../../png/Computer_16x16_4.png';

export const computerData = {
  '32x32_4': {
    imageSrc: Computer_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Computer_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ComputerProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Computer: React.FC<ComputerProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = computerData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
