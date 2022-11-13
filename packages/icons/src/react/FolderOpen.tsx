import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FolderOpen_32x32_4 from '../../png/FolderOpen_32x32_4.png';
import FolderOpen_16x16_4 from '../../png/FolderOpen_16x16_4.png';

export const folderOpenData = {
  '32x32_4': {
    imageSrc: FolderOpen_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FolderOpen_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FolderOpenProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FolderOpen: React.FC<FolderOpenProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = folderOpenData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
