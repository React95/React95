import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Download_16x16_4 from '../../png/Download_16x16_4.png';

export const downloadData = {
  '16x16_4': {
    imageSrc: Download_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DownloadProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Download: React.FC<DownloadProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = downloadData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
