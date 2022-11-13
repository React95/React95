import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import HelpBook_32x32_4 from '../../png/HelpBook_32x32_4.png';
import HelpBook_16x16_4 from '../../png/HelpBook_16x16_4.png';

export const helpBookData = {
  '32x32_4': {
    imageSrc: HelpBook_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: HelpBook_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface HelpBookProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const HelpBook: React.FC<HelpBookProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = helpBookData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
