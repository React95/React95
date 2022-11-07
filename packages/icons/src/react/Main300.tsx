import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Main300_32x32_4 from '../../png/Main300_32x32_4.png';
import Main300_16x16_4 from '../../png/Main300_16x16_4.png';

export const main300Data = {
  '32x32_4': {
    imageSrc: Main300_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Main300_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Main300Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Main300: React.FC<Main300Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = main300Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
