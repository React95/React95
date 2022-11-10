import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileFind_32x32_4 from '../../png/FileFind_32x32_4.png';
import FileFind_16x16_4 from '../../png/FileFind_16x16_4.png';

export const fileFindData = {
  '32x32_4': {
    imageSrc: FileFind_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FileFind_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FileFindProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FileFind: React.FC<FileFindProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileFindData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
