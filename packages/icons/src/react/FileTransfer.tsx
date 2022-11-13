import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileTransfer_32x32_4 from '../../png/FileTransfer_32x32_4.png';

export const fileTransferData = {
  '32x32_4': {
    imageSrc: FileTransfer_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface FileTransferProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const FileTransfer: React.FC<FileTransferProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileTransferData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
