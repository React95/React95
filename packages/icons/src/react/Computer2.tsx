import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Computer2_32x32_4 from '../../png/Computer2_32x32_4.png';
import Computer2_16x16_4 from '../../png/Computer2_16x16_4.png';

export const computer2Data = {
  '32x32_4': {
    imageSrc: Computer2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Computer2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Computer2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Computer2: React.FC<Computer2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = computer2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
