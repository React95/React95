import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FolderRename_32x32_4 from '../../png/FolderRename_32x32_4.png';
import FolderRename_16x16_4 from '../../png/FolderRename_16x16_4.png';

export const folderRenameData = {
  '32x32_4': {
    imageSrc: FolderRename_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FolderRename_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FolderRenameProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FolderRename: React.FC<FolderRenameProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = folderRenameData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
