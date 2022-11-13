import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FolderSettings2_32x32_4 from '../../png/FolderSettings2_32x32_4.png';

export const folderSettings2Data = {
  '32x32_4': {
    imageSrc: FolderSettings2_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface FolderSettings2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const FolderSettings2: React.FC<FolderSettings2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = folderSettings2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
