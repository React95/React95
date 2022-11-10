import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import CurvesAndColors100_32x32_4 from '../../png/CurvesAndColors100_32x32_4.png';
import CurvesAndColors100_16x16_4 from '../../png/CurvesAndColors100_16x16_4.png';

export const curvesAndColors100Data = {
  '32x32_4': {
    imageSrc: CurvesAndColors100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: CurvesAndColors100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface CurvesAndColors100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const CurvesAndColors100: React.FC<CurvesAndColors100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = curvesAndColors100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
