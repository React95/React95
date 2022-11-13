import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import RecycleFull_32x32_4 from '../../png/RecycleFull_32x32_4.png';
import RecycleFull_16x16_4 from '../../png/RecycleFull_16x16_4.png';

export const recycleFullData = {
  '32x32_4': {
    imageSrc: RecycleFull_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: RecycleFull_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface RecycleFullProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const RecycleFull: React.FC<RecycleFullProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = recycleFullData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
