import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileText_32x32_4 from '../../png/FileText_32x32_4.png';
import FileText_16x16_4 from '../../png/FileText_16x16_4.png';

export const fileTextData = {
  '32x32_4': {
    imageSrc: FileText_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FileText_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FileTextProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FileText: React.FC<FileTextProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileTextData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
