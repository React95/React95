import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FolderFont_32x32_4 from '../../png/FolderFont_32x32_4.png';
import FolderFont_16x16_4 from '../../png/FolderFont_16x16_4.png';

export const folderFontData = {
  '32x32_4': {
    imageSrc: FolderFont_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FolderFont_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FolderFontProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FolderFont: React.FC<FolderFontProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = folderFontData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
