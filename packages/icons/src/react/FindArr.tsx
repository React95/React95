import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FindArr_16x16_4 from '../../png/FindArr_16x16_4.png';

export const findArrData = {
  '16x16_4': {
    imageSrc: FindArr_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FindArrProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const FindArr: React.FC<FindArrProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = findArrData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
