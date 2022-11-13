import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Winfile2_32x32_1 from '../../png/Winfile2_32x32_1.png';
import Winfile2_32x32_4 from '../../png/Winfile2_32x32_4.png';

export const winfile2Data = {
  '32x32_1': {
    imageSrc: Winfile2_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Winfile2_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Winfile2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Winfile2: React.FC<Winfile2Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = winfile2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
