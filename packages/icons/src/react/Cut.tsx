import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Cut_16x16_4 from '../../png/Cut_16x16_4.png';

export const cutData = {
  '16x16_4': {
    imageSrc: Cut_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface CutProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Cut: React.FC<CutProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = cutData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
