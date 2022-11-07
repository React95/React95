import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileFind3_32x32_4 from '../../png/FileFind3_32x32_4.png';
import FileFind3_16x16_4 from '../../png/FileFind3_16x16_4.png';

export const fileFind3Data = {
  '32x32_4': {
    imageSrc: FileFind3_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FileFind3_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FileFind3Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FileFind3: React.FC<FileFind3Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileFind3Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
