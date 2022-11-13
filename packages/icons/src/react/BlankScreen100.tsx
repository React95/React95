import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import BlankScreen100_32x32_4 from '../../png/BlankScreen100_32x32_4.png';
import BlankScreen100_16x16_4 from '../../png/BlankScreen100_16x16_4.png';

export const blankScreen100Data = {
  '32x32_4': {
    imageSrc: BlankScreen100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: BlankScreen100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface BlankScreen100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const BlankScreen100: React.FC<BlankScreen100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = blankScreen100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
