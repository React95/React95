import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Copy_16x16_4 from '../../png/Copy_16x16_4.png';

export const copyData = {
  '16x16_4': {
    imageSrc: Copy_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface CopyProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Copy: React.FC<CopyProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = copyData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
