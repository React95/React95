import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Hand_32x32_4 from '../../png/Hand_32x32_4.png';
import Hand_16x16_4 from '../../png/Hand_16x16_4.png';

export const handData = {
  '32x32_4': {
    imageSrc: Hand_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Hand_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface HandProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Hand: React.FC<HandProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = handData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
