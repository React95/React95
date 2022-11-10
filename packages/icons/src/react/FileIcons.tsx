import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileIcons_32x32_4 from '../../png/FileIcons_32x32_4.png';

export const fileIconsData = {
  '32x32_4': {
    imageSrc: FileIcons_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface FileIconsProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const FileIcons: React.FC<FileIconsProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileIconsData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
