import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FilePick_32x32_4 from '../../png/FilePick_32x32_4.png';
import FilePick_16x16_4 from '../../png/FilePick_16x16_4.png';

export const filePickData = {
  '32x32_4': {
    imageSrc: FilePick_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FilePick_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FilePickProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FilePick: React.FC<FilePickProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = filePickData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
