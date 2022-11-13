import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import RecycleFilefolder_32x32_4 from '../../png/RecycleFilefolder_32x32_4.png';

export const recycleFilefolderData = {
  '32x32_4': {
    imageSrc: RecycleFilefolder_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface RecycleFilefolderProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const RecycleFilefolder: React.FC<RecycleFilefolderProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = recycleFilefolderData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
