import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FolderFile_32x32_4 from '../../png/FolderFile_32x32_4.png';
import FolderFile_16x16_4 from '../../png/FolderFile_16x16_4.png';

export const folderFileData = {
  '32x32_4': {
    imageSrc: FolderFile_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FolderFile_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FolderFileProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FolderFile: React.FC<FolderFileProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = folderFileData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
