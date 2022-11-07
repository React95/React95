import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import RecycleFile_32x32_4 from '../../png/RecycleFile_32x32_4.png';

export const recycleFileData = {
  '32x32_4': {
    imageSrc: RecycleFile_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface RecycleFileProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const RecycleFile: React.FC<RecycleFileProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = recycleFileData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
