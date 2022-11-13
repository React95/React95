import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FindDc2_16x16_4 from '../../png/FindDc2_16x16_4.png';

export const findDc2Data = {
  '16x16_4': {
    imageSrc: FindDc2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FindDc2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const FindDc2: React.FC<FindDc2Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = findDc2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
