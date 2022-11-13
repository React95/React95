import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileSettings_32x32_4 from '../../png/FileSettings_32x32_4.png';
import FileSettings_16x16_4 from '../../png/FileSettings_16x16_4.png';

export const fileSettingsData = {
  '32x32_4': {
    imageSrc: FileSettings_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FileSettings_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FileSettingsProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FileSettings: React.FC<FileSettingsProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileSettingsData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
