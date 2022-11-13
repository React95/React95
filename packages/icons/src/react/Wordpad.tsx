import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wordpad_32x32_4 from '../../png/Wordpad_32x32_4.png';
import Wordpad_16x16_4 from '../../png/Wordpad_16x16_4.png';

export const wordpadData = {
  '32x32_4': {
    imageSrc: Wordpad_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Wordpad_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WordpadProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wordpad: React.FC<WordpadProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wordpadData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
