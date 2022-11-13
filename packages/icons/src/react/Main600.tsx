import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Main600_32x32_4 from '../../png/Main600_32x32_4.png';
import Main600_16x16_4 from '../../png/Main600_16x16_4.png';

export const main600Data = {
  '32x32_4': {
    imageSrc: Main600_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Main600_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Main600Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Main600: React.FC<Main600Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = main600Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
