import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Settings_32x32_4 from '../../png/Settings_32x32_4.png';
import Settings_16x16_4 from '../../png/Settings_16x16_4.png';

export const settingsData = {
  '32x32_4': {
    imageSrc: Settings_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Settings_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface SettingsProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Settings: React.FC<SettingsProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = settingsData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
