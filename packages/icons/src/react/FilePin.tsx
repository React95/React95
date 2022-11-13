import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FilePin_32x32_4 from '../../png/FilePin_32x32_4.png';
import FilePin_16x16_4 from '../../png/FilePin_16x16_4.png';

export const filePinData = {
  '32x32_4': {
    imageSrc: FilePin_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FilePin_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FilePinProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FilePin: React.FC<FilePinProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = filePinData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
