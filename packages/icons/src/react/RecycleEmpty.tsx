import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import RecycleEmpty_32x32_4 from '../../png/RecycleEmpty_32x32_4.png';
import RecycleEmpty_16x16_4 from '../../png/RecycleEmpty_16x16_4.png';

export const recycleEmptyData = {
  '32x32_4': {
    imageSrc: RecycleEmpty_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: RecycleEmpty_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface RecycleEmptyProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const RecycleEmpty: React.FC<RecycleEmptyProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = recycleEmptyData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
