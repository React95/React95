import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FolderPrint_32x32_4 from '../../png/FolderPrint_32x32_4.png';
import FolderPrint_16x16_4 from '../../png/FolderPrint_16x16_4.png';

export const folderPrintData = {
  '32x32_4': {
    imageSrc: FolderPrint_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FolderPrint_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FolderPrintProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FolderPrint: React.FC<FolderPrintProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = folderPrintData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
