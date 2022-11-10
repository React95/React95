import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Plugin_32x32_4 from '../../png/Plugin_32x32_4.png';
import Plugin_16x16_4 from '../../png/Plugin_16x16_4.png';

export const pluginData = {
  '32x32_4': {
    imageSrc: Plugin_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Plugin_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface PluginProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Plugin: React.FC<PluginProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = pluginData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
