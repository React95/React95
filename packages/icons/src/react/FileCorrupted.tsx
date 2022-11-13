import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileCorrupted_32x32_4 from '../../png/FileCorrupted_32x32_4.png';

export const fileCorruptedData = {
  '32x32_4': {
    imageSrc: FileCorrupted_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface FileCorruptedProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const FileCorrupted: React.FC<FileCorruptedProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileCorruptedData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
