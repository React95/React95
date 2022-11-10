import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FolderSettings_32x32_4 from '../../png/FolderSettings_32x32_4.png';
import FolderSettings_16x16_4 from '../../png/FolderSettings_16x16_4.png';

export const folderSettingsData = {
  '32x32_4': {
    imageSrc: FolderSettings_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FolderSettings_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FolderSettingsProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FolderSettings: React.FC<FolderSettingsProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = folderSettingsData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
