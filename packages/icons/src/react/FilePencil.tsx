import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FilePencil_32x32_4 from '../../png/FilePencil_32x32_4.png';

export const filePencilData = {
  '32x32_4': {
    imageSrc: FilePencil_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface FilePencilProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const FilePencil: React.FC<FilePencilProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = filePencilData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
