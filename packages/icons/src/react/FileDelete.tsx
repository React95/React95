import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileDelete_32x32_4 from '../../png/FileDelete_32x32_4.png';

export const fileDeleteData = {
  '32x32_4': {
    imageSrc: FileDelete_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface FileDeleteProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const FileDelete: React.FC<FileDeleteProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileDeleteData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
