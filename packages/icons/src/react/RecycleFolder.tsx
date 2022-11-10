import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import RecycleFolder_32x32_4 from '../../png/RecycleFolder_32x32_4.png';

export const recycleFolderData = {
  '32x32_4': {
    imageSrc: RecycleFolder_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface RecycleFolderProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const RecycleFolder: React.FC<RecycleFolderProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = recycleFolderData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
