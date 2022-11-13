import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Delete_16x16_4 from '../../png/Delete_16x16_4.png';

export const deleteData = {
  '16x16_4': {
    imageSrc: Delete_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DeleteProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Delete: React.FC<DeleteProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = deleteData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
