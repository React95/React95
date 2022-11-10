import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FilePen_32x32_4 from '../../png/FilePen_32x32_4.png';
import FilePen_16x16_4 from '../../png/FilePen_16x16_4.png';

export const filePenData = {
  '32x32_4': {
    imageSrc: FilePen_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FilePen_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FilePenProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FilePen: React.FC<FilePenProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = filePenData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
