import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Files_32x32_4 from '../../png/Files_32x32_4.png';
import Files_16x16_4 from '../../png/Files_16x16_4.png';

export const filesData = {
  '32x32_4': {
    imageSrc: Files_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Files_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FilesProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Files: React.FC<FilesProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = filesData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
