import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Plugin2_32x32_4 from '../../png/Plugin2_32x32_4.png';
import Plugin2_16x16_4 from '../../png/Plugin2_16x16_4.png';

export const plugin2Data = {
  '32x32_4': {
    imageSrc: Plugin2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Plugin2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Plugin2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Plugin2: React.FC<Plugin2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = plugin2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
