import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Back_16x16_4 from '../../png/Back_16x16_4.png';

export const backData = {
  '16x16_4': {
    imageSrc: Back_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface BackProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Back: React.FC<BackProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = backData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
